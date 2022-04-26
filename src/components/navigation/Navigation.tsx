import React from "react";
import { useState } from "react";
import { ButtonHamburger } from "../hamburgerMenu/HamburgerMenu";
import Logo from "../logo/Logo";
import { UserNav } from "../userNav/UserNav";

export default function Navigation() {
  const [isMenuActive, setMenuActive] = useState(false);

  const handleToggleMenuActive = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <nav
      className={`nav
    ${isMenuActive ? "nav--active" : ""}`}
    >
      <div className="nav__container">
        <Logo />
        <ButtonHamburger
          isMenuActive={isMenuActive}
          handleToggleMenuActive={handleToggleMenuActive}
        />
      </div>
      <div className="nav__container-list">
        <ul className="nav__list">
          <li className="nav__item">Strona Główna</li>
          <li className="nav__item">Sklep</li>
          <li className="nav__item">Nowości</li>
          <li className="nav__item">Kontakt</li>
        </ul>
      </div>
      <UserNav />
    </nav>
  );
}
