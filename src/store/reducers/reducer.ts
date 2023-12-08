import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../../types/initial-state';
import { addReview, changeCity, loadNearbyOffers, loadOfferByID, loadOffers, loadReviews, setAuthorizationStatus, setNearByOffersDataLoadingStatus, setOfferByIdDataLoadingStatus, setReviewsDataLoadingStatus, setUserData } from '../actions/action';
import { setAuthorizationLoadingStatus, setOffersDataLoadingStatus } from '../actions/action';
import { AuthorizationStatus, Cities } from '../../const';

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  fullOffers: [],
  nearbyOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: ''
  },
  isOffersDataLoading: true,
  isAuthorizationStatusLoading: true,
  isNearByOffersDataLoading: true,
  isOfferByIdDataLoading: true,
  isReviewsDataLoading: true,
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
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthorizationLoadingStatus, (state, action) => {
      state.isAuthorizationStatusLoading = action.payload;
    })
    .addCase(setNearByOffersDataLoadingStatus, (state, action) => {
      state.isNearByOffersDataLoading = action.payload;
    })
    .addCase(setOfferByIdDataLoadingStatus, (state, action) => {
      state.isOfferByIdDataLoading = action.payload;
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
