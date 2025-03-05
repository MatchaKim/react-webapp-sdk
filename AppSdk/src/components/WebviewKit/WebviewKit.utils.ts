import { MessageInterface } from '@sdk/types/MessageInterface.types';
import ToastUtils from '@/components/Toast/Toast.utils';
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
}