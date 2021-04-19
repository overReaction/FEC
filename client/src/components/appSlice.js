import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchProductInfo = createAsyncThunk(
  'products/getProductInfo',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=products/${productId}`);
    console.log(response.data);
    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    //Initial state here
    productId: 18078,
    productInfo: {}
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    //Redux toolkit allows for "mutating" logic in reducers by interally copying initial state and producing a new state object
    changeProductId: (state, action) => {
      //Set the productId in state to be equal to the value of action.payload
      state.productId = action.payload;
    }
  },
  extraReducers: {
    [fetchProductInfo.fulfilled]: (state, action) => {
      state.productInfo = action.payload;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { changeProductId } = appSlice.actions;

//Makes the reducers defined above available to the store
export default appSlice.reducer;
