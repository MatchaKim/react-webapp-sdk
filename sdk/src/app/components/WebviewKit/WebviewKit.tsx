import React from 'react';
import { WebView } from 'react-native-webview';
import { WebviewKitProps } from './WebviewKit.props';
import { View, ActivityIndicator } from 'react-native';
import { handleWebViewMessage } from './WebviewKit.utils';

const WebviewKit = ({ url, navigation }: WebviewKitProps) => {
    return (
        <WebView
        source={{ uri: url }}
        onMessage={(event : any) => handleWebViewMessage(event, navigation)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={() => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
          <ActivityIndicator size="large" color="#0000ff"/>
      </View>}
      />
    )
}

export default WebviewKit;