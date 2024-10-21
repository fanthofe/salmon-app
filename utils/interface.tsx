export interface Command {
    id: number;
    idCommand: string;
    dateCreation: Date;
    dateLivraison: Date;
    statut: number;
    clientName: string;
    prixTotal: string;
    products: {
        id: number;
        prix: number;
        quantite: number;
    }[];
}[]