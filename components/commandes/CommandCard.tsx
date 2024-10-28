import { Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { formatDate, ToCapitalize } from "@/functions/functions";

type Props = {
    id: number,
    idCommand: string,
    dateCreation: Date,
    dateLivraison: Date,
    prix: string,
    statut: number,
    name: string,
}

export function CommandCard({ id, idCommand, dateCreation, dateLivraison, prix, statut, name } : Props) {
    const listStatut = ['Création de livraison', 'En cours de livraison', 'Livrée'];

    return (                
      <Link push href={{pathname: "/commandes/[id]", params: {id: id}}} asChild>
        {/* <Pressable android_ripple={{color: Colors.light.tint, foreground: true}}> */}
        <Pressable>
          <View style={styles.clientContent}>
            <View style={styles.informationContent}>
                <ThemedText variant="commandTitle">{idCommand}</ThemedText>
                <ThemedText variant="body1">{(formatDate(dateCreation)).toString()}</ThemedText>
                <ThemedText variant="body1">{(formatDate(dateLivraison)).toString()}</ThemedText>
                <ThemedText variant="price">{prix}€</ThemedText>
                <ThemedText variant="body1">{listStatut[statut]}</ThemedText>
                <ThemedText variant="body1">Client : {ToCapitalize(name)}</ThemedText>
            </View>
          </View>
        </Pressable>
      </Link>
    );
}

const styles = StyleSheet.create({
    clientContent: {
      flexDirection: "row",
      gap: 5,
    },
    informationContent: {
      padding: 16,
      justifyContent: "space-evenly",
      borderRadius: 15,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: .25,
      shadowRadius: 4,
      elevation: 3
    }
  })