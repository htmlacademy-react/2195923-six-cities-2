import { changeFavoriteStatusAction, fetchFavoriteOffersActions, fetchOffersAction, loadNearbyOffersAction, loadOfferByIDAction } from '../actions/api-actions';
import { image, name, datatype, lorem, random } from 'faker';
import { makeFakeFullOffer, makeFakePreviewOffer } from '../../utils/mocks';
import { changeActiveCard, changeFavoriteStatus, offerData } from './offer-data.slice';
import { PreviewOffer } from '../../types/offer';

describe('OfferData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change active card with "changeActiveCard" action', () => {
    const initialState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const id = datatype.uuid();

    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: id,
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(initialState, changeActiveCard(id));

    expect(result).toEqual(expectedState);
  });

  it('should change favorite status to "false" with "changeFavoriteStatus" action', () => {
    const offers = [makeFakePreviewOffer()] as unknown as PreviewOffer[];
    offers[0].isFavorite = true;
    const id = offers[0].id;

    const initialState = {
      offers: offers,
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: offers,
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const newoffers = structuredClone(offers);
    newoffers[0].isFavorite = false;

    const expectedState = {
      offers: newoffers,
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(initialState, changeFavoriteStatus(id));

    expect(result).toEqual(expectedState);
  });

  it('should change favorite status to "true" with "changeFavoriteStatus" action', () => {
    const offers = [makeFakePreviewOffer()] as unknown as PreviewOffer[];
    offers[0].isFavorite = false;
    const id = offers[0].id;

    const initialState = {
      offers: offers,
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const newoffers = structuredClone(offers);
    newoffers[0].isFavorite = true;

    const expectedState = {
      offers: newoffers,
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(initialState, changeFavoriteStatus(id));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true" with "fetchOffersAction.pending" action', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "false", "offers" to preview offer data with "fetchOffersAction.fulfilled" action', () => {
    const previewOffers = new Array(12).fill(null).map(() => makeFakePreviewOffer()) as unknown as PreviewOffer[];

    const expectedState = {
      offers: previewOffers,
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: false,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, fetchOffersAction.fulfilled(previewOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "false" with "createReviewAction.rejected" action', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: false,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, fetchOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });


  it('should set "isOfferByIdDataLoading" to "true" with "loadOfferByIDAction.pending" action', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, loadOfferByIDAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOfferByIdDataLoading" to "false", "fullOffr" to full offer data with "loadOfferByIDAction.fulfilled" action', () => {
    const fullOffer = makeFakeFullOffer();

    const expectedState = {
      offers: [],
      fullOffer: fullOffer,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: false,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, loadOfferByIDAction.fulfilled(fullOffer, '', fullOffer.id));

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "false" with "loadOfferByIDAction.rejected"', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: false,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, loadOfferByIDAction.rejected);

    expect(result).toEqual(expectedState);
  });


  it('should set "isNearByOffersDataLoading" to "true" with "loadNearbyOffersAction.pending" action', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, loadNearbyOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isNearByOffersDataLoading" to "false", "nearbyOffers" to offer near by ID offer with "loadNearbyOffersAction.fulfilled" action', () => {
    const previewOffers = [makeFakePreviewOffer()];

    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: previewOffers,
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: false,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, loadNearbyOffersAction.fulfilled(previewOffers, '', datatype.uuid()));

    expect(result).toEqual(expectedState);
  });

  it('should set "isNearByOffersDataLoading" to "false" with "loadNearbyOffersAction.rejected"', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: false,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, loadNearbyOffersAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isAddingOfferToFavorite" to "true" with "changeFavoriteStatusAction.pending" action', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: true,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, changeFavoriteStatusAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isAddingOfferToFavorite" to "false", "fullOffer" to full offer with "changeFavoriteStatusAction.fulfilled" action', () => {
    const fullOffer = makeFakeFullOffer();

    const expectedState = {
      offers: [],
      fullOffer: fullOffer,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, changeFavoriteStatusAction.fulfilled(fullOffer, '', {id: fullOffer.id, favoriteStatus: 0}));

    expect(result).toEqual(expectedState);
  });

  it('should set "isAddingOfferToFavorite" to "false" with "changeFavoriteStatusAction.rejected"', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, changeFavoriteStatusAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoriteOffersLoading" to "true" with "fetchFavoriteOffersActions.pending" action', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: true,
    };

    const result = offerData.reducer(undefined, fetchFavoriteOffersActions.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoriteOffersLoading" to "false", "favoriteOffers" to favorite offer with "fetchFavoriteOffersActions.fulfilled" action', () => {
    const favoriteOffers = new Array(12).fill(null).map(() => makeFakePreviewOffer()).filter((offer) => offer.isFavorite) as unknown as PreviewOffer[];

    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: favoriteOffers,
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, fetchFavoriteOffersActions.fulfilled(favoriteOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isFavoriteOffersLoading" to "false" with "fetchFavoriteOffersActions.rejected"', () => {
    const expectedState = {
      offers: [],
      fullOffer: undefined,
      nearbyOffers: [],
      favoriteOffers: [],
      activeCard: '',
      isOffersDataLoading: true,
      isNearByOffersDataLoading: true,
      isOfferByIdDataLoading: true,
      isAddingOfferToFavorite: false,
      isFavoriteOffersLoading: false,
    };

    const result = offerData.reducer(undefined, fetchFavoriteOffersActions.rejected);

    expect(result).toEqual(expectedState);
  });
});
