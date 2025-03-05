import { View, Text, Button, Modal, Keyboard } from 'react-native';
import { MainScreenProps } from './MainScreen.props';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, Platform } from 'react-native';
const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleModal = () => {
        setIsModalVisible(true);
        setTimeout(() => {
            setIsModalVisible(false);
        }, 1000);
    }
    return (
        <View
            style={{ flex: 1, alignItems: 'center' }}
        >

                <Button
                    title="Webview"
                onPress={() => navigation.navigate('WebviewScreen', { url: 'http://localhost:5173' })}
            />
            <Button
                title="Modal"
                onPress={handleModal}
            />
            <TextInput
                style={{ borderWidth: 1, borderColor: 'black', width: '100%', height: 40 }}
                placeholder="Input"
            />
            {isModalVisible &&
                <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red',position:'absolute', bottom: 0 }}>
                    <Text>Hello</Text>
                </View>
            }
        </View>
    )
}

export default MainScreen;