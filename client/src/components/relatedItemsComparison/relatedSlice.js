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
        return response.data;
      })
      .then((arrayOfRelatedIds) => {
        let promiseArray = [];
        arrayOfRelatedIds.map((itemId, index) => {
          promiseArray[index] = (generateRelatedItemsPromise(itemId));
        });
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
        return (itemInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
    return itemInfo;
  }
);

export const relatedSlice = createSlice({
  name: 'related',
  initialState: {
    currentItem: null,
    related: []
  },
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

export const { selectRelated } = relatedSlice.actions;

export default relatedSlice.reducer;

