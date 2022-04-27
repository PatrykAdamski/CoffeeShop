import React from "react";
import { Navigation } from "../../components/navigation/Navigation";
import { Header } from "../../components/header/Header";
import { AboutUs } from "../../components/aboutUs/AboutUs";

function Root() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutUs />
    </>
  );
}

export default Root;
