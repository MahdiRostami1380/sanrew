"use server";

import { generateRandomId } from "@/lib";
import { headers } from "next/headers";

export async function addProductAction(e) {
  const headersList = await headers();
  const host = headersList.get("X-Forwarded-Host");
  const proto = headersList.get("X-Forwarded-Proto");

  let name = e.get("name");
  let caption = e.get("caption");
  let price = e.get("price");
  let thumbnail = e.get("thumbnail");
  let count = e.get("count");

  const response = await fetch(`${proto}://${host}/api/addProduct`, {
    method: "POST",
    body: JSON.stringify({
      name,
      caption,
      price,
      thumbnail,
      count,
      id: generateRandomId(20),
    }),
  });

  const product = await response.json();
  console.log(product);

  return product;
}
