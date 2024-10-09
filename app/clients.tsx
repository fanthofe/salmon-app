import { FlatList, ActivityIndicator, StyleSheet, View } from "react-native";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import { ClientCard } from "@/components/clients/ClientCard";
import { useInfiniteFetchQuery } from "@/hooks/useFetchQuery";
import { getClientId } from "@/functions/functions";
import { Colors } from "@/constants/Colors";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

export default function Clients() {
    const clients = Array.from({length: 20}, (_, k) => ({
        id: k + 1,
        name: 'John Mayer',
        telephone: '+ 33 7 88 59 10 31'
    }));

    const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=20');
    const [search, setSearch] = useState('');
    const clientes = data?.pages.flatMap(page => page.results) ?? [];
    const filteredClientes = search ? clientes.filter(p => p.name.includes(search.toLowerCase())) : clientes;

    return (
        <Body iconType="people" mainTitle="Gestion des clients">
            <View>
                <SearchBar value={search} onChange={setSearch} />
            </View>
            <Card style={styles.mainCard}>
                <FlatList 
                    data={filteredClientes}
                    renderItem={({item}) => 
                        <ClientCard 
                            id={getClientId(item.url)}
                            name={item.name}
                            telephone="+ 33 6 28 46 91 73 " />
                    }
                    keyExtractor={(item) => item.url}
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
  loader: {

  }
})
