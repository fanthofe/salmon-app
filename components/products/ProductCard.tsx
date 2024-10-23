import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ToCapitalize } from "@/functions/functions";

type Props = {
    id: number,
    name: string,
    price: string
    image: string
}

export function ProductCard({ name, id, price, image } : Props) {

    return (                
      <Link push href={{pathname: "/clients/[id]", params: {id: id}}} asChild>
        <Pressable android_ripple={{color: Colors.light.tint, foreground: true}}>
          <View style={styles.productElement}>
              <View style={styles.productCard}>
                  <View style={styles.productContent}>
                    <View>  
                        <Image style={styles.avatar}
                          source={{uri: image}}
                        />
                    </View>
                    <View style={styles.informationContent}>
                      <View>
                        <ThemedText variant="clientTitle">{ToCapitalize(name)}</ThemedText>
                      </View>
                        <ThemedText variant="body1">{price} € / kg</ThemedText>
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
    productElement: {
      paddingHorizontal: 12, 
    },
    productCard: {
      paddingVertical: 12,
      flexDirection: "row",
      gap: 3
    },
    productContent: {
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