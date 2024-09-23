import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColors";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Card } from "@/components/Card";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "@/constants/Colors";
import PieChart from 'react-native-pie-chart';

export default function Index() {
  const colors = useThemeColor();
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00'];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faFish} style={styles.icon} size={40}/>
        <ThemedText variant="headline" color="grayWhite">Gestion des commandes - Saumon</ThemedText>
      </View>
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
    color: "white"
  },
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
