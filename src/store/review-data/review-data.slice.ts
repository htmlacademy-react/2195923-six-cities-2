import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { createReviewAction, loadReviewsAction } from '../actions/api-actions';
import { ReviewData } from '../../types/state';

const initialState: ReviewData = {
  reviews: [],
  isReviewsDataLoading: true,
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(loadReviewsAction.fulfilled, (state, action) => {
        state.isReviewsDataLoading = false;
        state.reviews = action.payload;
      })
      .addCase(loadReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(createReviewAction.pending, (state) => {
        state.isCreatingNewReview = true;
      })
      .addCase(createReviewAction.fulfilled, (state, action) => {
        if (action.payload !== undefined) {
          state.reviews.push(action.payload);
        }
        state.isCreatingNewReview = false;
      })
      .addCase(createReviewAction.rejected, (state) => {
        state.isCreatingNewReview = false;
      });
  }
});

