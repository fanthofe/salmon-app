import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Card } from "@/components/Card";
import PieChart from 'react-native-pie-chart';
import { Body } from "@/components/Body";

export default function Index() {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];

  return (
    <Body iconType="" mainTitle="Tableau de bord">
      <Card style={styles.mainCard}>
        <View style={styles.pieStyle}>
          <ThemedText variant="headline">Historique des commandes</ThemedText>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </Card>
    </Body>
  );
}

const styles = StyleSheet.create({
  mainCard: {
   margin: 4,
   flex: 1
  },
  pieStyle: {
    padding: 5,
    alignItems: "center",
    gap: 10
  }
})
