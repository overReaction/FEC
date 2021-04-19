import { createSlice } from '@reduxjs/toolkit';

export const overviewSlice = createSlice({
  name: 'overview',
  initialState: {
    //Initial state here
    someStateValue: 0
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  reducers: {
    //Redux toolkit allows for "mutating" logic in reducers by interally copying initial state and producing a new state object
    someReducer: (state, action) => {
      //alter state somehow
      state.someStateValue += 1;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { someReducer } = overviewSlice.actions;

//Makes the reducers defined above available to the store
export default overviewSlice.reducer;
