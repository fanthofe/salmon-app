import { StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColors";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";

export default function Products() {
  const colors = useThemeColor();

  return (
    <Body iconType="fish" mainTitle="Gestion des produits">
      <Card style={styles.mainCard}>
      </Card>
    </Body>
  );
}

const styles = StyleSheet.create({
  mainCard: {
   margin: 4,
   flex: 1
  },
})
