import { View } from 'react-native';
import WebView from 'react-native-webview';
import { WebviewScreenProps } from './WebviewScreen.props';
import React from 'react';
const WebviewScreen: React.FC<WebviewScreenProps> = ({ navigation, route }) => {
    const { url } = route.params;
    const webViewRef = React.useRef(null);
  
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
        />
      </View>
    );
  };
  

  export default WebviewScreen;