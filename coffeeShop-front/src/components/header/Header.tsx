import React from 'react';
import { Button } from '../button/Button';

export const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">CoffeeShop</h2>
      <h1 className="header__subtitle">Najlepszy sklep z kawą w polsce</h1>
      <Button size="large" color="secondary">
        Kup teraz
      </Button>
      <div className="header__image"></div>
    </header>
  );
};
