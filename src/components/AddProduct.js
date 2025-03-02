import { addProductAction } from "@/actions/AddProducts";
import { useFormStatus } from "react-dom";

export default function AddProduct() {
  function Submit() {
    const status = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-slate-950 py-3 rounded-md text-slate-50"
      >
        {" "}
        {status.pending ? "در حال اضافه کردن..." : "اضافه کردن"}
      </button>
    );
  }
  return (
    <section className="py-4 px-8">
      <h1 className="mb-5 text-2xl w-fit text-transparent bg-gradient-to-r from-fuchsia-400 to-fuchsia-900 bg-clip-text font-extrabold">
        ناریس دوستت دارم ❤
      </h1>
      <form action={(e) => addProductAction(e)} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="نام محصول"
          className="py-2 px-4 rounded"
        />
        <input
          type="text"
          name="price"
          placeholder="قیمت"
          className="py-2 px-4 rounded"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="لینک تصویر محصول"
          className="py-2 px-4 rounded"
        />
        <input
          type="text"
          name="count"
          placeholder="موجودی"
          className="py-2 px-4 rounded"
        />
        <textarea
          name="caption"
          placeholder="کپشن"
          className="py-2 px-4 rounded resize-y min-h-40"
        />
        <Submit />
      </form>
    </section>
  );
}
