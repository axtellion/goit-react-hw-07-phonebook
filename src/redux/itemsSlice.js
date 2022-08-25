import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const itemsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    add(state, { payload }) {
      state.contacts.push(payload);
    },
    remove(state, { payload }) {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    chengeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistedItemsReducer = persistReducer(
  persistConfig,
  itemsSlice.reducer
);

export const { add, remove, chengeFilter } = itemsSlice.actions;
