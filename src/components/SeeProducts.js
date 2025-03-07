"use client";

import { deleteProduct } from "@/actions/DeleteProduct";
import { fetchProducts } from "@/actions/FetchProducts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function SeeProducts() {
  const [products, setProducts] = useState([]);

  async function fetchProductsFromAPI() {
    let productList = await fetchProducts();
    setProducts(productList);
  }

  useEffect(() => {
    fetchProductsFromAPI();
  }, []);
  return (
    <section className="py-4 px-8">
      <div className="flex flex-col gap-5">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded w-full px-10 py-4 flex justify-between items-center"
            >
              <h2 className="text-2xl" style={{ fontFamily: "IranSans" }}>
                {product.name}
              </h2>
              <div className="flex gap-5 items-center text-2xl cursor-pointer">
                <MdDelete
                  title="حذف کردن"
                  onClick={() => {
                    deleteProduct(product);
                    fetchProductsFromAPI();
                  }}
                />
                <Link
                  href={{
                    pathname: "/admin/panel/edit",
                    query: product,
                  }}
                >
                  <FaEdit className="text-2xl" title="ویرایش" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
