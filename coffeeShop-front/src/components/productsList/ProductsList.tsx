import React, { useState, useEffect, useContext } from 'react';
import { Product } from '../product/Product';
import { SingleFilter } from '../singleFilter/SingleFilter';
import { getAllProducts } from '../../api/apiProducts';
import { ProductsContext } from '../../providers/ProductsProvider';
import { IProductsContextType } from '../../types/IProductsContextType';

import { getFilterByCategoriesProducts } from '../../api/apiProducts';

export const ProductsList = () => {
  const { products, setProducts } = useContext(
    ProductsContext
  ) as IProductsContextType;

  const [queries, setQueries] = useState({
    categorie: '',
    price: 0,
  });

  const filtersHandler = (e: any) => {
    setQueries({
      ...queries,
      [e.target.id]: e.target.attributes.value.value,
    });
  };

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  useEffect(() => {
    getFilterByCategoriesProducts(setProducts, queries);
  }, [queries]);

  return (
    <section className="products">
      <div className="filters">
        <p className="filters__title">Opcje przeglądania</p>
        <SingleFilter title={'Kategorie: (wybierz)'}>
          <li
            id="categorie"
            value={'Kawa ziarnista'}
            onClick={filtersHandler}
            className="single-filter__option"
          >
            Kawa ziarnista
          </li>
          <li
            id="categorie"
            value={'Kawa mielona'}
            onClick={filtersHandler}
            className="single-filter__option"
          >
            Kawa mielona
          </li>
        </SingleFilter>
        <SingleFilter title={'Cena: (wybierz)'}>
          <li
            id="price"
            value={1}
            onClick={filtersHandler}
            className="single-filter__option"
          >
            Cena rosnąco
          </li>
          <li
            id="price"
            value={-1}
            onClick={filtersHandler}
            className="single-filter__option"
          >
            Cena malejąco
          </li>
        </SingleFilter>
      </div>

      <div className="products__box">
        <h3 className="products__title">Kawa</h3>
        <div className="base__ornament"></div>
        <div className="products__container">
          {products.length ? (
            products.map((product) => (
              <Product key={product._id} {...product} />
            ))
          ) : (
            <h2>Nie znaleziono produktów</h2>
          )}
        </div>
      </div>
    </section>
  );
};
