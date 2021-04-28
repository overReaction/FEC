import { createSlice } from '@reduxjs/toolkit';
export const outfitSlice = createSlice({
  name: 'outfit',
  initialState: {
    outfitObjects: [],
    outfitIds: []
  },

  reducers: {
    addToOutfit: (state, action) => {
      state.outfitObjects.push(action.payload);
      state.outfitIds.push(action.payload.id);
    },
    removeFromOutfit: (state, action) => {
      state.outfitObjects.splice(action.payload, 1);
      state.outfitIds.splice(action.payload, 1);
    }
  }
});

export const { addToOutfit, removeFromOutfit } = outfitSlice.actions;

export default outfitSlice.reducer;
