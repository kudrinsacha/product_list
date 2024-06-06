import { RootState } from '@/store';

export const selectProducts = (state: RootState) => state.productReducer.products;
export const selectPlug = (state: RootState) => state.productReducer.plug;
export const selectProductsLoading = (state: RootState) => state.productReducer.loading;
export const selectProductsError = (state: RootState) => state.productReducer.error;
