export { default as productReducer, clearProductError } from './productSlice';

export { getProductsThunk, addProductThunk, updateProductThunk, deleteProductThunk, getPlugThunk } from './productThunks';
export { default as productMiddleware } from './productMiddleware';
export { selectProducts, selectPlug, selectProductsLoading, selectProductsError } from './productSelectors';
