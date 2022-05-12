import React, { useState } from 'react';
import { slideOffersData } from '../../components/imageSlider/slideOffersData';
import { ImageSlider } from '../../components/imageSlider/ImageSlider';
import { ProductsList } from '../../components/productsList/ProductsList';
import { useModal } from '../../components/modal/useModal';
import { IProduct } from 'types/IProduct';
import { ProductDetails } from 'components/productDetails/ProductDetails';

const initialState = {
  _id: '',
  name: '',
  brand: '',
  description: '',
  available: 0,
  unitPrice: 0,
  grammage: 0,
  img: '',
  isSale: false,
  categories: [''],
};

export const Shop = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentProduct, setCurrentProduct] = useState<IProduct>(initialState);

  const handleOpenProductDetails = (data: IProduct) => {
    handleOpenModal();
    console.log(data);
    setCurrentProduct(data);
  };

  return (
    <>
      <ImageSlider slides={slideOffersData} />
      <ProductsList handleOpenProductDetails={handleOpenProductDetails} />
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <ProductDetails {...currentProduct}></ProductDetails>
        </Modal>
      ) : null}
    </>
  );
};
