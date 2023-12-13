import {NameSpace} from '../../const';
import { FullOffer, PreviewOffer } from '../../types/offer';
import {State} from '../../types/state';

export const getOffers = (state: State): PreviewOffer[] => state[NameSpace.Offer].offers;
export const getFullOffer = (state: State): FullOffer | undefined => state[NameSpace.Offer].fullOffer;
export const getNearbyOffers = (state: State): PreviewOffer[] => state[NameSpace.Offer].nearbyOffers;
export const getActiveCard = (state: State): string => state[NameSpace.Offer].activeCard;
export const getOffersDataLoading = (state: State): boolean => state[NameSpace.Offer].isOffersDataLoading;
export const getNearByOffersDataLoading = (state: State): boolean => state[NameSpace.Offer].isNearByOffersDataLoading;
export const getOfferByIdDataLoading = (state: State): boolean => state[NameSpace.Offer].isOfferByIdDataLoading;
export const getFavoriteOffersLoading = (state: State): boolean => state[NameSpace.Offer].isFavoriteOffersLoading;
export const getFavotireOffers = (state: State): PreviewOffer[] => state[NameSpace.Offer].favoriteOffers;
