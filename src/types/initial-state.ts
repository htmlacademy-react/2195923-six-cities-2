import { CityName, PreviewOffer } from './offer';

export type InitialState = {
  city: CityName;
  offers: PreviewOffer[];
  sortingOffers: PreviewOffer[];
};
