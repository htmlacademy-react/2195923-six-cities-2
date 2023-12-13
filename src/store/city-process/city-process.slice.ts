import { createSlice } from '@reduxjs/toolkit';
import { Cities, NameSpace } from '../../const';
import { CityProcess } from '../../types/state';

const initialState: CityProcess = {
  city: 'Paris',
};

export const cityProcess = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      const newCity = Cities.find((city) => city.name === action.payload);
      if (newCity) {
        state.city = newCity.name;
      }
    }
  },
});

export const {changeCity} = cityProcess.actions;

