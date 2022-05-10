import React, { ReactNode, useState } from 'react';
import { IProduct } from '../types/IProduct';
import { IProductsContextType } from '../types/IProductsContextType';

export const ProductsContext = React.createContext<IProductsContextType | null>(
  null
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
