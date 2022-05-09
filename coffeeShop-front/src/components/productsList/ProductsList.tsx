import React from 'react';
import { Product } from '../product/Product';
import { SingleFilter } from '../singleFilter/SingleFilter';

export const ProductsList = () => {
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
          <Product
            image={
              'https://sklepzkawa24.pl/environment/cache/images/300_300_productGfx_1004/kawa-ziarnista-bueno-momento.jpg'
            }
            name="Kawa ziarnista JACOBS 1000g"
            price="49.99"
          />
          <Product
            image={
              'https://sklepzkawa24.pl/environment/cache/images/300_300_productGfx_1004/kawa-ziarnista-bueno-momento.jpg'
            }
            name="Kawa ziarnista JACOBS 1000g"
            price="49.99"
          />
          <Product
            image={
              'https://sklepzkawa24.pl/environment/cache/images/300_300_productGfx_1004/kawa-ziarnista-bueno-momento.jpg'
            }
            name="Kawa ziarnista JACOBS 1000g"
            price="49.99"
          />
          <Product
            image={
              'https://sklepzkawa24.pl/environment/cache/images/300_300_productGfx_1004/kawa-ziarnista-bueno-momento.jpg'
            }
            name="Kawa ziarnista JACOBS 1000g"
            price="49.99"
          />
        </div>
      </div>
    </section>
  );
};
