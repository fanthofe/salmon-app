import { Body } from "@/components/Body";
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Patente() {
    const params = useLocalSearchParams();
    const [name, setName] = useState('');

    return (
        <Body iconType="" mainTitle={"Client " + params.id.toString()}>
            <Card style={styles.mainCard}>
                <SafeAreaView style={{paddingVertical: 10, paddingHorizontal: 15}}>
                    <View>
                        <ThemedText>Nom</ThemedText>
                        <TextInput 
                            value={name}
                            onChangeText={setName}
                            style={styles.input}
                        />
                    </View>
                </SafeAreaView>
            </Card>
        </Body>
    );
}

const styles = StyleSheet.create({
    mainCard: {
     margin: 4,
     flex: 1
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    }
})