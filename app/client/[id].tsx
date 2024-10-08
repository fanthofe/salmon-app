import { Body } from "@/components/Body";
import { ButtonType } from "@/components/ButtonType";
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Patente() {
    const params = useLocalSearchParams();
    const [lastname, setLastName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [adresse, setAdresse] = useState('');
    const [codepostal, setCodePostal] = useState('');
    const [ville, setVille] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Body iconType="" mainTitle={"Client " + params.id.toString()}>
            <Card style={styles.mainCard}>
                <SafeAreaView style={{paddingHorizontal: 15}}>
                    <View>
                        <ThemedText variant="formTitle" color="tint" style={styles.formTitle}>Nom</ThemedText>
                        <TextInput 
                            value={lastname}
                            onChangeText={setLastName}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <ThemedText variant="formTitle" color="tint" style={styles.formTitle}>Prénom</ThemedText>
                        <TextInput 
                            value={firstname}
                            onChangeText={setFirstName}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <ThemedText variant="formTitle" color="tint" style={styles.formTitle}>Adresse</ThemedText>
                        <TextInput 
                            value={adresse}
                            onChangeText={setAdresse}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.formCol2}>
                        <View style={{flex: 2}}>
                            <ThemedText variant="formTitle" color="tint" style={styles.formTitle}>Code postal</ThemedText>
                            <TextInput 
                                value={codepostal}
                                onChangeText={setCodePostal}
                                style={styles.input}
                            />
                        </View>
                        <View style={{flex: 4}}>
                            <ThemedText variant="formTitle" color="tint" style={styles.formTitle}>Ville</ThemedText>
                            <TextInput 
                                value={ville}
                                onChangeText={setVille}
                                style={styles.input}
                            />
                        </View>
                    </View>
                    <View>
                        <ThemedText variant="formTitle" color="tint" style={styles.formTitle}>Email</ThemedText>
                        <TextInput 
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                        />
                    </View>
                    <ButtonType 
                        onPress={() => Alert.alert('Modification des informations clients')}
                        title="Enregistrer"
                        alt="Modifie les informations d'un client"
                    />
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
    formTitle: {
        height: 'auto',
        paddingVertical: 10
    },
    formCol2: {
        flexDirection: 'row',
        gap: 20,
    },
    input: {
        marginBottom: 20,
        height: 40,
        borderColor: Colors.light.grayLight,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    }
})