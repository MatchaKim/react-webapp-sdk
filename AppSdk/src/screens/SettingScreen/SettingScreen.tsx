import { View, Text } from 'react-native';
import { SettingScreenProps } from './SettingScreen.props';

const SettingScreen : React.FC<SettingScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>SettingScreen</Text>
        </View>
    )
}

export default SettingScreen;