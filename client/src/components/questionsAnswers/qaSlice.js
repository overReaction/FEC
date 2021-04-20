import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchQuestions = createAsyncThunk(
  'qa/questions',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions?product_id=${productId}`);

    console.log('response:', response.data);
    return response.data;
  }
);

export const qaSlice = createSlice({
  name: 'qa',
  initialState: {
    //Initial state here
    currentStyle: null,
    questions: []
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    }
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      state.questions = action.payload.results;
      state.currentStyle = action.payload.results[1];
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectStyle } = qaSlice.actions;

//Makes the reducers defined above available to the store
export default qaSlice.reducer;
