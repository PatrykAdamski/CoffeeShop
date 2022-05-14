import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
const mainContainer = document.getElementById('root');

export const useModal = () => {
  const [isOpen, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
    if (mainContainer) mainContainer.classList.add('root__modal--active');
    console.log(mainContainer);
  };
  const handleCloseModal = () => {
    setModalState(false);
    if (mainContainer) mainContainer.classList.remove('root__modal--active');
  };

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
