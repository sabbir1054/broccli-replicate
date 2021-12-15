import { createSlice } from "@reduxjs/toolkit";
import productsData from '../../Components/Sections/Products/productsData.json'




const initialState = {
    data: productsData,
    cart: [],
    wishlist: [],
};



export const productSlice = createSlice({
  name: "products",
  initialState,

  
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((product) => product.id !== payload.id);
    },
    addToWishlist: (state, { payload }) => {
      state.wishlist.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addToWishlist } = productSlice.actions;

export default productSlice.reducer;
