export interface Produit {
  _id?: string;
  user?: string;
  categorieId: string;
  name: string;
  description: string;
  prix: string; // Assuming prix is of type number
  marque: string;
  taille: 'XS' | 'S' | 'M' | 'L' | 'XL';
  couleur: string;
  materieau: 'Coton' | 'Polyester' | 'Nylon';
  image: {
    url: string;
    fileName: string;
  };
  favoris?: boolean;
  paymentIntentId?: string;
  isFavorite?: boolean;

}
