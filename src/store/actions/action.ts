import { createAction } from '@reduxjs/toolkit';
import { CityName, FullOffer, PreviewOffer } from '../../types/offer';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';
import { Review } from '../../types/review';

export const changeCity = createAction<CityName>('city/change');

export const loadOffers = createAction<PreviewOffer[]>('data/loadOffers');

export const loadOfferByID = createAction<FullOffer>('data/loadOfferByID');

export const loadNearbyOffers = createAction<PreviewOffer[]>('data/loadNearbyOffers');

export const loadReviews = createAction<Review[]>('data/loadReviews');

export const addReview = createAction<Review>('data/addReview');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('data/setAuthorizationStatus');

export const setUserData = createAction<UserData>('data/setUser');

export const redirectToRoute = createAction<string>('city/redirectToRoute');

