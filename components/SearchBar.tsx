import { Colors } from "@/constants/Colors"
import { useThemeColor } from "@/hooks/useThemeColors"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TextInput, View } from "react-native"

type Props = {
    value: string,
    // onChange prend en paramètre un string et ne renvoie rien
    onChange: (s: string) => void
}

export function SearchBar ({value, onChange}: Props) {
    const colors = useThemeColor();

    return <View style={styles.wrapper}>
        <Ionicons name="search" size={24} color={colors.tint} />
        <TextInput 
            onChangeText={onChange} 
            value={value} 
            style={styles.input}
            placeholder="Recherche" />
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: Colors.light.grayWhite,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        flex: 1
    }, 
    input : {
        flex: 1,
        color: Colors.light.tint
    }
})