import { Colors } from "@/constants/Colors";
import { Shadows } from "@/constants/Shadows";
import { useThemeColor } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps;

export function Card({style, ...rest}: Props) {
    const colors = useThemeColor();
    return <View style= {[style, styles, {backgroundColor: "white"}]} {...rest} />
}

const styles = {
    borderRadius: 5,
    ...Shadows.dp2
} satisfies ViewStyle