import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex justify-center items-center h-screen flex-col">
      <div className="text-[#fb5607] text-2xl md:text-4xl lg:text-7xl">
        صفحه مورد نظرت رو پیدا نکردم
      </div>
      <Link
        href={"/"}
        className="mt-20 py-2 px-5 bg-black text-white rounded-lg bg-opacity-70 hover:bg-opacity-100 transition"
      >
        برو به صفحه اول
      </Link>
    </section>
  );
}
