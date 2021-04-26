import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const generateRelatedItemsPromise = function (productId) {
  return axios.get(`/api/?endpoint=products/${productId}`);
};

const generateRelatedStylePromise = function (productId) {
  return axios.get(`/api/?endpoint=products/${productId}/styles`);
};

export const fetchRelated = createAsyncThunk(
  'products/getRelated',
  async (productId, thunkAPI) => {
    let itemInfo;
    await axios.get(`/api/?endpoint=products/${productId}/related`)
      .then(function (response) {
        console.log('Related products: ');
        console.log(response.data);
        return response.data;
      })
      .then((arrayOfRelatedIds) => {
        let promiseArray = [];
        arrayOfRelatedIds.map((itemId, index) => {
          promiseArray[index] = (generateRelatedItemsPromise(itemId));
        });
        console.log('Related Info: ');
        console.log(promiseArray);
        return promiseArray;
      })
      .then((promiseArray) => {
        return (Promise.all(promiseArray));
      })
      .then((resolvedPromises) => {
        itemInfo = [];
        resolvedPromises.map((item, index) => {
          itemInfo[index] = item.data;
        });
        console.log(itemInfo);
        return itemInfo;
      })
      .then((itemInfoArray) => {
        let promiseArray = [];
        itemInfoArray.map((item, index) => {
          promiseArray[index] = (generateRelatedStylePromise(item.id));
        });
        return promiseArray;
      })
      .then((promiseArray) => {
        return (Promise.all(promiseArray));
      })
      .then((resolvedStylePromises) => {
        resolvedStylePromises.map((item, index) => {
          itemInfo[index].photo = item.data.results[0].photos[0].thumbnail_url;
        });
        console.log(itemInfo);
        return (itemInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
    return itemInfo;
  }
);

// export const fetchRelatedInfo = createAsyncThunk(
//   'products/getRelatedInfo',
//   async (productNumber, thunkAPI) => {
//     const response = await axios.get(`/api/?endpoint=products/${productNumber}`);
//     // console.log('related item info obj: ', response.data);
//     return response.data;
//   }
// );

// export const fetchRelatedStyleInfo = createAsyncThunk(
//   'products/getRelatedStyleInfo',
//   async (productNumber, thunkAPI) => {
//     const response = await axios.get(`/api/?endpoint=products/${productNumber}/styles`);
//     // console.log('related item style obj: ', response.data);
//     return response.data;
//   }
// );

export const relatedSlice = createSlice({
  name: 'related',
  initialState: {
    //Initial state here
    currentItem: null,
    related: []
  },
  //A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state
  //Redux toolkit allows for "mutating" logic in reducers by interally copying initial state and producing a new state object
  reducers: {
    selectRelated: (state, action) => {
      state.currentItem = action.payload;
    }
  },
  extraReducers: {
    [fetchRelated.fulfilled]: (state, action) => {
      state.related = action.payload;
    }
  }
});

//Action creators are generated for each reducer function. Add multiple like so { reducer1, reducer2, ...}
export const { selectRelated } = relatedSlice.actions;

//Makes the reducers defined above available to the store
export default relatedSlice.reducer;

