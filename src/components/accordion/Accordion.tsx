import React, { useState } from "react";
import { AccordionItem } from "../accordion/AccordionItem";

type AccordionProps = { data: { title: string; listItems: string[] }[] };

export const Accordion = ({ data }: AccordionProps) => {
  const [clickedAccordionItem, setClickedAccordionItem] = useState(0);

  const handleToggle = (index: number) => {
    if (clickedAccordionItem === index) {
      return setClickedAccordionItem(0);
    }
    setClickedAccordionItem(index);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <AccordionItem
            index={index + 1}
            handleToggle={handleToggle}
            isActive={clickedAccordionItem === index + 1}
            title={item.title}
            listItems={item.listItems}
          />
        );
      })}
    </>
  );
};
