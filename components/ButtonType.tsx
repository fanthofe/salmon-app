import { Pressable } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {

}

export function ButtonType({onPress, title, ...rest}: Props) {
    return (
        <Pressable onPress={onPress}>
            <ThemedText>
                {title}
            </ThemedText>
        </Pressable>
    );
}