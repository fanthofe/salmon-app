import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ComponentProps } from "react";

type Props = IconProps<ComponentProps<typeof Ionicons>['name']>;

export function TabBarIcon({style, ...rest}: Props) {
    return <Ionicons size={28} style={[style, {marginBottom: -3}]} {...rest} />;
}