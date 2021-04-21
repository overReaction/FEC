import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchStyleInfo = createAsyncThunk(
  'products/getStyleInfo',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productId}/styles`);
    return response.data;
  }
);

export const overviewSlice = createSlice({
  name: 'overview',
  initialState: {
    //Initial state here
    currentStyle: null,
    styles: {}
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    }
  },
  extraReducers: {
    [fetchStyleInfo.fulfilled]: (state, action) => {
      state.styles = action.payload.results;
      state.currentStyle = action.payload.results[0];
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectStyle } = overviewSlice.actions;

//Makes the reducers defined above available to the store
export default overviewSlice.reducer;
