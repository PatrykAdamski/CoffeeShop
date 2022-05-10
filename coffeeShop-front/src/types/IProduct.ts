export interface IProduct {
  _id: string;
  name: string;
  brand: string;
  description: string;
  available: number;
  unitPrice: number;
  grammage: number;
  img: string;
  isSale: boolean;
  categories: string[];
}
