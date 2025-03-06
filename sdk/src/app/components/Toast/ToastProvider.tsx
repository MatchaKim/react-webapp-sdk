import { Provider } from 'react-redux';
import Toast from './Toast';
import store  from './Toast.store';



const ToastProvider = ({ children }: any) => {
    return (
        <Provider store={store}>
            <Toast />
            {children}
        </Provider>
    )
}

export default ToastProvider;