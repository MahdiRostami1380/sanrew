import connectToDB from "@/DB";
import Product from "@/mongoDBModels/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const product = await request.json();

  try {
    connectToDB();
    const productResponse = await Product.create(product);

    if (productResponse) {
      return NextResponse.json({ message: "Product Added", success: true });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Product Didn't Added",
      success: false,
    });
  }
}
