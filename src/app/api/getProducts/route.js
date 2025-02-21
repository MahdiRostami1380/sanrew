import connectToDB from "@/DB";
import Product from "@/mongoDBModels/product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    connectToDB();
    const products = await Product.find();

    if (products) {
      return NextResponse.json({ success: true, products: products });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
}
