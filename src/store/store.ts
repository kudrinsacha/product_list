import { configureStore } from '@reduxjs/toolkit';

import { productReducer, authReducer, productMiddleware } from './features';

export const store = configureStore({
  reducer: {
    productReducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
