import { View, Text, Button, Pressable } from 'react-native';
import { SettingScreenProps } from './SettingScreen.props';
import ToastUtils from 'react-webapp-sdk/src/app/components/Toast/Toast.utils';
const SettingScreen : React.FC<SettingScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>SettingScreen</Text>
            <Pressable onPress={() => ToastUtils.show("hello")}>
                <Text>show Toast</Text>
            </Pressable>
        </View>
    )
}

export default SettingScreen;