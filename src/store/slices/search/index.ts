import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSearchState } from './types';

const initialState: TSearchState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
