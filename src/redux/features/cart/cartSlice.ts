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
    removeProducts: (state, action: PayloadAction<productCounter>) => {
      const {
        payload: { product, count },
      } = action;

      const item = state.products.find(
        (productQuantity) => productQuantity.product.id === product.id
      );

      if (item) {
        const newQuantity = item.count - count;
        if (newQuantity < 1) {
          state.products = state.products.filter(
            (item) => item.product.id !== product.id
          );
        } else {
          state.products = state.products.map((item) => {
            if (item.product.id === product.id) {
              return {
                ...item,
                count: newQuantity,
              };
            }

            return item;
          });
        }
      }

      state.totalItems -= count;
      state.subtotal -= count * product.price;
      state.vat = state.vat - count * product.price * 0.16;
      state.shipping = state.totalItems < 1 ? 0 : state.shipping;
    },
    removeAll: (state) => {
      state.products = [];
      state.shipping = 0;
      state.subtotal = 0;
      state.totalItems = 0;
      state.vat = 0;
      state.total = 0;
    },
  },
});

export const { addProducts, removeProducts, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
