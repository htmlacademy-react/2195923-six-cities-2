import { AuthorizationStatus } from '../const';
import { CityName, PreviewOffer } from './offer';
import { UserData } from './user-data';

export type InitialState = {
  city: CityName;
  offers: PreviewOffer[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  error: string| null;
};
