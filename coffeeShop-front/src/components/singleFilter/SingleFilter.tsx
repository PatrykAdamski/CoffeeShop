import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { ProductsContext } from '../../providers/ProductsProvider';
import { IProductsContextType } from '../../types/IProductsContextType';

import { getFilterByCategoriesProducts } from '../../api/apiProducts';

interface FilterProps {
  title: string;
  options: string[];
}

export const SingleFilter: React.FC<FilterProps> = ({ title, options }) => {
  const [activeFilter, setActiveFilter] = useState(false);

  const { setProducts } = useContext(ProductsContext) as IProductsContextType;

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
            <li
              key={index}
              onClick={() => getFilterByCategoriesProducts(setProducts, option)}
              className="single-filter__option"
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
