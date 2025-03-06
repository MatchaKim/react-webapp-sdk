import { MessageInterface } from '../../common/types/MessageInterface.types';

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(data: string): void;
    };
  }
}

export const sendDataToWebView = (data: MessageInterface) => {
    window.ReactNativeWebView?.postMessage(JSON.stringify(data));
};