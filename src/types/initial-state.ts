import { AuthorizationStatus } from '../const';
import { CityName, FullOffer, PreviewOffer } from './offer';
import { Review } from './review';
import { UserData } from './user-data';

export type InitialState = {
  city: CityName;
  fullOffers: FullOffer;
  offers: PreviewOffer[];
  nearbyOffers: PreviewOffer[];
  reviews: Review[];
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  isAuthorizationStatusLoading: boolean;
  userData: UserData;
};
