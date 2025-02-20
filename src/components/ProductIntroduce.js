import AddToCartButton from "./AddToCartButton";

const ProductIntroduce = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5">
      <div className="w-full md:w-1/2">
        <img src={product.thumbnail} alt={product.name} />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-3 mb-3 md:mb-0">
          <div className="flex gap-3">
            {product.categories.map((category, index) => (
              <div key={index} className="text-[#3a86ff] md:text-[18px]">
                #{category.title}
              </div>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">{product.name}</h1>
          <div className="flex gap-3 text-[18px]">
            <div>
              امتیاز: <span className="text-[#8338ec]">{product.rating}</span>
            </div>
            <div>|</div>
            <div>اینجا ستاره ها نمایش داده می‌شود</div>
          </div>
          <div>اینجا جزییات نمایش داده می‌شود</div>
        </div>
        <AddToCartButton product={product} count={5} />
      </div>
    </div>
  );
};

export default ProductIntroduce;
