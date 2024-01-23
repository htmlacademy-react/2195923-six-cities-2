import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { FullOffer, PreviewOffer } from '../../types/offer';
import { APIRoute } from '../../const';
import { redirectToRoute } from './action';
import { UserData } from '../../types/user-data';
import { dropToken, saveToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { AppRoute } from '../../app-route';
import { Review, UserReview } from '../../types/review';

export const fetchOffersAction = createAsyncThunk<PreviewOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PreviewOffer[]>(APIRoute.Offers);
    return data;
  },
);

export const loadOfferByIDAction = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/getOfferByID',
  async (id, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    return data;
  },
);

export const loadNearbyOffersAction = createAsyncThunk<PreviewOffer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/getNearbyOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<PreviewOffer[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<FullOffer, {id: string; favoriteStatus: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/changeFavoriteStatus',
  async ({id, favoriteStatus}, {extra: api}) => {
    const {data} = await api.post<FullOffer>(`${APIRoute.Favorite}/${id}/${favoriteStatus}`);
    return data;
  }
);

export const fetchFavoriteOffersActions = createAsyncThunk<PreviewOffer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/fetchFavotiteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PreviewOffer[]>(APIRoute.Favorite);
    return data;
  },
);

export const loadReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/getReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  }
);

export const createReviewAction = createAsyncThunk<Review, {userReview: UserReview; id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerData/createReview',
  async ({userReview, id}, {extra: api}) => {
    const rating = userReview.rating;
    const comment = userReview.comment;
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {rating, comment});
    return data;
  },
);

export const getAuthorizationStatusAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/getAuthorizationStatus',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
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
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
