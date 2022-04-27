import React from "react";

import LogoBrand1 from "../../assets/images/LogoBrand_1.png";
import LogoBrand2 from "../../assets/images/LogoBrand_2.png";
import LogoBrand3 from "../../assets/images/LogoBrand_3.png";
import LogoBrand4 from "../../assets/images/LogoBrand_4.png";
import LogoBrand5 from "../../assets/images/LogoBrand_5.png";

const tableWithBrands: string[] = [
  LogoBrand1,
  LogoBrand2,
  LogoBrand3,
  LogoBrand4,
  LogoBrand5,
  LogoBrand1,
  LogoBrand2,
  LogoBrand3,
  LogoBrand4,
];

export const CarouselBrand = () => {
  return (
    <section className="carousel-brand">
      <div className="carousel-brand__container">
        <div className="carousel-brand__container-items">
          {tableWithBrands.map((brand: string): JSX.Element => {
            return (
              <img
                className="carousel-brand__item"
                alt="logo-brand"
                src={brand}
              ></img>
            );
          })}
        </div>
      </div>
    </section>
  );
};
