import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  id: String,
  details: Array,
  rating: Number,
  description: String,
  thumbnail: String,
  images: Array,
  count: Number,
  categories: Array,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
