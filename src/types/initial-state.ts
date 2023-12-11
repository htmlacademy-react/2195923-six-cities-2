import { AuthorizationStatus } from '../const';
import { CityName, FullOffer, PreviewOffer } from './offer';
import { Review } from './review';
import { UserData } from './user-data';

export type InitialState = {
  city: CityName;
  fullOffer: FullOffer | undefined;
  offers: PreviewOffer[];
  nearbyOffers: PreviewOffer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  isOffersDataLoading: boolean;
  isAuthorizationStatusLoading: boolean;
  isNearByOffersDataLoading: boolean;
  isOfferByIdDataLoading: boolean;
  isReviewsDataLoading: boolean;
};
