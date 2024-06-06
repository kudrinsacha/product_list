import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/firebase';

export const registerUserThunk = createAsyncThunk<string, { email: string; password: string }, { rejectValue: string }>(
  'auth/register',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);

      return userCredential.user.uid;
    } catch {
      return rejectWithValue('Registration error');
    }
  }
);

export const loginUserThunk = createAsyncThunk<string, { email: string; password: string }, { rejectValue: string }>(
  'auth/login',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);

      return userCredential.user.uid;
    } catch {
      return rejectWithValue('login error');
    }
  }
);

export const logoutUserThunk = createAsyncThunk<{ status: string }, void, { rejectValue: string }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);

      return { status: 'OK' };
    } catch (e) {
      return rejectWithValue('logout error');
    }
  }
);
