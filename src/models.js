import { FaTelegram, FaSquareInstagram } from "react-icons/fa6";

export const navItems = [
  { title: "محصولات", link: "./" },
  { seprator: true },
  { title: "ارتباط با ما", link: "./" },
  { title: "درباره ما", link: "./" },
];

export const categories = [
  { title: "همه", value: "all" },
  { title: "گل‌سر", value: "hair slide" },
  { title: "لوازم‌التحریر", value: "stationery" },
  { title: "جواهرات", value: "jewellery" },
];

export const footerItems = [
  {
    subject: "محصولات",
    items: [
      { title: "گل‌سر", link: "./" },
      { title: "لوازم‌التحریر", link: "./" },
      { title: "جواهرات", link: "./" },
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
      { title: "تلگرام", link: "https://t.me/sannriow", icon: <FaTelegram /> },
      { title: "اینستاگرام", link: "./", icon: <FaSquareInstagram /> },
    ],
  },
];

export const sortByItems = [
  {
    title: "محبوب‌ترین‌ها",
    value: "populars",
  },
  {
    title: "اخیرا",
    value: "most-recent",
  },
  {
    title: "ارزان‌ به گران",
    value: "low-to-high",
  },
  {
    title: "گران به ارزان",
    value: "high-to-low",
  },
];
