import { createSlice } from '@reduxjs/toolkit';

const window = function (windowSize, currentPosition, array) {
  if (currentPosition < windowSize) {
    return array.slice(0, windowSize);
  } else if (currentPosition === array.length - 1) {
    return array.slice(array.length - windowSize);
  } else {
    return array.slice(currentPosition - (windowSize - 1), currentPosition + 1);
  }
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    allStylePhotos: [],
    currentStep: 0,
    currentPhoto: {},
    visibleSteps: []
  },
  reducers: {
    increment: (state, action) => {
      state.visibleSteps = window(7, state.currentStep + 1, state.allStylePhotos);
      state.currentPhoto = state.allStylePhotos[state.currentStep + 1];
      state.currentStep++;
    },
    decrement: (state, action) => {
      state.visibleSteps = window(7, state.currentStep - 1, state.allStylePhotos);
      state.currentPhoto = state.allStylePhotos[state.currentStep - 1];
      state.currentStep--;
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
      if (action.payload.length === 0) {
        state.currentPhoto = {
          thumbnail_url: "/assets/imgPlaceholder.jpeg",
          url: "/assets/imgPlaceholder.jpeg"
        };
      } else {
        state.visibleSteps = window(7, state.currentStep, state.allStylePhotos);
      }
    }
  }
});

export const { increment, decrement, setStep, setCurrentPhoto, setStylePhotos } = gallerySlice.actions;
export default gallerySlice.reducer;
