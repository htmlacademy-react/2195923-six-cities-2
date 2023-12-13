import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferData } from '../../types/state';
import { fetchOffersAction, loadNearbyOffersAction, loadOfferByIDAction } from '../actions/api-actions';

const initialState: OfferData = {
  offers: [],
  fullOffer: undefined,
  nearbyOffers: [],
  activeCard: '',
  isOffersDataLoading: true,
  isNearByOffersDataLoading: true,
  isOfferByIdDataLoading: true,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeActiveCard: (state, action: PayloadAction<string>) => {
      state.activeCard = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(loadOfferByIDAction.pending, (state) => {
        state.isOfferByIdDataLoading = true;
      })
      .addCase(loadOfferByIDAction.fulfilled, (state, action) => {
        state.fullOffer = action.payload;
        state.isOfferByIdDataLoading = false;
      })
      .addCase(loadOfferByIDAction.rejected, (state) => {
        state.isOfferByIdDataLoading = false;
      })
      .addCase(loadNearbyOffersAction.pending, (state) => {
        state.isNearByOffersDataLoading = true;
      })
      .addCase(loadNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearByOffersDataLoading = false;
      })
      .addCase(loadNearbyOffersAction.rejected, (state) => {
        state.isNearByOffersDataLoading = false;
      });
  }
});

export const { changeActiveCard } = offerData.actions;
