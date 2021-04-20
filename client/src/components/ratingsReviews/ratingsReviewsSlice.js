import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchReviews = createAsyncThunk(
  'products/getReviews',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=reviews/?product_id=${productId}`);
    console.log(response.data);
    return response.data;
  }
);

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    //Initial state here
    currentStyle: null,
    ratings: {},
    recommended: {},
    characteristics: {},
    reviews: []
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    }
  },
  extraReducers: {
    [fetchReviews.fulfilled]: (state, action) => {
      state.styles = action.payload.results;
      state.currentStyle = action.payload.results[1];
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectStyle } = reviewSlice.actions;

//Makes the reducers defined above available to the store
export default reviewSlice.reducer;
