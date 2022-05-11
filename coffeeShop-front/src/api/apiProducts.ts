import React from 'react';
import { IProduct } from '../types/IProduct';
import { api, endpoints } from '../api/index';

export const getAllProducts = (
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
) => {
  api
    .get<Array<IProduct>>(`${endpoints.products}/all`)
    .then(({ data }) => {
      setProducts(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getFilterByCategoriesProducts = (
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
  queries: { categorie: string; price: number }
) => {
  api
    .get<Array<IProduct>>(
      `${endpoints.products}/all/?categories=${queries.categorie}&price=${queries.price}`
    )
    .then(({ data }) => {
      setProducts(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
