import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSnippetState } from './types';
import { TSnippet } from '../../../models';

const initialState: TSnippetState = {
  active: null,
};

const snippetSlice = createSlice({
  name: 'snippet',
  initialState,
  reducers: {
    setActiveSnippet: (state, action: PayloadAction<TSnippet>) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveSnippet } = snippetSlice.actions;

export default snippetSlice.reducer;
