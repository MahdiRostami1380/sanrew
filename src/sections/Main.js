import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";
import Products from "@/components/Products";

const Main = () => {
  return (
    <main className="section-container mt-32 xl:max-w-[1280px]">
      <Header />
      <FilterBar />
      <Products />
    </main>
  );
};

export default Main;
