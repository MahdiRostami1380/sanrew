"use client";

import { categories, sortByItems } from "@/models";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";

const FilterBar = () => {
  const [categoryState, setCategoryState] = useState("all");
  const [sortByMenu, setSortByMenu] = useState(false);
  const sortBy = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (sortBy.current && !sortBy.current.contains(event.target)) {
        setSortByMenu(false);
      }
    });
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center mt-16 select-none">
        <div
          className="flex relative items-center gap-2 cursor-pointer"
          onClick={() => setSortByMenu(true)}
          ref={sortBy}
        >
          <div className="md:text-lg">مرتب سازی</div>
          <FaChevronDown size={12} />
          {sortByMenu && (
            <div className="absolute top-full right-0 border-slate-950 border bg-slate-50 px-3 py-2 flex flex-col cursor-default">
              {sortByItems.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-pink-300 px-2 py-1 rounded-md text-[#8338ec]"
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`text-[#8338ec] md:text-lg cursor-pointer ${
                category.value === categoryState
                  ? "font-bold text-[#fb5607]"
                  : null
              }`}
              onClick={() => {
                setCategoryState(category.value);
              }}
            >
              {category.title}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 px-7 py-3 border border-slate-900">
          <div className="md:text-lg">فیلتر</div>
          <HiOutlineBars3BottomRight size={20} />
        </div>
      </div>
      <div className="flex items-center gap-4 lg:hidden mt-10 overflow-x-scroll overflow-y-hidden">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`text-[#8338ec] md:text-lg cursor-pointer ${
              category.value === categoryState
                ? "font-bold text-[#fb5607]"
                : null
            }`}
            onClick={() => {
              setCategoryState(category.value);
            }}
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
