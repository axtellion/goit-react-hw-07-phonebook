import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = itemsSlice.actions;
