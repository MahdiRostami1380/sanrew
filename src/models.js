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
  { title: "گردنبند", value: "necklace" },
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

export const accordionItems = [
  { ask: "آیا در صورت راضی نبودن امکان عودت محصول است؟", answer: "نه", id: 0 },
  { ask: "آیا تخفیف می‌دهید؟", answer: "نه", id: 1 },
  { ask: "آیا مورد اطمینان هستید؟", answer: "آره", id: 2 },
  {
    ask: "زمان تحویل محصول بعد از سفارش چند روز است؟",
    answer: "نمیدونم",
    id: 3,
  },
];

export const sidebarItems = [
  { title: "اضافه کردن محصول", value: "add product" },
];
