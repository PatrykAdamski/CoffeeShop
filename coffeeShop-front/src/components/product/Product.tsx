import React from 'react';
import { Button } from '../button/Button';
import { IProduct } from '../../types/IProduct';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Product: React.FC<IProduct> = ({ image, name, price }) => {
  return (
    <div className="product">
      <img alt="product" src={image}></img>
      <h4 className="product__name">{name}</h4>
      <p className="product__price">{price} zł</p>
      <div className="product__buttons-box">
        <div className="product__magnifier">
          <FontAwesomeIcon
            className="product__magnifier-icon"
            icon={faMagnifyingGlass}
          />
        </div>
        <Button size="normal" color="primary" textInside="Do koszyka"></Button>
      </div>
    </div>
  );
};
