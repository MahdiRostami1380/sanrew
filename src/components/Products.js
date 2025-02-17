import Product from "./Product";

const Products = () => {
  let products = [
    {
      title: "محصول اول",
      link: "./",
      price: 50,
      isThere: true,
      image: "/gol_sar.jpg",
    },
    {
      title: "محصول اول",
      link: "./",
      price: 50,
      isThere: true,
      image: "/gol_sar.jpg",
    },
    {
      title: "محصول اول",
      link: "./",
      price: 50,
      isThere: false,
      image: "/gol_sar.jpg",
    },
    {
      title: "محصول اول",
      link: "./",
      price: 50,
      isThere: true,
      image: "/gol_sar.jpg",
    },
    {
      title: "محصول اول",
      link: "./",
      price: 50,
      isThere: true,
      image: "/gol_sar.jpg",
    },
  ];
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
