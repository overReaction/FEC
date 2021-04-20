import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { axios } from 'axios';


export const qaSlice = createSlice({
  name: 'qa',
  initialState: {
    //Initial state here
    questions: []
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    //Redux toolkit allows for "mutating" logic in reducers by interally copying initial state and producing a new state object
    questionsSuccess: (state, action) => {
      state.questions = action.payload;
      state.isLoading = false;
    }
  }
});

//Makes the reducers defined above available to the store
export default qaSlice.reducer;

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
const { questionsSuccess } = qaSlice.actions;

export const fetchQuestions = () => {
  const productId = useSelector((state) => state.app.productId);
  axios.get('/api/qa/questions/', {
    params: { product_id: productId, count: 10 }
  })
    .then(response => questionsSuccess(response.data))
    .catch(error => console.error(error.message));
};

