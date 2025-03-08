import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BottomSheetState {
  visible: boolean;
  header: string;
  contentString: string;
  webviewUrl?: string;
  onCloseText: string;
}

const initialState: BottomSheetState = {
  visible: false,
  header: '',
  contentString: '',
  webviewUrl: '',
  onCloseText: '닫기',
};

const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    showBottomSheet: (state, action: PayloadAction<BottomSheetState>) => {
      state.visible = true;
      state.header = action.payload.header;
      state.contentString = action.payload.contentString;
      state.webviewUrl = action.payload.webviewUrl;
      state.onCloseText = action.payload.onCloseText;
    },
    hideBottomSheet: (state) => {
      state.visible = false;
    },
  },
});

export const { showBottomSheet, hideBottomSheet } = bottomSheetSlice.actions;
export default bottomSheetSlice.reducer;
