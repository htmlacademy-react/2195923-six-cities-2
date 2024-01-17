import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { makeFakeFullOffer, makeFakePreviewOffer } from '../../utils/mocks';
import { getActiveCard, getAddingOfferToFavoriteLoading, getFavoriteOffers, getFavoriteOffersLoading, getFullOffer, getNearByOffersDataLoading, getNearbyOffers, getOfferByIdDataLoading, getOffers, getOffersDataLoading } from './offer-data.selectors';
import { datatype } from 'faker';
import { PreviewOffer } from '../../types/offer';

describe('OfferData selectors', () => {
  const mockFullOffer = makeFakeFullOffer();
  const previewOffers = new Array(100).fill(null).map(() => makeFakePreviewOffer()) as unknown as PreviewOffer[];
  const state = {
    [NameSpace.Offer]: {
      fullOffer: mockFullOffer,
      offers: previewOffers,
      favoriteOffers: previewOffers.filter((previewOffer) => previewOffer.isFavorite),
      nearbyOffers: previewOffers.filter((previewOffer) => previewOffer.city.name === mockFullOffer.city.name),
      activeCard: mockFullOffer.id,
      isOffersDataLoading: datatype.boolean(),
      isNearByOffersDataLoading: datatype.boolean(),
      isOfferByIdDataLoading: datatype.boolean(),
      isAddingOfferToFavorite: datatype.boolean(),
      isFavoriteOffersLoading: datatype.boolean(),
    },
  };

  it('should return full offer from state', () => {
    const {fullOffer} = state[NameSpace.Offer];
    const result = getFullOffer(state);
    expect(result).toEqual(fullOffer);
  });

  it('should return preview offers list from state', () => {
    const {offers} = state[NameSpace.Offer];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return nearby offers list from state', () => {
    const {nearbyOffers} = state[NameSpace.Offer];
    const result = getNearbyOffers(state);
    expect(result).toEqual(nearbyOffers);
  });

  it('should return favorite offers list from state', () => {
    const {favoriteOffers} = state[NameSpace.Offer];
    const result = getFavoriteOffers(state);
    expect(result).toEqual(favoriteOffers);
  });

  it('should return active card from state', () => {
    const {activeCard} = state[NameSpace.Offer];
    const result = getActiveCard(state);
    expect(result).toEqual(activeCard);
  });

  it('should return isOffersDataLoading from state', () => {
    const {isOffersDataLoading} = state[NameSpace.Offer];
    const result = getOffersDataLoading(state);
    expect(result).toEqual(isOffersDataLoading);
  });

  it('should return isNearByOffersDataLoading from state', () => {
    const {isNearByOffersDataLoading} = state[NameSpace.Offer];
    const result = getNearByOffersDataLoading(state);
    expect(result).toEqual(isNearByOffersDataLoading);
  });

  it('should return isOfferByIdDataLoading from state', () => {
    const {isOfferByIdDataLoading} = state[NameSpace.Offer];
    const result = getOfferByIdDataLoading(state);
    expect(result).toEqual(isOfferByIdDataLoading);
  });

  it('should return isAddingOfferToFavorite from state', () => {
    const {isAddingOfferToFavorite} = state[NameSpace.Offer];
    const result = getAddingOfferToFavoriteLoading(state);
    expect(result).toEqual(isAddingOfferToFavorite);
  });

  it('should return isFavoriteOffersLoading from state', () => {
    const {isFavoriteOffersLoading} = state[NameSpace.Offer];
    const result = getFavoriteOffersLoading(state);
    expect(result).toEqual(isFavoriteOffersLoading);
  });
});
