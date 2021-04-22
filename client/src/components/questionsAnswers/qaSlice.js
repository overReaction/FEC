import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchQuestions = createAsyncThunk(
  'qa/questions',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions?product_id=${productId}`);
    return response.data;
  }
);

// export const fetchAnswers = createAsyncThunk(
//   'qa/questions/:question_id/answers',
//   async (questionId, thunkAPI) => {
//     const response = await axios.get(`/api/?endpoint=qa/questions/${questionId}/answers`);

//     return response.data;
//   }
// );

export const qaSlice = createSlice({
  name: 'qa',
  initialState: {
    data: [],
    moreQs: false,
    addQs: false,
    addAs: false,
    searchValue: ''
  },

  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    },
    handleMoreQsClick: (state, action) => {
      state.moreQs = !state.moreQs;
      console.log(state.moreQs);
    }
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      state.data = action.payload.results;
    }
  }
});

export const { selectStyle, handleMoreQsClick } = qaSlice.actions;

export default qaSlice.reducer;
