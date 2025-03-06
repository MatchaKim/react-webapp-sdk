import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MainScreen } from './src/screens/MainScreen';
import { SettingScreen } from './src/screens/SettingScreen';
import { WebviewScreen } from './src/screens/WebviewScreen';
import ToastProvider from 'react-webapp-sdk/app/components/Toast/ToastProvider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToastProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" options={{ headerShown: false }}>
              {() => (
                <Tab.Navigator 
                  screenOptions={{ headerShown: false, tabBarStyle: { height: 60, borderTopLeftRadius: 12, borderTopRightRadius: 12, borderTopWidth: 1, borderColor: '#F6F6F6' }, animation:"shift" }}
                >
                     <Tab.Screen
                    name="main" 
                    component={MainScreen} 
                    options={{ tabBarIcon: ( { focused } ) => (
                      <View style={{ marginTop: 8}}>
                          {focused ? <Text>main</Text> : <Text>main</Text>}
                      </View>
                    ),
                    tabBarLabel: ( { focused } ) => (
                      <Text style={{ color: focused ? '#0033CC' : '#707070', textAlign: 'center',marginTop:7,fontSize:12,fontWeight:focused ? '600' : '400' }}>main</Text>
                    )
                  }} 
                  />
                             <Tab.Screen
                    name="setting" 
                    component={SettingScreen} 
                    options={{ tabBarIcon: ( { focused } ) => (
                      <View style={{ marginTop: 8}}>
                          {focused ? <Text>setting</Text> : <Text>setting</Text>}
                      </View>
                    ),
                    tabBarLabel: ( { focused } ) => (
                      <Text style={{ color: focused ? '#0033CC' : '#707070', textAlign: 'center',marginTop:7,fontSize:12,fontWeight:focused ? '600' : '400' }}>setting</Text>
                    )
                  }} 
                  />
                
                </Tab.Navigator>
              )}
            </Stack.Screen>
            <Stack.Screen name="WebviewScreen" component={WebviewScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      </ToastProvider>
    </SafeAreaView>
  );
}

export default App
