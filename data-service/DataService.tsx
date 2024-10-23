import { formatDate } from "@/functions/functions";

export function DataServiceCommandes() {
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
      
      const commandesParDate = dates.reduce((acc, date) => {
        const filteredCommandes = commandes.filter(commande => formatDate(commande.dateCreation).toString() === date);
        if (filteredCommandes.length > 0) {
          acc[date] = filteredCommandes;
        }
        return acc;
      }, {});

      return commandesParDate;
}

export function DataServiceProducts() {
  // Poissirène #118
  // Poissoroy #119
  // Magicarpe #129

  const salmons = [
      {
        "id": 1,
        "name": "Saumon d'élevage",
        "prixKg": "13",
        "islabelRouge": false,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
      },
      {
        "id": 2,
        "name": "Saumon d'élevage",
        "prixKg": "15",
        "islabelRouge": true,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
      },
      {
        "id": 3,
        "name": "Saumon fumé",
        "prixKg": "16",
        "islabelRouge": false,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
      },
      {
        "id": 4,
        "name": "Saumon sauvage ou Saumon du Pacifique",
        "prixKg": "23",
        "islabelRouge": true,
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
      },
  ];

  return salmons;
}