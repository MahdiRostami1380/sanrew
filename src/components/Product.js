import Link from "next/link";

const Product = ({ product }) => {
  return (
    <Link href={product.link}>
      <img src={product.image} alt={product.title} className="w-full" />
      <h2 className="mt-5 text-3xl">{product.title}</h2>
      <h3>
        <b>{product.price}</b> هزار تومان
      </h3>
      {product.isThere ? (
        <b className="text-[#8338ec]">موجود</b>
      ) : (
        <b className="text-[#ffbe0b]">ناموجود</b>
      )}
    </Link>
  );
};

export default Product;
