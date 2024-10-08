import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type Props = {
    onPress(): void,
    title: string,
    alt: string
}

export function ButtonType({onPress, title, alt, ...rest}: Props) {
    return (
        <Pressable onPress={onPress} accessibilityLabel={alt} style={styles.button} {...rest}>
            <ThemedText variant="button" color="grayWhite">
                {title}
            </ThemedText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.light.tint,
    }
})