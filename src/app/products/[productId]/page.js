import ProductShowcase from "@/components/ProductShowcase";

const ProductPgae = async ({ params }) => {
  const { productId } = await params;

  return (
    <>
      <main className="section-container mt-32 xl:max-w-[1280px]">
        <ProductShowcase productId={productId} />
      </main>
    </>
  );
};

export default ProductPgae;
