import { useDispatch } from 'react-redux';

import { AppDispatch, addProductThunk } from '@/store';
import { ProductCardType } from '@/types/Products';

const useAddProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const addProduct = async (product: ProductCardType) => {
    await dispatch(addProductThunk(product));
  };

  return addProduct;
};

export default useAddProduct;
