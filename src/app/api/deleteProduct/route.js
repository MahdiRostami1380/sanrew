import Product from "@/mongoDBModels/product";
import connectToDB from "@/DB";
import { NextResponse } from "next/server";

export async function POST(request) {
  const product = await request.json();

  try {
    connectToDB();
    const productResponse = await Product.deleteOne({ name: product.name });

    if (productResponse) {
      return NextResponse.json({ message: "Product Deleted", success: true });
    } else {
      return NextResponse.json({
        message: "Product Didn't Deleted",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Product Didn't Deleted",
      success: false,
    });
  }
}
