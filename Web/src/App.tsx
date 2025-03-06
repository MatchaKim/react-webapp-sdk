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
      <button onClick={() => sendDataToWebView({
        action: {
          type: 'bottomSheet',
          detail: 'open',
          content: {
            header: 'hello 1234567890',
            content: 'hello world 1234567890 TypeScript에서 모듈로 인식되는 파일에서는 UMD 전역 변수를 직접 TypeScript에서 모듈로 인식되는 파일에서는 UMD 전TypeScript에서 모듈로 인식되는 파일에서는 UMD 전역 변수를 직접 사용할 수 없습니다TypeScript에서 모듈로 인식되는 파일에서는 UMD 전역 변수를 직접 사용할 수 없습니다TypeScript에서 모듈로 인식되는 파일에서는 UMD 전역 변수를 직접 사용할 수 없습니다TypeScript에서 모듈로 인식되는 파일에서는 UMD 전역 변수를 직접 사용할 수 없습니다TypeScript에서 모듈로 인식되는 파일에서는 UMD 전역 변수를 직접 사용할 수 없습니다역 변수를 직접 사용할 수 없습니다사용할 수 없습니다'
          }
        },
      })}>
        show BottomSheet
      </button>
    </>
  )
}

export default App
