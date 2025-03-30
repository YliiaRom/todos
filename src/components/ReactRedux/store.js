import { configureStore, createAction } from '@reduxjs/toolkit';
import balanseSliceReducer from './balanceSlice';
import localeSliceReducer from './localeSlice';

export const store = configureStore({
  reducer: {
    balance: balanseSliceReducer,
    locale: localeSliceReducer,
  },
});
