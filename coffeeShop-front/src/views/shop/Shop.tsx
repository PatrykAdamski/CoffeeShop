import React from 'react';
import { slideOffersData } from '../../components/imageSlider/slideOffersData';
import { ImageSlider } from '../../components/imageSlider/ImageSlider';

export const Shop = () => {
  return (
    <>
      <ImageSlider slides={slideOffersData} />
    </>
  );
};
