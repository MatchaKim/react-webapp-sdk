import store from './BottomSheet.store';
import { showBottomSheet, hideBottomSheet } from './BottomSheet.slice';

const BottomSheetUtils = {
  show: (header: string, contentString: string, onCloseText: string) => {
    store.dispatch(showBottomSheet({ header, contentString, onCloseText, visible: true }));
    console.log("showBottomSheet", header, contentString, onCloseText);
  },
  hide: () => {
    store.dispatch(hideBottomSheet());
    console.log("hideBottomSheet");
  },
};

export default BottomSheetUtils;
