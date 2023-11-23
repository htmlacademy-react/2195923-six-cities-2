import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers/reducer';
import { createAPI } from '../services/api';
import { redirect } from './middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  }).concat(redirect),
});
