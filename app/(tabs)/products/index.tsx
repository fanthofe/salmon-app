import { FlatList, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColors";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import { ProductCard } from "@/components/products/ProductCard";
import { DataServiceProducts } from "@/data-service/DataService";

export default function indexProducts() {
  const colors = useThemeColor();

  const products = DataServiceProducts();

  return (
    <Body iconType="fish" mainTitle="Gestion des produits">
      <Card style={styles.mainCard}>
        <FlatList 
          data={products}
          renderItem={({item}) => 
              <ProductCard 
                  id={item.id}
                  name={item.name}
                  price={item.prixKg}
                  image={item.image}
              />
          }
          keyExtractor={(item) => item.id.toString()}
        />
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
