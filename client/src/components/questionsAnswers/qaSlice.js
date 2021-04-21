import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchQuestions = createAsyncThunk(
  'qa/questions',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions?product_id=${productId}`);
    // console.log('QuestionsResponse:', response.data);
    return response.data;
  }
);

export const fetchAnswers = createAsyncThunk(
  'qa/questions/:question_id/answers',
  async (questionId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions/${questionId}/answers`);

    // console.log('AnswersResponse:', response.data);
    return response.data;
  }
);

export const qaSlice = createSlice({
  name: 'qa',
  initialState: {
    data: []
  },

  reducers: {
    selectStyle: (state, action) => {
      state.currentStyle = action.payload;
    }
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      state.data = action.payload.results;
    }
    // [fetchAnswers.fulfilled]: (state, action) => {
    //   state.answers = action.payload.results;
    //   console.log('payload:', action.payload.results);
    // }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectStyle } = qaSlice.actions;

//Makes the reducers defined above available to the store
export default qaSlice.reducer;
