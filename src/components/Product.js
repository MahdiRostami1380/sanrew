import Link from "next/link";

const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} style={{ fontFamily: "IranSans" }}>
      <img
        src={product.thumbnail || "/gol_sar.jpg"}
        alt={product.name}
        className="w-full"
      />
      <h2 className="mt-5 text-xl md:text-2xl">{product.name}</h2>
      <p className="text-sm">
        <b>{new Intl.NumberFormat("fa-IR").format(product.price)}</b> هزار تومان
      </p>
      {product.count > 0 ? (
        <b className="text-[#8338ec]">موجود</b>
      ) : (
        <b className="text-[#ffbe0b]">ناموجود</b>
      )}
    </Link>
  );
};

export default Product;
