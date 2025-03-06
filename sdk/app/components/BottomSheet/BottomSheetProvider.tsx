import { Provider } from 'react-redux';
import BottomSheet from './BottomSheet';
import store from './BottomSheet.store';
import React from 'react';
interface BottomSheetProviderProps {
    children: React.ReactNode;
}

const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {

    return (
        <Provider store={store}>
            <BottomSheet />
            {children}
        </Provider>
    )
}

export default BottomSheetProvider;