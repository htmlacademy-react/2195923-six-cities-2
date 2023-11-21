import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../../types/initial-state';
import { addReview, changeCity, loadNearbyOffers, loadOfferByID, loadOffers, loadReviews, setAuthorizationStatus, setDataLoadingStatus, setUserData } from '../actions/action';
import { AuthorizationStatus, Cities } from '../../const';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  fullOffers: [],
  nearbyOffers: [],
  reviews: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: ''
  },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const newCity = Cities.find((city) => city.name === action.payload);
      if (newCity) {
        state.city = action.payload;
      }
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferByID, (state, action) => {
      state.fullOffers = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
