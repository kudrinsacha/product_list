import { useDispatch } from 'react-redux';

import { AppDispatch, updateProductThunk } from '@/store';
import { ProductCardType } from '@/types/Products';

const useUpdateProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const updateProduct = async (editedProduct: ProductCardType) => {
    await dispatch(updateProductThunk(editedProduct));
  };

  return updateProduct;
};

export default useUpdateProduct;
