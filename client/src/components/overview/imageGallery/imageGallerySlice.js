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
          thumbnail_url: "/assets/imgPlaceholder.jpeg",
          url: "/assets/imgPlaceholder.jpeg"
        };
      }
    }
  }
});

export const { increment, decrement, setStep, setCurrentPhoto, setStylePhotos } = gallerySlice.actions;
export default gallerySlice.reducer;
