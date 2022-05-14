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
    <>
      <div className="product-details">
        <img className="product-details__img" alt="product" src={img}></img>
        <h4 className="product-details__name">{name}</h4>
        <p className="product-details__categories">{categories}</p>
        <p className="product-details__price">{unitPrice} zł</p>
        <p className="product-details__description">{description}</p>
      </div>
      <Button size="normal" color="primary">
        Do koszyka
      </Button>
    </>
  );
};
