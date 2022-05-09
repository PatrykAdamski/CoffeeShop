import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface FilterProps {
  title: string;
  options: string[];
}

export const SingleFilter: React.FC<FilterProps> = ({ title, options }) => {
  const [activeFilter, setActiveFilter] = useState(false);

  const filterToggle = () => {
    setActiveFilter(!activeFilter);
  };

  return (
    <div onClick={filterToggle} className="single-filter">
      <span className="single-filter__title">{title}</span>
      <FontAwesomeIcon
        className="single-filter__arrow"
        icon={activeFilter ? faArrowUp : faArrowDown}
      />
      <ul
        className={`single-filter__list ${
          activeFilter ? 'single-filter__list--active' : ''
        }`}
      >
        {options.map((option, index) => {
          return (
            <li key={index} className="single-filter__option">
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
