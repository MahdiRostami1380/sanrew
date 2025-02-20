"use client";

import { accordionItems } from "@/models";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const Accordion = () => {
  const [itemState, setItemState] = useState(null);
  return (
    <section className="mt-16">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          itemState={itemState}
          setItemState={setItemState}
        />
      ))}
    </section>
  );
};

export default Accordion;
