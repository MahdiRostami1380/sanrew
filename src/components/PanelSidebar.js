export default function PanelSidebar({ setActiveSection }) {
  return (
    <aside className="py-5 px-10 bg-white flex items-center justify-center gap-5 md:justify-start md:gap-10">
      <button
        onClick={() => setActiveSection("add")}
        className="bg-slate-950 rounded-md text-slate-50 text-xs md:text-xl px-2 md:px-6 py-1 md:py-2"
      >
        اضافه کردن محصول
      </button>
      <button
        onClick={() => setActiveSection("products")}
        className="bg-slate-950 rounded-md text-slate-50 text-xs md:text-xl px-2 md:px-6 py-1 md:py-2"
      >
        مشاهده محصولات
      </button>
    </aside>
  );
}
