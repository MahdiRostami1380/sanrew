import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  caption: String,
  price: Number,
  id: String,
  thumbnail: String,
  count: Number,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
