import { View } from 'react-native';
import WebView from 'react-native-webview';
import { WebviewScreenProps } from './WebviewScreen.props';
import React from 'react';
import { MessageInterface } from '../../../../sdk/types/MessageInterface.types';
const WebviewScreen: React.FC<WebviewScreenProps> = ({ navigation, route }) => {
    const { url } = route.params;
    console.log('Navigating to:', url);

    const handleWebViewMessage = (event: any) => {
        const data = event.nativeEvent.data;
        const message: MessageInterface = JSON.parse(data);
        console.log('Received message from JS:', message);
        if (message.action.type === 'webview' && message.action.detail === 'open') {
        console.log('message.data:', message.data);
          navigation.push('WebviewScreen', { url: message.data });
        }
    }
  
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: url }}
          onMessage={(event : any) => handleWebViewMessage(event)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
    );
};

export default WebviewScreen;
