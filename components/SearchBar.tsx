import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TextInput, View } from "react-native"

type Props = {
    value: string,
    // onChange prend en paramètre un string et ne renvoie rien
    onChange: (s: string) => void
}

export function SearchBar ({value, onChange}: Props) {
    return <View style={styles.input}>
        <Ionicons name="search" size={24} color={Colors.light.tint} />
        <TextInput 
            onChangeText={onChange} 
            value={value} 
            style={styles.text}
            placeholder="Recherche" />
    </View>
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: Colors.light.grayWhite,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 24,
        borderRadius: 50
    }, 
    text : {
        color: Colors.light.tint
    }
})