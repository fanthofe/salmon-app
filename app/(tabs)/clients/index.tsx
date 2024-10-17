import { FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import { ClientCard } from "@/components/clients/ClientCard";
import { useFetchQuery, useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { getClientId } from "@/functions/functions";
import { Colors } from "@/constants/Colors";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";
import { SortButton } from "@/components/sortButton";

export default function Clients() {
    // const clients = Array.from({length: 20}, (_, k) => ({
    //     id: k + 1,
    //     name: 'John Mayer',
    //     telephone: '+ 33 7 88 59 10 31'
    // }));

    const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=20');
    const [search, setSearch] = useState('');
    const [sortKey, setSortKey] = useState<"id" | "name">('id');
    const rawClientes = useFetchQuery('/pokemon?limit=151');
    const searchClientes = rawClientes.data?.results.map(
        r => ({name: r.name, id: getClientId(r.url)})
    ) ?? [];

    const clientes = data?.pages.flatMap(page => page.results.map(
        r => ({name: r.name, id: getClientId(r.url)})
    )) ?? [];

    const filteredClientes = [...(search 
            ? searchClientes?.filter((p) => p.name.includes(search.toLowerCase()) 
            || p.id.toString() === search) 
            : clientes),
    ].sort((a, b) => a[sortKey] < b[sortKey] ? -1 : 1);

    // .sort((a, b) => a[sortKey] < b[sortKey] ? -1 : 1)
    return (
        <Body iconType="people" mainTitle="Gestion des clients">
            <View style={styles.buttonField}>
                <SearchBar value={search} onChange={setSearch} />
                <SortButton value={sortKey} onChange={setSortKey} />
            </View>
            <Card style={styles.mainCard}>
                <FlatList 
                    data={filteredClientes}
                    renderItem={({item}) => 
                        <ClientCard 
                            id={item.id}
                            name={item.name}
                            telephone="+ 33 6 28 46 91 73 " />
                    }
                    keyExtractor={(item) => item.id.toString()}
                    // Ajoute un loader à chaque nouveau chargement de la page
                    ListFooterComponent={
                        isFetching ? <View style={styles.loader}><ActivityIndicator size='large' color={Colors.light.tint} /></View> : null
                    }
                    // Détecte la fin d'une liste
                    onEndReached={search ? undefined : () => fetchNextPage()}
                />
            </Card>
        </Body>
    );
}

const styles = StyleSheet.create({
  mainCard: {
    paddingVertical: 5,
    margin: 4,
    flex: 1
  }, 
  buttonField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
    gap: 10
  },
  loader: {

  }
})
