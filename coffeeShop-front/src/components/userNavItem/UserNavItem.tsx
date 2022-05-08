import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

interface IconPropp {
  nameIcon: IconLookup;
  text: string;
}

export const UserNavItem: React.FC<IconPropp> = ({ nameIcon, text }) => {
  return (
    <div className="user-nav__item">
      <FontAwesomeIcon className="user-nav__icon" icon={nameIcon} />
      <p>{text}</p>
    </div>
  );
};
