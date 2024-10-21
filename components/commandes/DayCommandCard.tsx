import { FlatList } from "react-native";
import { CommandCard } from "./CommandCard";
import { Command } from "@/utils/interface";

type Props = {
    commandes: Array<Command>
}

export function DayCommandCard({commandes} : Props) {
    return (
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
        keyExtractor={(item) => item.id.toString()}
    />
    );
}