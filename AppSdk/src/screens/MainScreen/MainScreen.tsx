import { View, Text, Button } from 'react-native';
import { MainScreenProps } from './MainScreen.props';

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Webview"
                onPress={() => navigation.navigate('WebviewScreen', { url: 'http://localhost:5173' })}
            />
        </View>
    )
}

export default MainScreen;