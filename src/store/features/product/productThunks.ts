import { createAsyncThunk } from '@reduxjs/toolkit';

import { ref, get, remove } from 'firebase/database';
import { getDownloadURL, ref as refStorage, uploadBytes, deleteObject } from 'firebase/storage';

import { database, storage, auth } from '@/firebase';
import { ImageType, ProductCardType, ProductListType } from '@/types/Products';

export const getProductsThunk = createAsyncThunk<ProductListType, void, { rejectValue: string }>(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const productsRef = ref(database, 'products');
      const snapshot = await get(productsRef);

      const data = snapshot.val();

      return data;
    } catch {
      return rejectWithValue('Products not found');
    }
  }
);

export const addProductThunk = createAsyncThunk<ProductCardType, ProductCardType, { rejectValue: string }>(
  'products/addProduct',
  async (product: ProductCardType, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;

      if (!user) return rejectWithValue('User is not authorized');

      let productImg = product.image;

      if (typeof productImg.url !== 'string') {
        const imageRef = refStorage(storage, `${user.uid}/${productImg.url.name}`);
        await uploadBytes(imageRef, productImg.url);
        productImg = { id: productImg.url.name, url: await getDownloadURL(imageRef) };
      }

      return { ...product, image: productImg };
    } catch {
      return rejectWithValue('Adding product error');
    }
  }
);

export const updateProductThunk = createAsyncThunk<ProductCardType, ProductCardType, { rejectValue: string }>(
  'products/updateProduct',
  async (editedProduct: ProductCardType, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;

      if (!user) return rejectWithValue('User is not authenticated');

      let productImg = editedProduct.image;

      if (typeof productImg.url !== 'string') {
        const imageRef = refStorage(storage, `${user.uid}/${productImg.id}`);
        const newImageRef = refStorage(storage, `${user.uid}/${productImg.url.name}`);
        if (editedProduct.image.id === 'plug.jpg') {
          await uploadBytes(newImageRef, productImg.url);
          productImg = { id: productImg.url.name, url: await getDownloadURL(newImageRef) };
        } else {
          await deleteObject(imageRef);
          await uploadBytes(newImageRef, productImg.url);
          productImg = { id: productImg.url.name, url: await getDownloadURL(newImageRef) };
        }
      }

      return { ...editedProduct, image: productImg };
    } catch {
      return rejectWithValue('Editing product error');
    }
  }
);

export const deleteProductThunk = createAsyncThunk<ProductCardType, ProductCardType, { rejectValue: string }>(
  'products/deleteProduct',
  async (product: ProductCardType, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;

      if (!user) return rejectWithValue('User is not authenticated');

      const productRef = ref(database, `products/${user.uid}/${product.id}`);

      await remove(productRef);

      return product;
    } catch {
      return rejectWithValue('Deletion product error');
    }
  }
);

export const getPlugThunk = createAsyncThunk<ImageType, void, { rejectValue: string }>(
  'products/getPlug',
  async (_, { rejectWithValue }) => {
    try {
      const imageRef = refStorage(storage, `plug.jpg`);
      const plugUrl = await getDownloadURL(imageRef);

      return { id: imageRef.name, url: plugUrl };
    } catch {
      return rejectWithValue('Not found plug-img');
    }
  }
);
