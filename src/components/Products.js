"use client";

import Product from "./Product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "@/GlobalRedux/features/ProductsSlice";

const Products = ({ products = [] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, []);

  return (
    <section className="mt-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
