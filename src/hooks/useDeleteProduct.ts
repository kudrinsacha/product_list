import { useDispatch } from 'react-redux';

import { AppDispatch, deleteProductThunk } from '@/store';
import { ProductCardType } from '@/types/Products';

const useDeleteProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const deleteProduct = async (product: ProductCardType) => {
    await dispatch(deleteProductThunk(product));
  };

  return deleteProduct;
};

export default useDeleteProduct;
