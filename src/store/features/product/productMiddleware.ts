import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { ref, push, set, update } from 'firebase/database';
import { ref as refStorage, deleteObject } from 'firebase/storage';

import { getProductsThunk, addProductThunk, updateProductThunk, deleteProductThunk } from './productThunks';
import { database, storage, auth } from '@/firebase';
import { ProductListType, ProductStateType, ProductDTO, ProductCardType } from '@/types/Products';
import { AuthStateType } from '@/types/Auth';

const productMiddleware: Middleware<{}, { productReducer: ProductStateType; authReducer: AuthStateType }> =
  () => (next) => async (action) => {
    const currentAction = action as PayloadAction;

    switch (currentAction.type) {
      case getProductsThunk.fulfilled.type: {
        const productDTO = (action as PayloadAction<ProductDTO>).payload;

        const productList: ProductListType = Object.keys(productDTO)
          .reverse()
          .flatMap((userKey) => {
            const productKeys = Object.keys(productDTO[userKey]).reverse();
            return productKeys.map((productKey) => {
              return { ...productDTO[userKey][productKey] };
            });
          });

        return next({ ...currentAction, payload: productList });
      }

      case addProductThunk.fulfilled.type: {
        const product = (action as PayloadAction<ProductCardType>).payload;
        const user = auth.currentUser!;

        const productRef = ref(database, `products/${user.uid}`);
        const newProductRef = push(productRef);

        const newProductKey = newProductRef.key as string;
        const newProduct = {
          ...product,
          id: newProductKey,
          userId: user.uid,
        };

        await set(newProductRef, newProduct);

        return next({ ...currentAction, payload: newProduct });
      }

      case updateProductThunk.fulfilled.type: {
        const product = (action as PayloadAction<ProductCardType>).payload;
        const user = auth.currentUser!;

        const productRef = ref(database, `products/${user.uid}/${product.id}`);

        await update(productRef, product);

        return next({ ...currentAction, payload: product });
      }

      case deleteProductThunk.fulfilled.type: {
        const product = (action as PayloadAction<ProductCardType>).payload;
        const user = auth.currentUser!;
        const imageRef = refStorage(storage, `${user.uid}/${product.image.id}`);

        if (product.image.id !== 'plug.jpg') {
          await deleteObject(imageRef);
        }

        return next(action);
      }

      default:
        break;
    }

    return next(action);
  };

export default productMiddleware;
