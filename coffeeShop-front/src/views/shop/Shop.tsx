import React from 'react';
import { slideOffersData } from '../../components/imageSlider/slideOffersData';
import { ImageSlider } from '../../components/imageSlider/ImageSlider';
import { ProductsList } from '../../components/productsList/ProductsList';

export const Shop = () => {
  return (
    <>
      <ImageSlider slides={slideOffersData} />
      <ProductsList />
    </>
  );
};
