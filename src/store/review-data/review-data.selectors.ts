import {NameSpace} from '../../const';
import { Review } from '../../types/review';
import {State} from '../../types/state';

export const getReviews = (state: Pick<State, NameSpace.Review>): Review[] => state[NameSpace.Review].reviews;
export const getReviewsDataLoading = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isReviewsDataLoading;
export const getIsCreatingNewReview = (state: Pick<State, NameSpace.Review>): boolean => state[NameSpace.Review].isCreatingNewReview;
