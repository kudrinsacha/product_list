import { RootState } from '@/store';

export const selectUserId = (store: RootState) => store.authReducer.currentUserId;
export const selectAuthLoading = (store: RootState) => store.authReducer.loading;
export const selectAuthError = (store: RootState) => store.authReducer.error;
