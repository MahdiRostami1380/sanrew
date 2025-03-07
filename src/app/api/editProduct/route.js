import connectToDB from "@/DB";
import Product from "@/mongoDBModels/product";
import { NextResponse } from "next/server";

export async function POST(request) {
  const product = await request.json();
  console.log(product);

  try {
    connectToDB();
    const requestResponse = await Product.findOneAndUpdate(
      { id: product.id },
      product
    );

    console.log(requestResponse);

    if (requestResponse) {
      return NextResponse.json({ message: "Product Updated", success: true });
    } else {
      return NextResponse.json({
        message: "Product Didn't Update 1",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Product Didn't Update 2",
      success: false,
    });
  }
}
