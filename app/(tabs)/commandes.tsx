import { StyleSheet } from "react-native";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";

export default function Commandes() {
  return (
    <Body iconType="basket" mainTitle="Gestion des commandes">
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
