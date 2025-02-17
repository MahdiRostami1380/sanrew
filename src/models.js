import { FaTelegram, FaSquareInstagram } from "react-icons/fa6";

export const navItems = [
  { title: "آیتم", link: "./" },
  { title: "آیتم", link: "./" },
  { seprator: true },
  { title: "آیتم", link: "./" },
  { title: "آیتم", link: "./" },
  { title: "آیتم", link: "./" },
  { title: "آیتم", link: "./" },
];

export const categories = [
  { title: "کتگوری", value: "1" },
  { title: "کتگوری", value: "2" },
  { title: "کتگوری", value: "3" },
  { title: "کتگوری", value: "4" },
  { title: "کتگوری", value: "5" },
];

export const footerItems = [
  {
    subject: "محصولات",
    items: [
      { title: "آیتم اول", link: "./" },
      { title: "آیتم اول", link: "./" },
      { title: "آیتم اول", link: "./" },
    ],
  },
  {
    subject: "فروشگاه",
    items: [
      { title: "درباره ما", link: "./" },
      { title: "ارتباط با ما", link: "./" },
      { title: "مشاغل", link: "./" },
    ],
  },
  {
    subject: "ما را دنبال کنید",
    items: [
      { title: "تلگرام", link: "./", icon: <FaTelegram /> },
      { title: "اینستاگرام", link: "./", icon: <FaSquareInstagram /> },
    ],
  },
];
