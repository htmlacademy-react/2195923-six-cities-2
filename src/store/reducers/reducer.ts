import { createReducer } from '@reduxjs/toolkit';
import { previewOffers } from '../../mocks/offers';
import { InitialState } from '../../types/initial-state';
import { changeCity, fillOffers } from '../actions/action';
import { Cities } from '../../const';

const initialState: InitialState = {
  city: Cities[0],
  offers: previewOffers,
  sortingOffers: previewOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const newCity = Cities.find((city) => city.name === action.payload);
      if (newCity) {
        state.city.name = action.payload;
        state.city.location = newCity.location;
      }
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

