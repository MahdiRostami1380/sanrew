"use server";

import { generateRandomId } from "@/lib";

export async function fetchProducts() {
  let products = [
    {
      name: "ی چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 5,
      categories: [{ title: "لوازم‌التحریر", value: "stationery" }],
    },
    {
      name: "دو چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 0,
      categories: [{ title: "لوازم‌التحریر", value: "stationery" }],
    },
    {
      name: "سه چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 5,
      categories: [{ title: "لوازم‌التحریر", value: "stationery" }],
    },
    {
      name: "چار چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 5,
      categories: [{ title: "لوازم‌التحریر", value: "stationery" }],
    },
    {
      name: "پن چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 5,
      categories: [{ title: "لوازم‌التحریر", value: "stationery" }],
    },
    {
      name: "شیش چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 5,
      categories: [{ title: "لوازم‌التحریر", value: "stationery" }],
    },
    {
      name: "هف چیزی",
      price: 100,
      id: `p${generateRandomId(10)}`,
      details: "جزییات",
      rating: 5,
      description: [{ title: "title", description: "description" }],
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 5,
      categories: [
        { title: "لوازم‌التحریر", value: "stationery" },
        { title: "گل‌سر", value: "hair slide" },
      ],
    },
  ];

  return products;
}
