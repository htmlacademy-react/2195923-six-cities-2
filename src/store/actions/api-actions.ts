import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { FullOffer, PreviewOffer } from '../../types/offer';
import { APIRoute, AuthorizationStatus } from '../../const';
import { loadOffers, loadOfferByID, redirectToRoute, setAuthorizationStatus, setDataLoadingStatus, loadNearbyOffers, loadReviews, addReview } from './action';
import { UserData } from '../../types/user-data';
import { saveToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { AppRoute } from '../../app-route';
import { Review, UserReview } from '../../types/review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<PreviewOffer[]>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const loadOfferByIDAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOfferByID',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerID}`);
    dispatch(loadOfferByID(data));
  },
);

export const loadNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getNearbyOffers',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<PreviewOffer[]>(`${APIRoute.Offers}/${offerID}/nearby`);
    dispatch(loadNearbyOffers(data));
  }
);

export const loadReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getReviews',
  async (offerID, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerID}`);
    dispatch(loadReviews(data));
  }
);

export const createReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Reviews, {rating, comment});
    dispatch(addReview(data));
  },
);

export const getAuthorizationStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/getAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }

  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
