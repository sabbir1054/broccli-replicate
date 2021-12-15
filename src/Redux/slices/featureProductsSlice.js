import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("featureProducts/data", async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/sabbir1054/broccli-replicate/master/src/Components/Sections/FeaturedProducts/featureProduct.json"
  ).then((res) => res.json())
    return response
    
});

const initialState = {
  data: [],
  cart: [],
    wishlist: [],
 
};

export const featureProductSlice = createSlice({
  name: "featureProducts",
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

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data=action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, addToWishlist } =
  featureProductSlice.actions;

export default featureProductSlice.reducer;
