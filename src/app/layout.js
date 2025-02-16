import "./globals.css";

export const metadata = {
  title: "Naris Shop",
  description: "Naris Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        style={{ fontFamily: "IranSans" }}
        className="selection:bg-[#ff006e] selection:bg-opacity-50"
      >
        {children}
      </body>
    </html>
  );
}
