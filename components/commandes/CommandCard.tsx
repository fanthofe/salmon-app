import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { formatDate, ToCapitalize } from "@/functions/functions";

type Props = {
    id: number,
    idCommand: string,
    dateCreation: Date,
    prix: number,
    statut: number,
    name: string,
}

export function CommandCard({ id, idCommand, dateCreation, prix, statut, name } : Props) {
    const listStatut = ['Création de livraison', 'En cours de livraison', 'Livrée'];

    return (                
      <Link push href={{pathname: "/commandes/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: Colors.light.tint, foreground: true}}>
          <View style={styles.clientElement}>
              <View style={styles.clientCard}>
                  <View style={styles.clientContent}>
                    <View style={styles.informationContent}>
                        <ThemedText variant="clientTitle">{idCommand}</ThemedText>
                        <ThemedText variant="body1">{(formatDate(dateCreation)).toString()}</ThemedText>
                        <ThemedText variant="body1">{prix}€</ThemedText>
                        <ThemedText variant="body1">{listStatut[statut]}</ThemedText>
                        <ThemedText variant="body1">Client : {ToCapitalize(name)}</ThemedText>
                    </View>
                  </View>
              </View>
              <View style={styles.renderSeparator}></View>
          </View>
        </Pressable>
      </Link>
    );
}

const styles = StyleSheet.create({
    clientElement: {
      paddingHorizontal: 12, 
    },
    clientCard: {
      paddingVertical: 12,
      flexDirection: "row",
      gap: 3
    },
    clientContent: {
      flexDirection: "row",
      gap: 10
    },
    informationContent: {
      justifyContent: "space-evenly",
    },
    avatar: {
      width: 70,
      height: 70,
      borderRadius: 50
    },
    renderSeparator: {
      height: 1,
      width: '100%',
      backgroundColor: '#D3D3D3',
    }
  })