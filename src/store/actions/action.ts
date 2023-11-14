import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../../types/offer';

export const changeCity = createAction<CityName>('city/change');

