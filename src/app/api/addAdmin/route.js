import { NextResponse } from "next/server";
import connectToDB from "@/DB";
import Admin from "@/mongoDBModels/admin";

export async function POST(request) {
  const admin = await request.json();

  try {
    connectToDB();
    const adminResponse = await Admin.create(admin);
    if (adminResponse) {
      return NextResponse.json({ message: "Admin Added", success: true });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Admin Didn't Added",
      success: false,
    });
  }
}
