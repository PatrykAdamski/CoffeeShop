import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonHamburger } from '../hamburgerMenu/HamburgerMenu';
import Logo from '../logo/Logo';
import { UserNav } from '../userNav/UserNav';

export const Navigation = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const handleToggleMenuActive = () => {
    setMenuActive(!isMenuActive);
  };

  return (
    <nav
      className={`nav
    ${isMenuActive ? 'nav--active' : ''}`}
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
          <Link to="/" className="nav__item">
            Strona Główna
          </Link>
          <Link to="/shop" className="nav__item">
            Sklep
          </Link>
          <Link to="/new" className="nav__item">
            Nowości
          </Link>
          <Link to="/contact" className="nav__item">
            Kontakt
          </Link>
        </ul>
      </div>
      <UserNav />
    </nav>
  );
};
