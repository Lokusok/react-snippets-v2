import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TGroupsState } from './types';

import { TGroup } from '../../../models';

const initialState: TGroupsState = {
  active: null,
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setActiveGroup: (state, action: PayloadAction<TGroup>) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveGroup } = groupsSlice.actions;

export default groupsSlice.reducer;
