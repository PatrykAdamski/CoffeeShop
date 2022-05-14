import { Button } from 'components/button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalContainer = document.getElementById('modal-container');

interface IModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    if (modalContainer !== null) {
      modalContainer.appendChild(modalNode);
    }

    return () => {
      if (modalContainer !== null) {
        modalContainer.removeChild(modalNode);
      }
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      <div onClick={handleClose} className="modal__close-button">
        X
      </div>
    </div>,
    modalNode
  );
};
