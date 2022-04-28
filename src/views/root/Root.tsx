import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import { Header } from "../../components/header/Header";
import { AboutUs } from "../../components/aboutUs/AboutUs";
import { CarouselBrand } from "../../components/carouselBrand/CarouselBrand";
import { Benefits } from "../../components/benefits/Benefits";

function Root() {
  return (
    <>
      <Navigation />
      <Header />
      <CarouselBrand />
      <AboutUs />
      <Benefits />
    </>
  );
}

export default Root;
