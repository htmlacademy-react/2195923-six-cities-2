import { store } from '../store/stores';
import { AuthorizationStatus } from '../const';
import { FullOffer, PreviewOffer, CityName } from './offer';
import { UserData } from './user-data';
import { Review } from './review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  isAuthorizationStatusLoading: boolean;
  userData: UserData;
}

export type OfferData = {
  fullOffer: FullOffer | undefined;
  offers: PreviewOffer[];
  nearbyOffers: PreviewOffer[];
  isOffersDataLoading: boolean;
  isNearByOffersDataLoading: boolean;
  isOfferByIdDataLoading: boolean;
}

export type ReviewData = {
  reviews: Review[];
  isReviewsDataLoading: boolean;
}

export type CityProcess = {
  city: CityName;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
