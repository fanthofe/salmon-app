import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const endpoint = "https://pokeapi.co/api/v2";
const endpointSheet = "https://sheetdb.io/api/v1";

type API = {
    '/pokemon?limit=20' : {
        count: number,
        next: string | null,
        // le type Results est un tableau de name et url répété plusieurs fois donc array
        results: {name: string, url: string}[] 
    },
    '/pokemon?limit=151': {
        count: number,
        next: string | null,
        // le type Results est un tableau de name et url répété plusieurs fois donc array
        results: {name: string, url: string}[] 
    }
}

type APISheet = {
    '/u19ptl2fe8st8?sheet=utilisateurs' : [
        {
        id: number,
        command_id: number,
        nom: string,
        prenom: string,
        adresse: string,
        codepostal: string,
        ville: string,
        email: string,
        telephone: string
    }]
}

//useFetchQuery<> : les <> indique que l'on passe en clé "T" de type API
export function useFetchQuery<T extends keyof API>(path: T) {
    return useQuery({
        //Met en cache notre requête
        queryKey: [path],
        //Décrit la récupération des résultats 
        queryFn: async () => {
            await wait(1);
            // On retourne une promesse de API dont la clé est T
            return fetch(endpoint + path).then(
                (res) => {
                    return res.json() as Promise<API[T]>
                }
            );
        }
    });
}

export function useFetchQuerySheet<T extends keyof APISheet>(path: T) {
    return useQuery({
        //Met en cache notre requête
        queryKey: [path],
        //Décrit la récupération des résultats 
        queryFn: async () => {
            await wait(1);
            // On retourne une promesse de API dont la clé est T
            return fetch(endpointSheet + path).then(
                (res) => {
                    return res.json() as Promise<APISheet[T]>
                }
            );
        }
    });
}

// Scroll Infini
export function useInfiniteFetchQuery<T extends keyof API>(path : T) {
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({pageParam}) => {
            await wait(1);
            return fetch(pageParam, {
                headers: {
                    Accept: 'application/json',
                }
            }).then(res => res.json() as Promise<API[T]>);
        },
        getNextPageParam: (lastPage) => {
            if ('next' in lastPage) {
                return lastPage.next
            }
            return null;
        }
    })
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration * 1000));
}