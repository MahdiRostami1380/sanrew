import { navItems } from "@/models";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { MdApps } from "react-icons/md";

const Menu = () => {
  return (
    <div className="section-container fixed left-0 right-0 top-0 backdrop-blur-sm flex items-center justify-between h-20 select-none">
      <Link href={"/"}>
        <img src="./logo.png" alt="logo" className="h-8 md:h-10 lg:h-12" />
      </Link>
      <div className="hidden md:flex md:gap-5 lg:gap-10">
        <nav className="flex items-center md:gap-5 lg:gap-10">
          {navItems.map((navItem, index) => (
            <div>
              {navItem.seprator ? (
                <div key={index} className="h-3 w-[1px] bg-[#a1a5ae]"></div>
              ) : (
                <Link key={index} href={navItem.link}>
                  <div className="text-[#ff006e] text-xl duration-500 hover:text-[#8338ec]">
                    {navItem.title}
                  </div>
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex md:gap-5 lg:gap-10 items-center">
          <HiMagnifyingGlass size={30} />
          <HiOutlineShoppingBag size={30} />
          <MdApps size={30} />
        </div>
      </div>
      <RxHamburgerMenu size={30} className="md:hidden" />
    </div>
  );
};

export default Menu;
