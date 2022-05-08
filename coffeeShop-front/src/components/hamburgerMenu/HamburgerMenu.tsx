import React from 'react';

interface ButtonHamburgerProps {
  isMenuActive: boolean;
  handleToggleMenuActive: () => void;
}

export const ButtonHamburger: React.FC<ButtonHamburgerProps> = ({
  isMenuActive,
  handleToggleMenuActive,
}) => {
  return (
    <button
      className={`hamburger ${isMenuActive ? 'hamburger--active' : ''}`}
      onClick={handleToggleMenuActive}
    >
      <span className="hamburger__bars bars"></span>
      <span className="hamburger__bars bars"></span>
      <span className="hamburger__bars bars"></span>
    </button>
  );
};
