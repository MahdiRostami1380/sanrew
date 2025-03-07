"use server";

import { headers } from "next/headers";

export async function deleteProduct(product) {
  const headersList = await headers();
  const host = headersList.get("X-Forwarded-Host");
  const proto = headersList.get("X-Forwarded-Proto");

  const response = await fetch(`${proto}://${host}/api/deleteProduct`, {
    method: "POST",
    body: JSON.stringify(product),
  });
}
