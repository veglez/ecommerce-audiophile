/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIResponse } from "mocks/handlers";

interface IProductsInitialState {
  products: API.Product[];
  error: null | string;
  loading: boolean;
}

const initialState: IProductsInitialState = {
  products: [],
  loading: true,
  error: null,
};

export const fetchAllProducts = createAsyncThunk("product/getAll", async () => {
  try {
    const response = await fetch("/products");
    const res: APIResponse<API.Product[]> = await response.json();
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchAllProducts.fulfilled,
      (state, action: PayloadAction<API.Product[]>) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      }
    );

    builder.addCase(
      fetchAllProducts.rejected,
      (state, action: PayloadAction<{ message: string }>) => {
        state.error = action.payload.message;
        state.loading = false;
      }
    );
  },
});

export default productSlice.reducer;
