import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { AppDispatch, State } from '../../types/state';
import { FullOffer, PreviewOffer } from '../../types/offer';
import { APIRoute, AuthorizationStatus } from '../../const';
import { loadOffers, loadOfferByID, redirectToRoute, setAuthorizationStatus, setDataLoadingStatus, loadNearbyOffers, loadReviews, addReview } from './action';
import { setAuthorizationLoadingStatus, setOffersDataLoadingStatus } from './action';
import { UserData } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
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

export const createReviewAction = createAsyncThunk<void, {userReview: UserReview; offerID: {id: string}}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/createReview',
  async ({userReview, offerID}, {dispatch, extra: api}) => {
    try {
      const rating = userReview.rating;
      const comment = userReview.comment;
      const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerID.id}`, {rating, comment});
      dispatch(addReview(data));
    } catch {
      toast.warn('Failed to load comment');
    }
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
      dispatch(setAuthorizationLoadingStatus(true));
      await api.get<UserData>(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    } finally {
      dispatch(setAuthorizationLoadingStatus(false));
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

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
