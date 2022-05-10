import React, { useEffect, useContext } from 'react';
import { Product } from '../product/Product';
import { SingleFilter } from '../singleFilter/SingleFilter';
import { getAllProducts } from '../../api/apiProducts';
import { ProductsContext } from '../../providers/ProductsProvider';
import { IProductsContextType } from '../../types/IProductsContextType';

export const ProductsList = () => {
  const { products, setProducts } = useContext(
    ProductsContext
  ) as IProductsContextType;

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  return (
    <section className="products">
      <div className="filters">
        <p className="filters__title">Opcje przeglądania</p>
        <SingleFilter
          title={'Kategorie: (wybierz)'}
          options={['Kawa ziarnista', 'Kawa mielona']}
        />
        <SingleFilter
          title={'Cena: (wybierz)'}
          options={['Cena rosnąco', 'Cena malejąco']}
        />
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
