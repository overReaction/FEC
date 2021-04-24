import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchRelated = createAsyncThunk(
  'products/getRelated',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productId}/related`);
    return response.data;
  }
);

export const relatedSlice = createSlice({
  name: 'related',
  initialState: {
    //Initial state here
    currentItem: null,
    related: []
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
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectRelated } = relatedSlice.actions;

//Makes the reducers defined above available to the store
export default relatedSlice.reducer;
