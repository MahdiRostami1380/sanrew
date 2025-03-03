"use server";

import { headers } from "next/headers";

export async function addAdminAction() {
  const headersList = await headers();
  const host = headersList.get("X-Forwarded-Host");
  const proto = headersList.get("X-Forwarded-Proto");

  const response = await fetch(`${proto}://${host}/api/addAdmin`, {
    method: "POST",
    body: JSON.stringify({ username: "naris", password: "mahdi" }),
  });

  const admin = await response.json();
  console.log(admin);
}
