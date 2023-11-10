import { createReducer } from '@reduxjs/toolkit';
import { previewOffers } from '../../mocks/offers';
import { InitialState } from '../../types/initial-state';
import { changeCity } from '../actions/action';
import { Cities } from '../../const';

const initialState: InitialState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    }
  },
  offers: previewOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload;
      state.city.location = Cities.find((city) => city.name === action.payload)?.location;
    });
});

