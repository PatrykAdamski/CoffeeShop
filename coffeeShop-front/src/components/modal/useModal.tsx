import React, { useState } from 'react';
import { Modal } from '../modal/Modal';

export const useModal = () => {
  const [isOpen, setModalState] = useState(false);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};
