import { createSlice } from '@reduxjs/toolkit';
//const axios = require('axios');

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    sku: null,
    skuInfo: {}
  },
  reducers: {
    updateSku: (state, action) => {
      state.sku = action.payload;
    },
    updateSkuInfo: (state, action) => {
      state.skuInfo = action.payload;
    }
  },
  extraReducers: {

  }
});

export const { updateSku, updateSkuInfo } = cartSlice.actions;
export default cartSlice.reducer;


// export const fetchStyleInfo = createAsyncThunk(
//   'products/getStyleInfo',
//   async (productId, thunkAPI) => {
//     const response = await axios.get(`/api/?endpoint=products/${productId}/styles`);
//     return response.data;
//   }
// );

//   extraReducers: {
//     [fetchStyleInfo.fulfilled]: (state, action) => {
//       state.styles = action.payload.results;
//       state.currentStyle = action.payload.results[0];
//     }
//   }
// });
