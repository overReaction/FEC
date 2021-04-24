import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

export const fetchQuestions = createAsyncThunk(
  'qa/questions',
  async (productId, thunkAPI) => {
    const response = await axios.get(`/api/?endpoint=qa/questions?product_id=${productId}&count=100`);
    return response.data;
  }
);

export const incrementHelpfulQuestionCount = createAsyncThunk(
  'qa/questions/helpfulQuestion',
  async (questionId, thunkAPI) => {
    const response = await axios.put(`/api/?endpoint=qa/questions/${questionId}/helpful`);
    return response.data;
  }
);

export const incrementHelpfulAnswerCount = createAsyncThunk(
  'qa/Answers/helpfulAnswer',
  async (answerId, thunkAPI) => {
    console.log(answerId);
    const response = await axios.put(`/api/?endpoint=qa/answers/${answerId}/helpful`);
    console.log(response.data);
    return response.data;
  }
);

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
    }
  },
  extraReducers: {
    [fetchQuestions.fulfilled]: (state, action) => {
      state.data = action.payload.results;
    },
    [incrementHelpfulQuestionCount.fulfilled]: (state, action) => {
      state.helpfulQClicked = true;
    },
    [incrementHelpfulAnswerCount.fulfilled]: (state, action) => {
      state.helpfulAClicked = true;
    }
  }
});

export const { selectStyle, handleMoreQsClick, handleSearchInputChange } = qaSlice.actions;

export default qaSlice.reducer;
