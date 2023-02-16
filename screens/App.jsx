
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';

import Tabs from './bottom_tab';
import TopTaps from './top_tabs';
import RegisterScreen from './registerscreen';
import { TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModificationScreen from './modificationscreen';
import Dropdown from './test';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
          name="Dropdown"
          component={Dropdown}
          options={{
            header: () => null,
          }}
        /> */}
      <Stack.Screen
          name="bottom_tabs"
          component={Tabs}
          options={{
            header: () => null,
          }}
        />
      <Stack.Screen
          name="Login_Screen"
          component={LoginScreen}
          options={{
            header: () => null,
          }}
        />
     
        {/* <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            title: "الاقسام",

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{ marginLeft: "10%" }}>

                <View style={{
                  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                  width: Dimensions.get('window').width * 0.08,
                  height: Dimensions.get('window').width * 0.08,
                  backgroundColor: "#FFFFFF",
                  justifyContent: 'center',
                  alignItems: 'center'
                }} >
                  <Image source={require("../assets/blackbell.png")}>
                  </Image>
                  <View
                    style={{
                      position: 'absolute',
                      left: 10,
                      top: 20,
                      paddingHorizontal: 10

                    }}>
                    <View style={{
                      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                      width: Dimensions.get('window').width * 0.03,
                      height: Dimensions.get('window').width * 0.03,
                      backgroundColor: "red",
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Text style={{ color: "white", fontSize: 8, fontFamily: "Tajawal-Bold" }}>2</Text>
                    </View>

                  </View>
                </View>
              </TouchableOpacity>
            ),
            headerTitleAlign: "center",

            headerStyle: {
              backgroundColor: "#577EFF",
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
             
              fontFamily: "Tajawal-Bold"
            },

          }}
        /> */}
       
        <Stack.Screen
          name="تعديل الحساب"
          component={ModificationScreen}
          options={{
            title: "تعديل الحساب",

            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{ marginRight: "10%" }}>
                <View style={{

                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: "center",
                  margin: "4%"

                }}>
                  <Text style={{ color: 'white', fontFamily: "Tajawal-Regular" }}>رجوع</Text>
                  <Icon name="chevron-right" size={16} color="#FDFEFF" />

                </View>
              </TouchableOpacity>
            ),
            headerTitleAlign: "center",


            headerStyle: {
              backgroundColor: "#577EFF",
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
              // fontWeight: 'bold',
              fontFamily: "Tajawal-Bold"
            },
          }}
        />
        <Stack.Screen
          name="حساب جديد"
          component={RegisterScreen}
          options={{
            title: "حساب جديد",

            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Right Menu Clicked')}
                style={{ marginRight: "10%" }}>
                <View style={{

                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: "center",
                  margin: "4%"

                }}>
                  <Text style={{ color: 'white', fontFamily: "Tajawal-Regular" }}>رجوع</Text>
                  <Icon name="chevron-right" size={16} color="#FDFEFF" />

                </View>
              </TouchableOpacity>
            ),
            headerTitleAlign: "center",


            headerStyle: {
              backgroundColor: "#5180FF",
            },
            headerTintColor: '#fff',

            headerTitleStyle: {
              // fontWeight: 'bold',
              fontFamily: "Tajawal-Bold"
            },
          }}
        />

       

        <Stack.Screen
          name="toptabs"
          component={TopTaps}
          options={{
            header: () => null,
          }}
        />

        {/* <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{
            header: () => null,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
