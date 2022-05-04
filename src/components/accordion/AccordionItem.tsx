import React from "react";
import {
  faCircleArrowDown,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AccordionItemProps {
  title: string;
  listItems: string[];
  isActive: boolean;
  index: number;
  handleToggle: (index: number) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  listItems,
  isActive,
  index,
  handleToggle,
}) => {
  return (
    <div className={`accordion ${isActive ? "accordion--active" : ""}`}>
      <div onClick={() => handleToggle(index)} className="accordion__container">
        <p className="accordion__title">{title}</p>
        <FontAwesomeIcon
          className="accordion__icon-arrow"
          icon={isActive ? faCircleArrowUp : faCircleArrowDown}
        />
      </div>
      <ul className="accordion__list">
        {listItems.map((item) => {
          return <a href="/#">{item}</a>;
        })}
      </ul>
    </div>
  );
};
