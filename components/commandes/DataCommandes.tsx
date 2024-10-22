import { formatDate } from "@/functions/functions";

export function DataCommandes() {
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
            products: Array.from({length: (2 + Math.random() * 5)}, (_, i) => ({
              id: i + 1,
              prix: 25 + Math.random() * 350,
              quantite: Math.random() * 10,
            }))
          });
        }
      );
    
      const listDateCreation = commandes.map(date => formatDate(date.dateCreation).toString());
      const dates = [... new Set(listDateCreation)];
      dates.sort((a, b) => a.split('/').reverse().join().localeCompare(b.split('/').reverse().join()));
      
      // const dates = [...new Set(commandes.map(commande => commande.dateCreation.toISOString().split('T')[0]))];

      const commandesParDate = dates.reduce((acc, date) => {
        acc[date] = commandes.filter(commande => formatDate(commande.dateCreation).toString() === date);
        return acc;
      }, {});
      // commandesByDateLivraison.push(...commandes.filter(item => uniqDateCreations.includes(formatDate(item.dateCreation).toString())))

      return commandesParDate;
}