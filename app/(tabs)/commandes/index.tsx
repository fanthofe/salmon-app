import { FlatList, StyleSheet } from "react-native";
import { Card } from "@/components/Card";
import { Body } from "@/components/Body";
import { CommandCard } from "@/components/commandes/CommandCard";
import { formatDate } from "@/functions/functions";
import { DataCommandes } from "@/components/commandes/DataCommandes";

export default function indexCommandes() {

  const commandes = Array.from({length: 30}, (_, k) => {
    const firstDate = new Date(new Date().getTime() + (1 + Math.random() * 10) * 24 * 60 * 60 * 1000);

    return (
      {      
        id: k + 1,
        idCommand: ("CMD20241018" + (k + 1)).toString(),
        dateCreation: firstDate,
        dateLivraison: new Date(firstDate.getTime() + (1 + Math.random() * 10) * 24 * 60 * 60 * 1000),
        statut: 0 + Math.random() * 2, //0 = Création de la livraison ; 1 = En cours de livraison ; 2 = Livrée
        clientName: ('John Mayer' + (k + 1)).toString(),
        prixTotal: (350 + Math.random() * 350).toFixed(0),
        //idClient
        products: Array.from({length: (2 + Math.random() * 5)}, (_, i) => ({
          id: i + 1,
          prix: 25 + Math.random() * 350,
          quantite: Math.random() * 10,
        }))
      });
    }
  );

  const listDateCreation = commandes.map(date => formatDate(date.dateCreation).toString());
  const uniqDateCreations = [... new Set(listDateCreation)];
  uniqDateCreations.sort((a, b) => a.split('/').reverse().join().localeCompare(b.split('/').reverse().join()));
  
  const data = DataCommandes();
  console.log(data)

  return (
    <Body iconType="basket" mainTitle="Gestion des commandes">
        <Card style={styles.mainCard}>
        <FlatList 
            data={commandes}
            renderItem={({item}) => 
                <CommandCard 
                    id={item.id}
                    idCommand={item.idCommand}
                    dateCreation={item.dateCreation}
                    dateLivraison={item.dateLivraison}
                    prix={item.prixTotal}
                    statut={item.statut}
                    name={item.clientName}
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
