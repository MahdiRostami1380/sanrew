"use server";

import { generateRandomId } from "@/lib";

export async function fetchProducts() {
  const response = await fetch("https://sanrew.vercel.app/api/getProducts", {
    method: "GET",
  });

  const products = await response.json();

  console.log(products);

  return products.products;
}
