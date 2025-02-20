const AddToCartButton = ({ product, count }) => {
  return (
    <button
      onClick={() => alert("اضافه شد")}
      className="w-full bg-[#ff006e] text-white py-4 text-xl md:text-2xl"
    >
      افزودن به سبد
    </button>
  );
};

export default AddToCartButton;
