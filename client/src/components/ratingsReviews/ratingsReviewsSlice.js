import { createSlice } from '@reduxjs/toolkit';

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviewsCount: 2
  },
  reducers: {
    loadReviews: (state, action) => {
      state.reviewsCount += 2;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { loadReviews } = reviewSlice.actions;

//Makes the reducers defined above available to the store
export default reviewSlice.reducer;
