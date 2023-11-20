import { createAction } from '@reduxjs/toolkit';
import { CityName, PreviewOffer } from '../../types/offer';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';

export const changeCity = createAction<CityName>('city/change');

export const loadOffers = createAction<PreviewOffer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('data/setAuthorizationStatus');

export const setUserData = createAction<UserData>('data/setUser');

export const redirectToRoute = createAction<string>('city/redirectToRoute');

