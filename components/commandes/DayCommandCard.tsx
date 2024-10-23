import { FlatList, StyleSheet, View } from "react-native";
import { CommandCard } from "./CommandCard";
import { Command } from "@/utils/interface";
import { ThemedText } from "../ThemedText";

type Props = {
    commandes: Array<Command>,
    indexDate: string
}

export function DayCommandCard({commandes, indexDate} : Props) {
    
    return (
        <View style={styles.mainCard}>
            <ThemedText variant="dateCommandTitle" color="tint">{indexDate}</ThemedText>
            <FlatList 
            data={commandes}
            renderItem={({item}) => 
                <CommandCard 
                    id={item.id}
                    idCommand={item.idCommand}
                    dateCreation={item.dateCreation}
                    dateLivraison={item.dateLivraison}
                    prix={item.prixTotal}
                    statut={item.statut}
                    name={item.clientName}
                />
            }
            horizontal
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainCard: {
        padding: 12,
        gap: 4
    },
})