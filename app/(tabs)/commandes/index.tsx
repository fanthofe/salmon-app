import { FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import { CommandCard } from "@/components/commandes/CommandCard";
import { formatDate } from "@/functions/functions";
import { DataServiceCommandes } from "@/data-service/DataService";
import { DayCommandCard } from "@/components/commandes/DayCommandCard";
import { useEffect, useState } from "react";
import { useFetchCommandes } from "@/hooks/useFetchQuery";
import commandesData from "@/assets/json/commandes.json"

export default function indexCommandes() {

  // const commandes = Array.from({length: 30}, (_, k) => {
  //   const firstDate = new Date(new Date().getTime() + (1 + Math.random() * 10) * 24 * 60 * 60 * 1000);

  //   return (
  //     {      
  //       id: k + 1,
  //       idCommand: ("CMD20241018" + (k + 1)).toString(),
  //       dateCreation: firstDate,
  //       dateLivraison: new Date(firstDate.getTime() + (1 + Math.random() * 10) * 24 * 60 * 60 * 1000),
  //       statut: 0 + Math.random() * 2, //0 = Création de la livraison ; 1 = En cours de livraison ; 2 = Livrée
  //       clientName: ('John Mayer' + (k + 1)).toString(),
  //       prixTotal: (350 + Math.random() * 350).toFixed(0),
  //       //idClient
  //       products: Array.from({length: (2 + Math.random() * 5)}, (_, i) => ({
  //         id: i + 1,
  //         prix: 25 + Math.random() * 350,
  //         quantite: Math.random() * 10,
  //       }))
  //     });
  //   }
  // );


  const [data, setData] = useState(commandesData);

  // useEffect(() => {
  //   fetch('./commandes.json')
  //     .then(response => response.json())
  //     .then(jsonData => setData(jsonData))
  //     .catch(error => console.error(error));
  // }, []);
    


  // const commandes = DataServiceCommandes();
  // console.log(commandes)

  // const listDateCreation = commandes.map(date => formatDate(date.dateCreation).toString());
  // const uniqDateCreations = [... new Set(listDateCreation)];
  // uniqDateCreations.sort((a, b) => a.split('/').reverse().join().localeCompare(b.split('/').reverse().join()));
  

  return (
    <Body iconType="basket" mainTitle="Gestion des commandes">
        <Card style={styles.mainCard}>
          <ScrollView>
            {/* {commandes.map((val) => {
              return (
                <DayCommandCard commandes={data[val]} indexDate={val} />
              )
            })} */}
          {

          }
          </ScrollView>
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
