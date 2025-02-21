import connectToDB from "@/DB";
import { NextResponse } from "next/server";
import Admin from "@/mongoDBModels/admin";

export async function POST(request) {
  const admin = await request.json();

  try {
    const adminResponse = await Admin.findOne({ username: admin.username });

    if (adminResponse) {
      if (admin.password === adminResponse.password) {
        return NextResponse.json({
          success: true,
        });
      } else {
        return NextResponse.json({
          message: "Failed to0 login",
          success: false,
        });
      }
    } else {
      return NextResponse.json({
        message: "Failed to00 login",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message: "Failed to000 login",
      success: false,
    });
  }
}
