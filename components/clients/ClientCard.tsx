import { Image, ImageProps, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ToCapitalize } from "@/functions/functions";

type Props = {
    name: string,
    id: number,
    telephone: string
}

export function ClientCard({ name, id, telephone } : Props) {

    return (                
      <Link push href={{pathname: "/clients/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: Colors.light.tint, foreground: true}}>
          <View style={styles.clientElement}>
              <View style={styles.clientCard}>
                  <ThemedText variant="subtitle2" style={{paddingTop: 5}}>#{id}</ThemedText>
                  <View style={styles.clientContent}>
                    <View>  
                        <Image style={styles.avatar}
                        source={{uri: 
                          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}/>
                    </View>
                    <View style={styles.informationContent}>
                        <ThemedText variant="clientTitle">{ToCapitalize(name)}</ThemedText>
                        <ThemedText variant="body1">{telephone}</ThemedText>
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