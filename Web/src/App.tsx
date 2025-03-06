import { sendDataToWebView } from 'react-webapp-sdk/web/utils/webCommonUtils';

function App() {
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
      <button onClick={() => sendDataToWebView({
        action: {
          type: 'toast',
          detail: 'show',
          message: 'hello'
        },
      })}>
        show Toast
      </button>
    </>
  )
}

export default App
