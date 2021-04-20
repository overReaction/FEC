import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from './components/overview/overviewSlice.js';
import appReducer from './components/appSlice.js';
import styleReducer from './components/overview/styleSelector/styleSelectorSlice.js';

export default configureStore({
  //Root reducer (a combination of all reducers)
  reducer: {
    //List all reducers here. Will be passed to combineReducers()
    app: appReducer,
    overview: overviewReducer,
    styleSelector: styleReducer
  }
});
