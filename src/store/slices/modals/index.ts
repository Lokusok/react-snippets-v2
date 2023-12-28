import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TModalsState } from './types';

const initialState: TModalsState = {
  active: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setActiveModal(state, action: PayloadAction<string | null>) {
      state.active = action.payload;
    }
  },
});

export const { setActiveModal } = modalsSlice.actions;

export default modalsSlice.reducer;
