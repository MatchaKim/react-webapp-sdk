import { MessageInterface } from '@sdk/types/MessageInterface.types';

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(data: string): void;
    };
  }
}
function App() {

  const sendDataToWebView = (data: MessageInterface) => {
    window.ReactNativeWebView?.postMessage(JSON.stringify(data));
  };

  return (
    <>
      <button onClick={() => sendDataToWebView({
        action: {
          type: 'webview',
          detail: 'open',
          url: 'http://localhost:5173'
        },
      })}>
        Send Message to WebView
      </button>
    </>
  )
}

export default App
