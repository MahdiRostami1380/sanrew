"use server";
import { headers } from "next/headers";

export async function fetchProducts() {
  const headersList = await headers();
  const host = headersList.get("X-Forwarded-Host");
  const proto = headersList.get("X-Forwarded-Proto");

  const response = await fetch(`${proto}://${host}/api/getProducts`, {
    method: "GET",
  });

  const products = await response.json();

  return products.products;
}
