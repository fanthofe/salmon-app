import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

type Props = {
    name: string,
    telephone: string
}

export function ClientCard({ name, telephone } : Props) {
    return (                
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