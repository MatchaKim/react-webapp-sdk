import { View } from 'react-native';
import React from 'react';
import { BaseHeader } from 'react-webapp-sdk/app/components/BaseHeader';
import WebviewKit from 'react-webapp-sdk/app/components/WebviewKit/WebviewKit';
import { WebviewScreenProps } from 'react-webapp-sdk/app/screens/WebviewScreen/WebviewScreen.props';

const WebviewScreen: React.FC<WebviewScreenProps> = ({ navigation, route }) => {
    const { url } = route.params;

    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <BaseHeader headerBackgroundColor='transparent' navigation={navigation} />
        <WebviewKit url={url} navigation={navigation}  />
      </View>
    );
};

export default WebviewScreen;
