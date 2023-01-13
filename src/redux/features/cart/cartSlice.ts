import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface productCounter {
  product: API.Product;
  count: number;
}

interface cartState {
  products: productCounter[];
  totalItems: number;
  subtotal: number;
  shipping: number;
  vat: number;
  total: number;
}

const initialState: cartState = {
  products: [],
  totalItems: 0,
  subtotal: 0,
  shipping: 0,
  vat: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<productCounter>) => {
      const {
        count,
        product: { id, price },
      } = action.payload;

      const newItem: productCounter = {
        product: action.payload.product,
        count,
      };

      const isAlreadyOnList = Boolean(
        state.products.find((item) => item.product.id === id)
      );

      if (isAlreadyOnList) {
        state.products = state.products.map((item) => {
          if (item.product.id === id) {
            return {
              ...item,
              count: item.count + count,
            };
          } else {
            return item;
          }
        });
      } else {
        state.products.push(newItem);
      }

      state.totalItems += count;
      state.subtotal += price * count;
      state.vat += price * 0.16 * count;
      state.shipping = 50;
      state.total = state.shipping + state.subtotal + state.vat;
    },
  },
});

export const { addProducts } = cartSlice.actions;
export default cartSlice.reducer;
