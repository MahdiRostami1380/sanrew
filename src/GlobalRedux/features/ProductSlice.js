import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  price: "",
  id: "",
  details: "",
  rating: null,
  description: [],
  thumbnail: "",
  images: [],
  count: 0,
  categories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      return (state = action.payload);
    },
    editProduct(state, action) {
      return (state = action.payload);
    },
    removeProduct() {
      return (state = {});
    },
  },
});

export const { addProduct, editProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
