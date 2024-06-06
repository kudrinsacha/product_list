import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { registerUserThunk, loginUserThunk, logoutUserThunk } from './authThunks';
import { AuthStateType } from '@/types/Auth';
import { INITIAL_USER_ID, INITIAL_LOADING, INITIAL_ERROR } from '@/constans/store';

const initialState: AuthStateType = {
  currentUserId: INITIAL_USER_ID,
  loading: INITIAL_LOADING,
  error: INITIAL_ERROR,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserIdAction: (state, action: PayloadAction<string | null>) => {
      state.currentUserId = action.payload;
    },
    clearAuthError: (state) => {
      state.error = INITIAL_ERROR;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.currentUserId = action.payload;
        state.loading = INITIAL_LOADING;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      })

      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.currentUserId = action.payload;
        state.loading = INITIAL_LOADING;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      })

      .addCase(logoutUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.currentUserId = INITIAL_USER_ID;
        state.loading = INITIAL_LOADING;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = INITIAL_LOADING;
      });
  },
});

export const { setUserIdAction, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
