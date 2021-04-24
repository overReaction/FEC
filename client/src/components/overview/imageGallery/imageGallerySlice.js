import { createSlice } from '@reduxjs/toolkit';

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    allStylePhotos: [],
    currentStep: 0,
    currentPhoto: {},
    visibleSteps: [0, 1, 2, 3, 4, 5, 6]
  },
  reducers: {
    increment: (state, action) => {
      state.currentStep++;
      state.currentPhoto = state.allStylePhotos[state.currentStep];
      if (state.visibleSteps.indexOf(state.currentStep) === -1) {
        let arr = [];
        for (let x = state.currentStep; arr.length <= 7; x--) {
          arr.unshift(x);
        }
        state.visibleSteps = arr;
      }
    },
    decrement: (state, action) => {
      state.currentStep--;
      state.currentPhoto = state.allStylePhotos[state.currentStep];
    },
    setStep: (state, action) => {
      state.currentStep = action.payload;
      state.currentPhoto = state.allStylePhotos[state.currentStep];
    },
    setCurrentPhoto: (state, action) => {
      state.currentPhoto = action.payload;
    },
    setStylePhotos: (state, action) => {
      state.allStylePhotos = action.payload;
      //console.log(action.payload);
      if (action.payload.length === 0) {
        state.currentPhoto = {
          thumbnail_url: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
          url: "https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80"
        };
      }
    }
  }
});

export const { increment, decrement, setStep, setCurrentPhoto, setStylePhotos } = gallerySlice.actions;
export default gallerySlice.reducer;
