"use client";

import { editProduct } from "@/actions/EditProduct";
import { redirect, useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { useState } from "react";

export default function Edit() {
  const searchParams = useSearchParams();
  const [name, setName] = useState(searchParams.get("name"));
  const [caption, setCaption] = useState(searchParams.get("caption"));
  const [price, setPrice] = useState(searchParams.get("price"));
  const [thumbnail, setThumbnail] = useState(searchParams.get("thumbnail"));
  const [count, setCount] = useState(searchParams.get("count"));
  const [codes, setCodes] = useState(searchParams.get("codes"));

  function Submit() {
    const status = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-slate-950 py-3 rounded-md text-slate-50"
      >
        {status.pending ? "در حال ویرایش کردن..." : "ویرایش کردن"}
      </button>
    );
  }

  return (
    <section className="py-4 px-8">
      <h1 className="mb-5 text-2xl w-fit text-transparent bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 bg-clip-text font-extrabold">
        ناریس دوستت دارم ❤
      </h1>
      <form
        action={async (e) => {
          e.append("id", searchParams.get("id"));
          let product = await editProduct(e);
          if (product.success) {
            redirect("/admin/panel");
          } else {
            console.log(product);

            alert("خطا رخ داد");
          }
        }}
        className="flex flex-col gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="نام محصول"
          className="py-2 px-4 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="price"
          placeholder="قیمت"
          className="py-2 px-4 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="لینک تصویر محصول"
          className="py-2 px-4 rounded"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <input
          type="text"
          name="count"
          placeholder="موجودی"
          className="py-2 px-4 rounded"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <textarea
          name="caption"
          placeholder="کپشن"
          className="py-2 px-4 rounded resize-y min-h-40"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="text"
          name="codes"
          placeholder="تعداد کدها"
          className="py-2 px-4 rounded"
          value={codes}
          onChange={(e) => setCodes(e.target.value)}
        />
        <Submit />
      </form>
    </section>
  );
}
