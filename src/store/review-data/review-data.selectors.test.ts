import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { makeFakePreviewOffer } from '../../utils/mocks';
import { datatype } from 'faker';
import { getIsCreatingNewReview, getReviews, getReviewsDataLoading } from './review-data.selectors';
import { Review } from '../../types/review';

describe('ReviewData selectors', () => {
  const mockReviews = new Array(12).fill(null).map(() => makeFakePreviewOffer()) as unknown as Review[];
  const state = {
    [NameSpace.Review]: {
      reviews: mockReviews,
      isReviewsDataLoading: datatype.boolean(),
      isCreatingNewReview: datatype.boolean(),
    },
  };

  it('should return reviews list from state', () => {
    const {reviews} = state[NameSpace.Review];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });

  it('should return isReviewsDataLoading from state', () => {
    const {isReviewsDataLoading} = state[NameSpace.Review];
    const result = getReviewsDataLoading(state);
    expect(result).toEqual(isReviewsDataLoading);
  });

  it('should return isCreatingNewReview from state', () => {
    const {isCreatingNewReview} = state[NameSpace.Review];
    const result = getIsCreatingNewReview(state);
    expect(result).toEqual(isCreatingNewReview);
  });
});
