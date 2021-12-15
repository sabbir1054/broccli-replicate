import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice';
import featureReducer from './slices/featureProductsSlice'




export const store = configureStore({
  reducer: {
    products: productReducer,
    featureProducts:featureReducer,
  },
});
