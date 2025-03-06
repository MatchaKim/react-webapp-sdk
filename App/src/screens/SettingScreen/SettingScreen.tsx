import { View, Text, Pressable } from 'react-native';
import { SettingScreenProps } from './SettingScreen.props';
import ToastUtils from 'react-webapp-sdk/app/components/Toast/Toast.utils';
import BottomSheetUtils from 'react-webapp-sdk/app/components/BottomSheet/BottomSheet.utils';
const SettingScreen : React.FC<SettingScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>SettingScreen</Text>
            <Pressable onPress={() => ToastUtils.show("hello")}>
                <Text>show Toast</Text>
            </Pressable>
            <Pressable onPress={() => BottomSheetUtils.show("hello", "world", "close", () => {console.log("close")})}>
                <Text>show BottomSheet</Text>
            </Pressable>
        </View>
    )
}

export default SettingScreen;