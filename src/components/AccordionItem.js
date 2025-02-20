"use client";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const AccordionItem = ({ item, itemState = 3, setItemState }) => {
  return (
    <div
      className="flex items-start min-h-14 pt-4 md:pt-9 md:min-h-28 flex-col border-b border-[#9e9e9e] cursor-pointer"
      onClick={() => {
        item.id === itemState ? setItemState(null) : setItemState(item.id);
      }}
    >
      <div className="flex justify-between w-full">
        <h3 className="text-[#8338ec] md:text-3xl lg:text-4xl">{item.ask}</h3>
        {item.id === itemState ? (
          <HiChevronUp className="text-slate-600 text-base md:text-3xl lg:text-4xl" />
        ) : (
          <HiChevronDown className="text-slate-600 text-base md:text-3xl lg:text-4xl" />
        )}
      </div>
      {item.id === itemState && (
        <p className="text-sm md:text-xl lg:text-2xl mt-3 md:mt-5 mb-3 md:mb-7">
          {item.answer}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
