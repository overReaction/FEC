import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchStyleInfo = createAsyncThunk(
  'products/getStyleInfo',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productId}/styles`);
    console.log(response.data);
    return response.data;
  }
);

export const styleSelectorSlice = createSlice({
  name: 'styleSelector',
  initialState: {
    currentStyle: null,
    styles: {}
  },
  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    }
  },
  extraReducers: {
    [fetchStyleInfo.fulfilled]: (state, action) => {
      state.styles = action.payload;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectStyle } = styleSelectorSlice.actions;

//Makes the reducers defined above available to the store
export default styleSelectorSlice.reducer;
