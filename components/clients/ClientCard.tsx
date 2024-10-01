import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

type Props = {
    name: string,
    id: number,
    telephone: string
}

export function ClientCard({ name, id, telephone } : Props) {
    return (                
      <Link href={{pathname: "/client/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: Colors.light.tint, foreground: true}}>
          <View style={{paddingHorizontal: 12}}>
              <View style={styles.clientCard}>
                  <View>  
                      <Image style={styles.avatar}
                      source={require("@/assets/images/avatar-client.jpg")}/>
                  </View>
                  <View style={styles.informationContent}>
                      <ThemedText variant="clientTitle">{name}</ThemedText>
                      <ThemedText variant="body1">{telephone}</ThemedText>
                  </View>
              </View>
              <View style={styles.renderSeparator}></View>
          </View>
        </Pressable>
      </Link>
    );
}

const styles = StyleSheet.create({
    clientCard: {
      paddingVertical: 12,
      flexDirection: "row",
      gap: 10
    },
    informationContent: {
      justifyContent: "space-evenly",
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 50
    },
    renderSeparator: {
      height: 1,
      width: '100%',
      backgroundColor: '#D3D3D3',
    }
  })