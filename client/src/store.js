import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from './components/overview/overviewSlice.js';
import qaReducer from './components/questionsAnswers/qaSlice.js';
import appReducer from './components/appSlice.js';
import galleryReducer from './components/overview/imageGallery/imageGallerySlice.js';

export default configureStore({
  //Root reducer (a combination of all reducers)
  reducer: {
    //List all reducers here. Will be passed to combineReducers()
    app: appReducer,
    overview: overviewReducer,
    qa: qaReducer,
    gallery: galleryReducer
  }
});
