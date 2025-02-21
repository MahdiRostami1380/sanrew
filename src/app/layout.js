import Providers from "@/GlobalRedux/Providers";
import "./globals.css";
import Menu from "@/sections/Menu";
import Footer from "@/sections/Footer";

export const metadata = {
  title: "Sanrew",
  description: "Sanrew Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{ fontFamily: "Digikala" }}
        className="relative selection:bg-[#ff006e] selection:bg-opacity-50 bg-[#ff006e] bg-opacity-15 text-slate-900 overflow-x-hidden min-h-screen"
      >
        <Providers>
          <Menu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
