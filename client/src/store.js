import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from './components/overview/overviewSlice.js';
import reviewsReducer from './components/ratingsReviews/ratingsReviewsSlice.js';
import qaReducer from './components/questionsAnswers/qaSlice.js';
import appReducer from './components/appSlice.js';
import relatedReducer from './components/relatedItemsComparison/relatedSlice.js';
import galleryReducer from './components/overview/imageGallery/imageGallerySlice.js';
import cartReducer from './components/overview/addToCart/cartSlice.js';
import outfitReducer from './components/relatedItemsComparison/outfitSlice.js';

export default configureStore({
  //Root reducer (a combination of all reducers)
  reducer: {
    //List all reducers here. Will be passed to combineReducers()
    app: appReducer,
    overview: overviewReducer,
    reviews: reviewsReducer,
    qa: qaReducer,
    related: relatedReducer,
    gallery: galleryReducer,
    cart: cartReducer,
    outfit: outfitReducer
  }
});
