import { createSlice } from '@reduxjs/toolkit';

import { getProductsThunk, addProductThunk, updateProductThunk, deleteProductThunk, getPlugThunk } from './productThunks';
import { ProductStateType } from '@/types/Products';
import { INITIAL_PRODUCT_STATE, INITIAL_PLUG_IMG, INITIAL_LOADING, INITIAL_ERROR } from '@/constans/store';

const initialState: ProductStateType = {
  products: INITIAL_PRODUCT_STATE,
  plug: INITIAL_PLUG_IMG,
  loading: INITIAL_LOADING,
  error: INITIAL_ERROR,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProductError: (state) => {
      state.error = INITIAL_ERROR;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = INITIAL_LOADING;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      })

      .addCase(addProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.products.unshift(action.payload);
        state.loading = INITIAL_LOADING;
      })
      .addCase(addProductThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      })

      .addCase(updateProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return action.payload;
          }
          return product;
        });
        state.loading = INITIAL_LOADING;
      })
      .addCase(updateProductThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      })

      .addCase(deleteProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload.id);
        state.loading = INITIAL_LOADING;
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      })

      .addCase(getPlugThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlugThunk.fulfilled, (state, action) => {
        state.plug = action.payload;
        state.loading = INITIAL_LOADING;
      })
      .addCase(getPlugThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      });
  },
});

export const { clearProductError } = productSlice.actions;
export default productSlice.reducer;
