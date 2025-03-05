import { View, ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import { WebviewScreenProps } from './WebviewScreen.props';
import React from 'react';
import { handleWebViewMessage } from './Webview.utils';
import { BaseHeader } from '@/components/BaseHeader';
const WebviewScreen: React.FC<WebviewScreenProps> = ({ navigation, route }) => {
    const { url } = route.params;

    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <BaseHeader headerBackgroundColor='transparent' navigation={navigation} />
        <WebView
          source={{ uri: url }}
          onMessage={(event : any) => handleWebViewMessage(event, navigation)}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          renderLoading={() => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>}
        />
      </View>
    );
};

export default WebviewScreen;
