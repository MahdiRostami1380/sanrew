import Link from "next/link";

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <img src={product.thumbnail} alt={product.name} className="w-full" />
      <h2 className="mt-5 text-xl md:text-3xl">{product.name}</h2>
      <h3 className="text-sm">
        <b>{product.price}</b> هزار تومان
      </h3>
      {product.count > 0 ? (
        <b className="text-[#8338ec]">موجود</b>
      ) : (
        <b className="text-[#ffbe0b]">ناموجود</b>
      )}
    </Link>
  );
};

export default Product;
