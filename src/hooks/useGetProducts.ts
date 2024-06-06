import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectProducts, getProductsThunk, getPlugThunk, AppDispatch } from '@/store';

const useGetProducts = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (products.length <= 0) {
      dispatch(getPlugThunk());
      dispatch(getProductsThunk());
    }
  }, []);

  return products;
};

export default useGetProducts;
