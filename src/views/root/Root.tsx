import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import { Header } from "../../components/header/Header";
import { AboutUs } from "../../components/aboutUs/AboutUs";
import { CarouselBrand } from "../../components/carouselBrand/CarouselBrand";

function Root() {
  return (
    <>
      <Navigation />
      <Header />
      <CarouselBrand />
      <AboutUs />
    </>
  );
}

export default Root;
