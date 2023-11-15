import { createAction } from '@reduxjs/toolkit';
import { CityName, PreviewOffer } from '../../types/offer';

export const changeCity = createAction<CityName>('city/change');

export const fillOffers = createAction<PreviewOffer[]>('city/offers');

export const loadOffers = createAction<PreviewOffer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
