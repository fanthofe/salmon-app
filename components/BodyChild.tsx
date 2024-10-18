import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, View } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColors";
import React from "react";
import { router } from "expo-router";

type Props = {
    iconType: string,
    mainTitle: string,
    children: React.ReactNode
}

export function BodyChild({iconType, mainTitle, children }: Props) {
    const colors = useThemeColor();

    return (
      <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
          <View style={styles.header}>
              <Pressable onPress={() => router.back()}>
                <TabBarIcon name="chevron-back" style={styles.icon}/>
              </Pressable>
              <TabBarIcon name={iconType} style={styles.icon}/>
              <ThemedText variant="headline" color="grayWhite">{mainTitle}</ThemedText>
          </View>
          {children}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20, 
      padding: 20
    },
    icon: {
      color: Colors.light.grayWhite
    },
})