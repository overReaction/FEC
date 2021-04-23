import { createSlice } from '@reduxjs/toolkit';
//const axios = require('axios');

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    sku: null,
    skuInfo: {},
    err: null
  },
  reducers: {
    updateSku: (state, action) => {
      state.sku = action.payload;
    },
    updateSkuInfo: (state, action) => {
      state.skuInfo = action.payload;
    },
    throwErr: (state, action) => {
      state.err = action.payload;
    }
  },
  extraReducers: {

  }
});

export const { updateSku, updateSkuInfo, throwErr } = cartSlice.actions;
export default cartSlice.reducer;

