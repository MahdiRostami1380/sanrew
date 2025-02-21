"use client";

import { navItems } from "@/models";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { MdApps } from "react-icons/md";
import { useState, useEffect } from "react";

const Menu = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    if (hamburgerMenu) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
  }, [hamburgerMenu]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setHamburgerMenu(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`section-container fixed left-0 right-0 top-0 backdrop-blur-sm flex items-center ${
          hamburgerMenu ? "justify-end" : "justify-between"
        } h-20 select-none z-30`}
      >
        {!hamburgerMenu && (
          <Link href={"/"}>
            <img src="/logo.png" alt="logo" className="h-8 md:h-10 lg:h-12" />
          </Link>
        )}
        <div className="hidden md:flex md:gap-5 lg:gap-10">
          <nav className="flex items-center md:gap-5 lg:gap-10">
            {navItems.map((navItem, index) => (
              <div key={index}>
                {navItem.seprator ? (
                  <div className="h-3 w-[1px] bg-[#a1a5ae]"></div>
                ) : (
                  <Link href={navItem.link}>
                    <div className="text-[#ff006e] text-xl duration-500 hover:text-[#8338ec]">
                      {navItem.title}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex md:gap-5 lg:gap-10 items-center">
            <HiMagnifyingGlass size={30} className="cursor-pointer" />
            <HiOutlineShoppingBag size={30} className="cursor-pointer" />
            <MdApps size={30} className="cursor-pointer" />
          </div>
        </div>
        {hamburgerMenu ? (
          <IoClose
            size={30}
            className="md:hidden"
            onClick={() => setHamburgerMenu(false)}
          />
        ) : (
          <RxHamburgerMenu
            size={30}
            className="md:hidden"
            onClick={() => setHamburgerMenu(true)}
          />
        )}
      </div>
      {hamburgerMenu && (
        <div className="bg-white w-screen h-screen fixed top-0 left-0 z-20 pt-28 pr-5 flex flex-col gap-5">
          {navItems.map((item, index) => {
            if (item.title) {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="text-4xl text-[#ff006e]"
                >
                  {item.title}
                </Link>
              );
            }
          })}
          <div className="flex gap-5">
            <HiMagnifyingGlass size={30} className="cursor-pointer" />
            <HiOutlineShoppingBag size={30} className="cursor-pointer" />
            <MdApps size={30} className="cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
