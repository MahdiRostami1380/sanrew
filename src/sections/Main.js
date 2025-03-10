import FilterBar from "@/components/FilterBar";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { fetchProducts } from "@/actions/FetchProducts";
import Accordion from "@/components/Accordion";

const Main = async () => {
  const products = await fetchProducts();
  return (
    <main className="section-container mt-32 xl:max-w-[1280px]">
      <Header />
      {/* <FilterBar /> */}
      <Products products={products} />
      <Accordion />
    </main>
  );
};

export default Main;
