"use server";

import { generateRandomId } from "@/lib";
import { headers } from "next/headers";

export async function editProduct(product) {
  const headersList = await headers();
  const host = headersList.get("X-Forwarded-Host");
  const proto = headersList.get("X-Forwarded-Proto");

  const response = await fetch(`${proto}://${host}/api/editProduct`, {
    method: "POST",
    body: JSON.stringify({
      name: product.get("name"),
      caption: product.get("caption"),
      price: product.get("price"),
      thumbnail: product.get("thumbnail"),
      count: product.get("count"),
      codes: product.get("codes"),
      id: product.get("id"),
    }),
  });

  const editedProduct = await response.json();
  return editedProduct;
}
