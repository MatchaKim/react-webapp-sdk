import store from './Toast.store';
import { showToast, hideToast } from './Toast.slice';

const ToastUtils = {
  show: (message: string) => {
    store.dispatch(showToast(message));
    console.log("showToast", message);
  },
  hide: () => {
    store.dispatch(hideToast());
    console.log("hideToast");
  },
};

export default ToastUtils;
