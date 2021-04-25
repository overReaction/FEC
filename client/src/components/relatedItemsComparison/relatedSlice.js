import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchRelated = createAsyncThunk(
  'products/getRelated',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productId}/related`);
    // console.log('related item number arr: ', response.data);
    return response.data;
  }
);

export const fetchRelatedInfo = createAsyncThunk(
  'products/getRelatedInfo',
  async (productNumber, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productNumber}`);
    // console.log('related item info obj: ', response.data);
    return response.data;
  }
);

export const fetchRelatedStyleInfo = createAsyncThunk(
  'products/getRelatedStyleInfo',
  async (productNumber, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productNumber}/styles`);
    // console.log('related item style obj: ', response.data);
    return response.data;
  }
);

export const relatedSlice = createSlice({
  name: 'related',
  initialState: {
    //Initial state here
    currentItem: null,
    related: [],
    relatedInfo: [],
    relatedStyleInfo: []
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  //Redux toolkit allows for "mutating" logic in reducers by interally copying initial state and producing a new state object
  reducers: {
    selectRelated: (state, action) => {
      state.currentItem = action.payload;
    }
  },
  extraReducers: {
    [fetchRelated.fulfilled]: (state, action) => {
      state.related = action.payload;
    },
    [fetchRelatedInfo.fulfilled]: (state, action) => {
      // console.log('action.payload: ', action.payload);
      state.relatedInfo.push(action.payload);
    },
    [fetchRelatedStyleInfo.fulfilled]: (state, action) => {
      // console.log('action.payload: ', action.payload.results[0].photos[0].thumbnail_url);
      state.relatedStyleInfo.push(action.payload);
        // .then(() => {
        //   state.relatedInfo.map((product) => {
        //     if (product.id === action.payload.product_id) {
        //       product.photo_url = action.payload.results[0].photos[0].thumbnail_url;
        //     }
        //   });
        // });
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectRelated } = relatedSlice.actions;

//Makes the reducers defined above available to the store
export default relatedSlice.reducer;

