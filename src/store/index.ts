import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import modalsReducer from './slices/modals';
import searchReducer from './slices/search';

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import groupsApi from '../api/groups';

const store = configureStore({
  reducer: {
    modals: modalsReducer,
    search: searchReducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groupsApi.middleware)
});
setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
