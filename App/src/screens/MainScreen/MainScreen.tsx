import { View, Button, Text } from 'react-native';
import { MainScreenProps } from './MainScreen.props';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';


const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center' }}
        >
                <Button
                    title="Webview"
                onPress={() => navigation.navigate('WebviewScreen', { url: 'http://localhost:5173' })}
            />
            <TextInput
                style={{ borderWidth: 1, borderColor: 'black', width: '100%', height: 40 }}
                placeholder="Input"
            />
        </View>
    )
}

export default MainScreen;