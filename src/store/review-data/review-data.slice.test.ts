import { createReviewAction, loadReviewsAction } from '../actions/api-actions';
import { image, name, datatype, lorem } from 'faker';
import { reviewData } from './review-data.slice';
import { makeFakeReview } from '../../utils/mocks';
import { Review } from '../../types/review';

describe('ReviewData Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      reviews: [],
      isReviewsDataLoading: true,
      isCreatingNewReview: true,
    };

    const result = reviewData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      reviews: [],
      isReviewsDataLoading: true,
      isCreatingNewReview: false,
    };

    const result = reviewData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "true" with loadReviewsAction.pending', () => {
    const expectedState = {
      reviews: [],
      isReviewsDataLoading: true,
      isCreatingNewReview: false,
    };

    const result = reviewData.reducer(undefined, loadReviewsAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false", "reviews" to reviews data with "loadReviewsAction.fulfilled"', () => {
    const expectedState = {
      reviews: new Array(12).fill(null).map(() => makeFakeReview()) as unknown as Review[],
      isReviewsDataLoading: false,
      isCreatingNewReview: false,
    };

    const result = reviewData.reducer(undefined, loadReviewsAction.fulfilled(expectedState.reviews, '', datatype.uuid()));

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false" with "loadReviewsAction.rejected"', () => {
    const expectedState = {
      reviews: [],
      isReviewsDataLoading: false,
      isCreatingNewReview: false,
    };

    const result = reviewData.reducer(undefined, loadReviewsAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCreatingNewReview" to "true" with createReviewAction.pending', () => {
    const expectedState = {
      reviews: [],
      isReviewsDataLoading: true,
      isCreatingNewReview: true,
    };

    const result = reviewData.reducer(undefined, createReviewAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isCreatingNewReview" to "false", "reviews" to reviews data with "createReviewAction.fulfilled"', () => {
    const userReview = {
      rating: 5,
      comment: lorem.sentence(12),
    };

    const id = datatype.uuid();

    const newReview = {
      id: id,
      date: datatype.datetime() as unknown as string,
      user: {
        name: `${name.firstName()} ${name.lastName()}`,
        avatarUrl: image.avatar(),
        isPro: datatype.boolean(),
      },
      comment: userReview.comment,
      rating: userReview.rating,
    };

    const expectedState = {
      reviews: [newReview],
      isReviewsDataLoading: true,
      isCreatingNewReview: false,
    };

    const result = reviewData.reducer(undefined, createReviewAction.fulfilled(newReview, '', {userReview, id}));

    expect(result).toEqual(expectedState);
  });

  it('should set "isCreatingNewReview" to "false" with "createReviewAction.rejected"', () => {
    const expectedState = {
      reviews: [],
      isReviewsDataLoading: true,
      isCreatingNewReview: false,
    };

    const result = reviewData.reducer(undefined, createReviewAction.rejected);

    expect(result).toEqual(expectedState);
  });

});
