import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from './components/overview/overviewSlice.js';
import appReducer from './components/appSlice.js';
import relatedReducer from './components/relatedItemsComparison/relatedSlice.js';

export default configureStore({
  //Root reducer (a combination of all reducers)
  reducer: {
    //List all reducers here. Will be passed to combineReducers()
    app: appReducer,
    overview: overviewReducer,
    related: relatedReducer
  }
});
