import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ToastState {
  message: string;
  isVisible: boolean;
}

const initialState: ToastState = {
  message: '',
  isVisible: false,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
      state.message = '';
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
