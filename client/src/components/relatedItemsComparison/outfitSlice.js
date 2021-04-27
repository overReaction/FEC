import { createSlice } from '@reduxjs/toolkit';
export const outfitSlice = createSlice({
  name: 'outfit',
  initialState: {
    outfit: []
  },

  reducers: {
    addToOutfit: (state, action) => {
      state.outfit.push(action.payload);
    },
    removeFromOutfit: (state, action) => {
      state.outfit.splice(action.payload, 1);
    }
  }
});

export const { addToOutfit, removeFromOutfit } = outfitSlice.actions;

export default outfitSlice.reducer;
