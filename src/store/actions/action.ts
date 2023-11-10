import { createAction } from '@reduxjs/toolkit';
import { City, PreviewOffer } from '../../types/offer';

export const changeCity = createAction<City>('city/change');

export const fillOffers = createAction<PreviewOffer>('city/offers');

