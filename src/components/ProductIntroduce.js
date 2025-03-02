import AddToCartButton from "./AddToCartButton";

const ProductIntroduce = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5">
      <div className="w-full md:w-1/2">
        <img src={product.thumbnail || "/gol_sar.jpg"} alt={product.name} />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-3 md:gap-5 mb-3 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">{product.name}</h1>
          <div>{product.caption}</div>
        </div>
        <AddToCartButton product={product} count={5} />
      </div>
    </div>
  );
};

export default ProductIntroduce;
