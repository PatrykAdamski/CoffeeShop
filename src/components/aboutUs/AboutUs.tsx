import React from "react";

export const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div className="aboutUs__container">
        <h2 className="aboutUs__title">Witamy</h2>
        <h3 className="aboutUs__subtitle">Oto nasza historia</h3>
        <div className="base__ornament"></div>
        <p className="aboutUs__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          placeat, explicabo quod dolor laborum optio odio cum ratione dicta
          officia eum corrupti nostrum nobis at quis eos, deleniti soluta
          officiis eveniet architecto? Iusto id minus tenetur praesentium
          laudantium earum necessitatibus, obcaecati expedita odit ratione dicta
          neque harum vel aliquid eveniet.
        </p>
        <a href="/">Więcej o nas</a>
      </div>
      <div className="aboutUs__image"></div>
    </section>
  );
};
