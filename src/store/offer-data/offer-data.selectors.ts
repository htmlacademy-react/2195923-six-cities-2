import {NameSpace} from '../../const';
import { FullOffer, PreviewOffer } from '../../types/offer';
import {State} from '../../types/state';

export const getOffers = (state: Pick<State, NameSpace.Offer>): PreviewOffer[] => state[NameSpace.Offer].offers;
export const getFullOffer = (state: Pick<State, NameSpace.Offer>): FullOffer | undefined => state[NameSpace.Offer].fullOffer;
export const getNearbyOffers = (state: Pick<State, NameSpace.Offer>): PreviewOffer[] => state[NameSpace.Offer].nearbyOffers;
export const getActiveCard = (state: Pick<State, NameSpace.Offer>): string => state[NameSpace.Offer].activeCard;
export const getOffersDataLoading = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isOffersDataLoading;
export const getNearByOffersDataLoading = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isNearByOffersDataLoading;
export const getOfferByIdDataLoading = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isOfferByIdDataLoading;
export const getFavoriteOffersLoading = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isFavoriteOffersLoading;
export const getAddingOfferToFavoriteLoading = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isAddingOfferToFavorite;
export const getFavoriteOffers = (state: Pick<State, NameSpace.Offer>): PreviewOffer[] => state[NameSpace.Offer].favoriteOffers;
