import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './bottom_tab';
import {TouchableOpacity, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './login_screen/login_screen_view.jsx';
import RegisterScreen from './register_screen/register_screen_view.jsx';
import ModificationScreen from './modificationscreen.jsx';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login_Screen"
          component={LoginScreen}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="bottom_tabs"
          component={Tabs}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'حساب جديد',

            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{marginRight: '10%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '4%',
                  }}>
                  <Text style={{color: 'white', fontFamily: 'Tajawal-Regular'}}>
                    رجوع
                  </Text>
                  <Icon name="chevron-right" size={16} color="#FDFEFF" />
                </View>
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',

            headerStyle: {
              backgroundColor: '#5180FF',
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
              fontFamily: 'Tajawal-Bold',
            },
          }}
        />

        <Stack.Screen
          name="ModificationScreen"
          component={ModificationScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
