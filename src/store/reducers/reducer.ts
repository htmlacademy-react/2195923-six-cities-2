import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../../types/initial-state';
import { changeCity, fillOffers, loadOffers, setOffersDataLoadingStatus } from '../actions/action';
import { Cities } from '../../const';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isOffersDataLoading: false,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
