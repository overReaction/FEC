import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    anchorEl: null
  },
  reducers: {
    setAnchorEl: (state, action) => {
      state.anchorEl = action.payload;
    }
  }
});

export const { setAnchorEl } = cartSlice.actions;
export default cartSlice.reducer;
