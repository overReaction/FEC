import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    sku: null,
    skuInfo: {},
    err: null,
    sizes: [],
    sizeDropDownDisplay: { value: 'default', label: 'SELECT SIZE' },
    quantDropDownDisplay: { value: null, label: '-' }
  },
  reducers: {
    updateSku: (state, action) => {
      state.sku = action.payload;
    },
    updateSkuInfo: (state, action) => {
      state.skuInfo = action.payload;
    },
    updateSizeDropDownDisplay: (state, action) => {
      state.sizeDropDownDisplay = action.payload;
    },
    updateQuantDropDownDisplay: (state, action) => {
      state.quantDropDownDisplay = action.payload;
    },
    throwErr: (state, action) => {
      state.err = action.payload;
    },
    setSizes: (state, action) => {
      state.sizes = action.payload;
    },
    reset: (state, action) => {
      state.sku = null;
      state.skuInfo = {};
      state.err = null;
      state.sizes = [];
      state.sizeDropDownDisplay = { value: 'default', label: 'SELECT SIZE' };
      state.quantDropDownDisplay = { value: null, label: '-' };
    }
  }
});

export const {
  updateSku,
  throwErr,
  reset,
  setSizes,
  updateSizeDropDownDisplay,
  updateSkuInfo,
  updateQuantDropDownDisplay } = cartSlice.actions;

export default cartSlice.reducer;

