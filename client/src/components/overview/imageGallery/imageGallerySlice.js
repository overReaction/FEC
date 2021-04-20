import { createSlice } from '@reduxjs/toolkit';

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    currentStep: 0,
    visibleSteps: [0, 1, 2, 3, 4, 5, 6]
  },
  reducers: {
    increment: (state, action) => {
      state.currentStep++;
      if (state.visibleSteps.indexOf(state.currentStep)) {
        let arr = [];
        for (let x = state.currentStep; arr.length <= 7; x--) {
          arr.unshift(x);
        }
        state.visibleSteps = arr;
      }
    },
    decrement: (state, action) => {
      state.currentStep--;
    },
    setStep: (state, action) => {
      state.currentStep = action.payload;
    }
  }
});

export const { increment, decrement, setStep } = gallerySlice.actions;
export default gallerySlice.reducer;
