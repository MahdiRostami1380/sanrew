import ProductShowcase from "@/components/ProductShowcase";
import Footer from "@/sections/Footer";
import Menu from "@/sections/Menu";

const ProductPage = async ({ params }) => {
  const { productId } = await params;

  return (
    <>
      <Menu />
      <main className="section-container mt-32 xl:max-w-[1280px]">
        <ProductShowcase productId={productId} />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
