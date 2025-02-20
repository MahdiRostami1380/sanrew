"use client";

import { useSelector } from "react-redux";
import { notFound } from "next/navigation";
import ProductIntroduce from "./ProductIntroduce";

const ProductShowcase = ({ productId }) => {
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === productId);

  if (!product) {
    notFound();
  }
  return (
    <section>
      <ProductIntroduce product={product} />
    </section>
  );
};

export default ProductShowcase;
