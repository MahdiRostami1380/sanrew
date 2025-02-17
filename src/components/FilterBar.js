"use client";

import { categories } from "@/models";
import { FaChevronDown } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";

const FilterBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-16 select-none">
        <div className="flex items-center gap-2">
          <div className="md:text-lg">مرتب سازی</div>
          <FaChevronDown size={12} />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="text-[#8338ec] md:text-lg cursor-pointer"
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
          <div key={index} className="text-[#8338ec] md:text-lg cursor-pointer">
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
