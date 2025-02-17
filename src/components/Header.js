const Header = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-bold leading-[50px] md:leading-[70px]">
        <span className="relative">
          <span className="bg-clip-text-style text-transparent [background:linear-gradient(to_left,#ffbe0b,#fb5607,#ff006e,#8338ec,#3a86ff)]">
            سانریو
          </span>
          <span
            className="absolute w-full left-0 top-full -translate-y-3/4 [background:linear-gradient(to_left,#ffbe0b,#fb5607,#ff006e,#8338ec,#3a86ff)] h-4"
            style={{
              maskImage: "url('./underline.svg')",
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
            }}
          ></span>
        </span>{" "}
        | زیورآلاتی خاص برای سلیقه‌ای منحصر‌به‌فرد
      </h1>
      <p className="mt-5 md:text-lg max-w-[900px]">
        ما با الهام از زیبایی و اصالت، مجموعه‌ای از اکسسوری‌های خاص و
        منحصر‌به‌فرد را ارائه می‌دهیم. محصولات ما ترکیبی از ظرافت و هنر هستند که
        برای افرادی با سلیقه‌ای خاص ساخته شده‌اند. هر قطعه از مجموعه سانریو با
        دقت و عشق انتخاب شده تا زیبایی و اعتماد‌به‌نفس را به استایل شما اضافه
        کند.
      </p>
    </section>
  );
};

export default Header;
