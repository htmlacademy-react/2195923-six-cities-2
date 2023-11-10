import { createReducer } from '@reduxjs/toolkit';
import { previewOffers } from '../../mocks/offers';
import { InitialState } from '../../types/initial-state';

const initialState: InitialState = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.8534100,
      longitude: 2.3488000,
      zoom: 8,
    },
  },
  offers: previewOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase()
});

