import { Colors } from "@/constants/Colors";
import { Shadows } from "@/constants/Shadows";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps;

export function Card({style, ...rest}: Props) {
    return <View style= {[style, styles, {backgroundColor: Colors.light.grayWhite}]} {...rest} />
}

const styles = {
    borderRadius: 5,
    ...Shadows.dp2
} satisfies ViewStyle