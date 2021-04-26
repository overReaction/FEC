import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const markHelpful = createAsyncThunk(
  'reviews/markHelpful',
  async (reviewId, thunkAPI) => {
    await axios.put(`/api/?endpoint=reviews/${reviewId}/helpful`);
    return reviewId;
  }
);

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviewsCount: 2,
    markedHelpful: []
  },
  reducers: {
    loadReviews: (state, action) => {
      state.reviewsCount += 2;
    }
  },
  extraReducers: {
    [markHelpful.fulfilled]: (state, action) => {
      state.markedHelpful.push(action.payload);
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { loadReviews } = reviewSlice.actions;

//Makes the reducers defined above available to the store
export default reviewSlice.reducer;
