import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    sku: null,
    skuInfo: {},
    err: null,
    sizes: [],
    sizeDropDownDisplay: { value: 'default', label: 'SELECT SIZE' }
  },
  reducers: {
    updateSku: (state, action) => {
      state.sku = action.payload;
    },
    updateDropDownDisplay: (state, action) => {
      state.sizeDropDownDisplay = action.payload;
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
    }
  }
});

export const { updateSku, throwErr, reset, setSizes, updateDropDownDisplay } = cartSlice.actions;
export default cartSlice.reducer;

