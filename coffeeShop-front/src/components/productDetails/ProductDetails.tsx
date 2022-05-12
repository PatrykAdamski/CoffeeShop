import React from 'react';
import { IProduct } from 'types/IProduct';
import { Button } from '../button/Button';

export const ProductDetails: React.FC<IProduct> = ({
  img,
  name,
  categories,
  unitPrice,
  description,
}) => {
  return (
    <div className="product">
      <img alt="product" src={img}></img>
      <h4 className="product__name">{name}</h4>
      <p className="product__categories">{categories}</p>
      <p className="product__price">{unitPrice} zł</p>
      <p className="product__description">{description}</p>
      <div className="product__buttons-box">
        <Button size="normal" color="primary">
          Do koszyka
        </Button>
      </div>
    </div>
  );
};
