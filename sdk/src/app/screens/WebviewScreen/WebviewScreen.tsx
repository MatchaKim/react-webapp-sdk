import { View } from 'react-native';
import { WebviewScreenProps } from './WebviewScreen.props';
import React from 'react';
import { BaseHeader } from '../../components/BaseHeader';
import WebviewKit from '../../components/WebviewKit/WebviewKit';
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
