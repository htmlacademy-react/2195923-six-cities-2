import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { reviewData } from './review-data/review-data.slice';
import { cityProcess } from './city-process/city-process.slice';
import { offerData } from './offer-data/offer-data.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.City]: cityProcess.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
