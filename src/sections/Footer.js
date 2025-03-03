import { footerItems } from "@/models";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-32">
      <div className="bg-[#ff006e] bg-opacity-20 py-10">
        <div className="section-container xl:max-w-[1280px] flex justify-between items-center md:items-start flex-col md:flex-row gap-7">
          {footerItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-xl">{item.subject}</h3>
              {item.items.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  href={subItem.link}
                  className={`text-[#8338ec] text-base md:text-[18px] ${
                    subItem.icon ? "flex gap-2" : null
                  }`}
                >
                  {subItem.icon ? subItem.icon : null}
                  {subItem.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex h-20 items-center justify-center bg-black text-lg text-[#fb5607]">
        <span className="text-[10px]">💙</span>
        <span className="text-[16px]">❤</span>💖Naris💖
        <span className="text-[16px]">❤</span>
        <span className="text-[10px]">💙</span>
      </div>
    </footer>
  );
};

export default Footer;
