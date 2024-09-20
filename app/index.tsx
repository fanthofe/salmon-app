import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText variant="headline">Gestion des commandes - Saumon</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'salmon', padding: 24},
  link: {padding: 10, backgroundColor: 'cyan', fontSize:15, width:70, borderRadius: 25}
})
