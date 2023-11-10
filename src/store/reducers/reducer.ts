import { createReducer } from '@reduxjs/toolkit';
import { previewOffers } from '../../mocks/offers';
import { InitialState } from '../../types/initial-state';
import { changeCity } from '../actions/action';

const initialState: InitialState = {
  city: 'Paris',
  offers: previewOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      console.log(1);
      state.city = action.payload;
    });
});

