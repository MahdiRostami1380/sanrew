"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function adminLogin(usernamePassword) {
  const headersList = await headers();
  const host = headersList.get("X-Forwarded-Host");
  const proto = headersList.get("X-Forwarded-Proto");

  const response = await fetch(`${proto}://${host}/api/adminLogin`, {
    method: "POST",
    body: JSON.stringify(usernamePassword),
  });

  const admin = await response.json();
  console.log(admin);

  if (admin.success) {
    redirect(`${proto}://${host}/admin/panel`);
  }
}
