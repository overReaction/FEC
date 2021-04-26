import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchProductInfo = createAsyncThunk(
  'products/getProductInfo',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productId}`);
    return response.data;
  }
);

export const fetchReviewMetadata = createAsyncThunk(
  'reviews/getReviewMetadata',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=reviews/meta?product_id=${productId}`);
    return response.data;
  }
);

export const fetchReviewsNewest = createAsyncThunk(
  'reviews/getReviewsNewest',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=reviews/?product_id=${productId}&count=100&sort=newest`);
    return response.data.results;
  }
);

export const fetchReviewsHelpful = createAsyncThunk(
  'reviews/getReviewsHelpful',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=reviews/?product_id=${productId}&count=100&sort=helpful`);
    return response.data.results;
  }
);

export const fetchReviewsRelevant = createAsyncThunk(
  'reviews/getReviewsRelevant',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=reviews/?product_id=${productId}&count=100&sort=relevant`);
    return response.data.results;
  }
);

const calcAvgRating = (objectOfRatings) => {
  let numOfReviews = Object.values(objectOfRatings).reduce(function (accumulator, currentValue) {
    return accumulator + parseInt(currentValue, 10);
  }, 0);

  let total = 0;
  for (let key in objectOfRatings) {
    total += parseInt(key, 10) * parseInt(objectOfRatings[key], 10);
  }

  let avg = total / numOfReviews;
  return avg;
};

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    //Initial state here
    productId: 18078,
    productInfo: {},
    reviews: [],
    reviewMetadata: {},
    rating: 0
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    //Redux toolkit allows for "mutating" logic in reducers by interally copying initial state and producing a new state object
    changeProductId: (state, action) => {
      //Set the productId in state to be equal to the value of action.payload
      state.productId = action.payload;
    }
  },
  //Reducers that depend upon async actions are defined here
  extraReducers: {
    [fetchProductInfo.fulfilled]: (state, action) => {
      state.productInfo = action.payload;
    },
    [fetchReviewMetadata.fulfilled]: (state, action) => {
      state.reviewMetadata = action.payload;
      if (state.reviewMetadata.ratings) {
        state.rating = calcAvgRating(state.reviewMetadata.ratings);
      }
    },
    [fetchReviewsNewest.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
    [fetchReviewsRelevant.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
    [fetchReviewsHelpful.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { changeProductId } = appSlice.actions;

//Makes the reducers defined above available to the store
export default appSlice.reducer;
