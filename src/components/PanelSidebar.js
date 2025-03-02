export default function PanelSidebar({ setActiveSection }) {
  return (
    <aside className="fixed right-0 top-0 py-5 px-10 bg-white w-64 flex items-center flex-col">
      <button
        onClick={() => setActiveSection("add")}
        className="bg-slate-950 rounded-md text-slate-50 px-6 py-2"
      >
        اضافه کردن محصول
      </button>
    </aside>
  );
}
