import React from 'react';
import { Header } from '../../components/header/Header';
import { AboutUs } from '../../components/aboutUs/AboutUs';
import { CarouselBrand } from '../../components/carouselBrand/CarouselBrand';
import { Benefits } from '../../components/benefits/Benefits';

export const Homepage = () => {
  return (
    <>
      <Header />
      <CarouselBrand />
      <AboutUs />
      <Benefits />
    </>
  );
};
