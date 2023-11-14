import { createReducer } from '@reduxjs/toolkit';
import { previewOffers } from '../../mocks/offers';
import { InitialState } from '../../types/initial-state';
import { changeCity, fillOffers } from '../actions/action';
import { Cities } from '../../const';

const initialState: InitialState = {
  city: 'Paris',
  offers: previewOffers,
  sortingOffers: previewOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const newCity = Cities.find((city) => city.name === action.payload);
      if (newCity) {
        state.city = action.payload;
      }
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});
