import { IProduct } from '../types/IProduct';

export interface IProductsContextType {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
