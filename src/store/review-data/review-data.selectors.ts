import {NameSpace} from '../../const';
import { Review } from '../../types/review';
import {State} from '../../types/state';

export const getReviews = (state: State): Review[] => state[NameSpace.Review].reviews;
export const getReviewsDataLoading = (state: State): boolean => state[NameSpace.Review].isReviewsDataLoading;
export const getIsCreatingNewReview = (state: State): boolean => state[NameSpace.Review].isCreatingNewReview;
