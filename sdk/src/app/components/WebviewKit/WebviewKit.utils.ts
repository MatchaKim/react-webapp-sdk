import { MessageInterface } from '@sdk/common/types/MessageInterface.types';
import ToastUtils from '../Toast/Toast.utils';
import BottomSheetUtils from '../BottomSheet/BottomSheet.utils';
export const handleWebViewMessage = (event: any, navigation: any) => {
    const data = event.nativeEvent.data;
    const message: MessageInterface = JSON.parse(data);
    
    console.log('Received message from JS:', message);
    if (message.action.type === 'webview' && message.action.detail === 'open') {
      navigation.push('WebviewScreen', { url: message.action.url });
    }
    if (message.action.type === 'webview' && message.action.detail === 'close') {
      navigation.goBack();
    }
    if(message.action.type === 'toast' && message.action.detail === 'show') {
      ToastUtils.show("hello");
    }
    if(message.action.type === 'toast' && message.action.detail === 'hide') {
      ToastUtils.hide();
    }
    if(message.action.type === 'bottomSheet' && message.action.detail === 'open') {
      BottomSheetUtils.show(message.action.content.header, message.action.content.content , "커스텀 닫기");
    }
    if(message.action.type === 'bottomSheet' && message.action.detail === 'close') {
      BottomSheetUtils.hide();
    }
}
