import { FlatList } from "react-native";
import { CommandCard } from "./CommandCard";
import { Command } from "@/utils/interface";
import { ThemedText } from "../ThemedText";

type Props = {
    commandes: Array<Command>,
    indexDate: string
}

export function DayCommandCard({commandes, indexDate} : Props) {
    
    return (
        <>
            <ThemedText>{indexDate}</ThemedText>
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
        </>
    );
}