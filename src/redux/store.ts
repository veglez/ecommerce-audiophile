import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@redux/features/cart/cartSlice";
import productReducer from "@redux/features/product/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
