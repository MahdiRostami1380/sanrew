export default function PanelSidebar({ setActiveSection }) {
  return (
    <aside className="py-5 px-10 bg-white flex items-center gap-10">
      <button
        onClick={() => setActiveSection("add")}
        className="bg-slate-950 rounded-md text-slate-50 px-6 py-2"
      >
        اضافه کردن محصول
      </button>
      <button
        onClick={() => setActiveSection("products")}
        className="bg-slate-950 rounded-md text-slate-50 px-6 py-2"
      >
        مشاهده محصولات
      </button>
    </aside>
  );
}
