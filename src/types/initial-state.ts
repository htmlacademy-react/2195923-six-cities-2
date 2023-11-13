import { City, PreviewOffer } from './offer';

export type InitialState = {
  city: City;
  offers: PreviewOffer[];
  sortingOffers: PreviewOffer[];
};
