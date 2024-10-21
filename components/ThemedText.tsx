import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColors"
import { StyleSheet, Text, TextProps } from "react-native"

const styles = StyleSheet.create({
    formTitle: {
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 16,
    },
    clientTitle: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 16,
    },
    commandTitle: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 20,
    },
    price: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 16,
    },
    button: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 18,
    },
    body1: {
        fontSize: 14,
        lineHeight: 16,
    },
    body2: {
        fontSize: 12,
        lineHeight: 16,
    },
    body3: {
        fontSize: 10,
        lineHeight: 16,
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    headline: {
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 32,
    },
    subtitle1: {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
    },
    subtitle2: {
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 16,
    },
    subtitle3: {
        fontWeight: "bold",
        fontSize: 10,
        lineHeight: 16,
    },
})

type Props = TextProps & {
    variant?: keyof typeof styles,
    color?: keyof typeof Colors["light"],
}

export function ThemedText({variant, color, style, ...rest}: Props) {
    const colors = useThemeColor();
    return <Text {...rest} style={[styles[variant ?? "body3"], {color: colors[color ?? "grayDark"]}, style]}/>;
}
