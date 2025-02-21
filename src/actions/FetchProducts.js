"use server";
import { headers } from "next/headers";

export async function fetchProducts() {
  // const headersList = await headers();
  // const host = headersList.get("X-Forwarded-Host");
  // const proto = headersList.get("X-Forwarded-Proto");

  // const response = await fetch(`${proto}://${host}/api/getProducts`, {
  //   method: "GET",
  // });

  // const products = await response.json();

  // console.log(products);

  let x = [
    {
      _id: "67b8c5b5275dc282f92b9902",
      name: "انگشتر",
      price: 100,
      id: "1244343",
      details: [],
      rating: 5,
      description: "توضیحات محصول",
      thumbnail: "/gol_sar.jpg",
      images: ["/gol_sar.jpg"],
      count: 100,
      categories: [{ title: "fsf", value: "fs" }],
      __v: 0,
    },
  ];

  return x;
}
