import "./globals.css";

export const metadata = {
  title: "Sanrew",
  description: "Sanrew Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{ fontFamily: "Digikala" }}
        className="selection:bg-[#ff006e] selection:bg-opacity-50 bg-[#ff006e] bg-opacity-15 text-slate-900"
      >
        {children}
      </body>
    </html>
  );
}
