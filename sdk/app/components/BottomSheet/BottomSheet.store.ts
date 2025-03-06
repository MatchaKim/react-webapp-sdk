import { configureStore } from '@reduxjs/toolkit';
import bottomSheetReducer from './BottomSheet.slice';

const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
