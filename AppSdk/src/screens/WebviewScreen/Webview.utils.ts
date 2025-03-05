import { MessageInterface } from '@sdk/types/MessageInterface.types';

export const handleWebViewMessage = (event: any, navigation: any) => {
    const data = event.nativeEvent.data;
    const message: MessageInterface = JSON.parse(data);
    console.log('Received message from JS:', message);
    if (message.action.type === 'webview' && message.action.detail === 'open') {
    console.log('message.data:', message.action.url);
      navigation.push('WebviewScreen', { url: message.action.url });
    }
}