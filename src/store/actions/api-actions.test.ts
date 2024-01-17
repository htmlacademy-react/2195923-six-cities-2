import { createAPI } from '../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { State } from '../../types/state';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes, makeFakeFullOffer, makeFakePreviewOffer, makeFakeReview } from '../../utils/mocks';
import { changeFavoriteStatusAction, fetchFavoriteOffersActions, fetchOffersAction, getAuthorizationStatusAction, loadNearbyOffersAction, loadOfferByIDAction, loadReviewsAction, loginAction, logoutAction } from './api-actions';
import { APIRoute } from '../../const';
import { AuthData } from '../../types/auth-data';
import { redirectToRoute } from './action';
import * as tokenStorage from '../../services/token';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({DATA: {}});
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending" and "fetchOffersAction.fulfilled" when server response 200', async () => {
      const mockPreviewOffers = makeFakePreviewOffer();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockPreviewOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchPreviewOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchPreviewOffersActionFulfilled.payload).toEqual(mockPreviewOffers);
    });

    it('should dispatch "fetchOffersAction.pending" and "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('loadOfferByIDAction', () => {
    it('should dispatch "loadOfferByIDAction.pending" and "loadOfferByIDAction.fulfilled" when server response 200', async () => {
      const mockFullOffer = makeFakeFullOffer();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockFullOffer.id}`).reply(200, mockFullOffer);

      await store.dispatch(loadOfferByIDAction(mockFullOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFullOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof loadOfferByIDAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loadOfferByIDAction.pending.type,
        loadOfferByIDAction.fulfilled.type,
      ]);

      expect(fetchFullOfferActionFulfilled.payload).toEqual(mockFullOffer);
    });

    it('should dispatch "loadOfferByIDAction.pending" and "loadOfferByIDAction.rejected" when server response 400', async () => {
      const mockFullOffer = makeFakeFullOffer();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockFullOffer.id}`).reply(400, []);

      await store.dispatch(loadOfferByIDAction(mockFullOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadOfferByIDAction.pending.type,
        loadOfferByIDAction.rejected.type,
      ]);
    });
  });

  describe('loadNearbyOffersAction', () => {
    it('should dispatch "loadNearbyOffersAction.pending" and "loadNearbyOffersAction.fulfilled" when server response 200', async () => {
      const mockPreviewOffers = makeFakePreviewOffer();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockPreviewOffers.id}/nearby`).reply(200, mockPreviewOffers);

      await store.dispatch(loadNearbyOffersAction(mockPreviewOffers.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loadNearbyOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof loadNearbyOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loadNearbyOffersAction.pending.type,
        loadNearbyOffersAction.fulfilled.type,
      ]);

      expect(loadNearbyOffersActionFulfilled.payload).toEqual(mockPreviewOffers);
    });

    it('should dispatch "loadNearbyOffersAction.pending" and "loadNearbyOffersAction.rejected" when server response 400', async () => {
      const mockPreviewOffers = makeFakePreviewOffer();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockPreviewOffers.id}/nearby`).reply(400, []);

      await store.dispatch(loadNearbyOffersAction(mockPreviewOffers.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadNearbyOffersAction.pending.type,
        loadNearbyOffersAction.rejected.type,
      ]);
    });
  });

  describe('changeFavoriteStatusAction', () => {
    it('should dispatch "changeFavoriteStatusAction.pending" and "changeFavoriteStatusAction.fulfilled" when server response 200', async () => {
      const mockFullOffer = makeFakeFullOffer();
      const favoriteStatus = 0;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockFullOffer.id}/${favoriteStatus}`).reply(200, mockFullOffer);

      await store.dispatch(changeFavoriteStatusAction({id: mockFullOffer.id, favoriteStatus}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const changeFavoriteStatusActionFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavoriteStatusAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.fulfilled.type,
      ]);

      expect(changeFavoriteStatusActionFulfilled.payload).toEqual(mockFullOffer);
    });

    it('should dispatch "changeFavoriteStatusAction.pending" and "changeFavoriteStatusAction.rejected" when server response 400', async () => {
      const mockFullOffer = makeFakeFullOffer();
      const favoriteStatus = 0;
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockFullOffer.id}/${favoriteStatus}`).reply(400, []);

      await store.dispatch(changeFavoriteStatusAction({id: mockFullOffer.id, favoriteStatus}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavoriteStatusAction.pending.type,
        changeFavoriteStatusAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffersActions', () => {
    it('should dispatch "fetchFavoriteOffersActions.pending" and "fetchFavoriteOffersActions.fulfilled" when server response 200', async () => {
      const mockPreviewOffers = makeFakePreviewOffer();
      mockAxiosAdapter.onGet(`${APIRoute.Favorite}`).reply(200, mockPreviewOffers);

      await store.dispatch(fetchFavoriteOffersActions());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteOffersActions.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffersActions.pending.type,
        fetchFavoriteOffersActions.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersActionFulfilled.payload).toEqual(mockPreviewOffers);
    });

    it('should dispatch "fetchFavoriteOffersActions.pending" and "fetchFavoriteOffersActions.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Favorite}`).reply(400, []);

      await store.dispatch(fetchFavoriteOffersActions());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoriteOffersActions.pending.type,
        fetchFavoriteOffersActions.rejected.type,
      ]);
    });
  });

  describe('loadReviewsAction', () => {
    it('should dispatch "loadReviewsAction.pending" and "loadReviewsAction.fulfilled" when server response 200', async () => {
      const mockReview = makeFakeReview();
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/offerId`).reply(200, mockReview);

      await store.dispatch(loadReviewsAction('offerId'));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loadReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof loadReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loadReviewsAction.pending.type,
        loadReviewsAction.fulfilled.type,
      ]);

      expect(loadReviewsActionFulfilled.payload).toEqual(mockReview);
    });

    it('should dispatch "loadReviewsAction.pending" and "loadReviewsAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/offerId`).reply(400, []);

      await store.dispatch(loadReviewsAction('offerId'));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loadReviewsAction.pending.type,
        loadReviewsAction.rejected.type,
      ]);
    });
  });

  describe('getAuthorizationStatusAction', () => {
    it('should dispatch "getAuthorizationStatusAction.pending" and "getAuthorizationStatusAction.fulfilled" with thunk "getAuthorizationStatusAction"', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);
      await store.dispatch(getAuthorizationStatusAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getAuthorizationStatusAction.pending.type,
        getAuthorizationStatusAction.fulfilled.type,
      ]);
    });
    it('should dispatch "getAuthorizationStatusAction.pending" and "getAuthorizationStatusAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(getAuthorizationStatusAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        getAuthorizationStatusAction.pending.type,
        getAuthorizationStatusAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        redirectToRoute.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
