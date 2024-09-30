import { FlatList, Image, StyleSheet, View } from "react-native";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";

import { ClientCard } from "@/components/clients/ClientCard";

export default function Clients() {
    const clients = Array.from({length: 20}, (_, k) => ({
        id: k + 1,
        name: 'John Mayer',
        telephone: '+ 33 7 88 59 10 31'
    }));

    return (
        <Body iconType="people" mainTitle="Gestion des clients">
            <Card style={styles.mainCard}>
                <FlatList 
                    data={clients}
                    renderItem={({item}) => 
                        <ClientCard 
                            name={item.name}
                            telephone={item.telephone} />
                    }
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        </Body>
    );
}

const styles = StyleSheet.create({
  mainCard: {
   margin: 4,
   flex: 1
  }
})
