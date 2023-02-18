
import { Image, TouchableOpacity, Dimensions, View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./home_screen";
import FavoriteScreen  from "./favorite_screen";
import AddScreen from "./add_screen";
import CategoriesScreen from "./categories_screen";
import AccountScreen from './account_screen'



const Tab = createBottomTabNavigator();


function Tabs({ navigation }) {
  return (
    <Tab.Navigator

      initialRouteName="Home"
      screenOptions={{
        tabBarLabel: () => null,
      
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
        options={{
          header: () => null,
          headerStyle: {
            backgroundColor: "#6A7Aff",
            elevation: 0,
            title: null,
        
          },
        
          tabBarIcon: ({ }) => <Image source={require('E:/projects/MazadElRAs/assets/home.png')} />,
        }}

      />

      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}

        options={{

          title: "المفضله",



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
          // headerStatusBarHeight:"1%",



          headerStyle: {
            backgroundColor: "#4982FF",
            elevation: 0
            // height:"25%"
          },
          headerTintColor: '#fff',

          headerTitleStyle: {

            fontFamily: "Tajawal-Bold"
          },

          tabBarIcon: () => (
            <Image source={require('../assets/heart.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{

          title: "اضف اعلان",



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
                <Image source={require("E:/projects/MazadElRAs/assets/blackbell.png")}>
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
          // headerStatusBarHeight:"1%",



          headerStyle: {
            backgroundColor: "#4982FF",
            elevation: 0
            // height:"25%"
          },
          headerTintColor: '#fff',

          headerTitleStyle: {

            fontFamily: "Tajawal-Bold"
          },

          tabBarIcon: () => (
            <Image source={require('../assets/addicon.png')} />
          ),
        }}
      />
      <Tab.Screen
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
          // tabBarLabel: ({ }) => (<Text style={{color:"#FF007F", fontWeight:"bold"}}>HOME</Text>)
          //   ,
          tabBarIcon: () => (
            <Image source={require('../assets/plugin.png')} />
          ),
        }}

      />
      <Tab.Screen
        name="MyAccount"
        component={AccountScreen}
        options={{

          title: "حسابى",



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
          // headerStatusBarHeight:"1%",



          headerStyle: {
            backgroundColor: "#4982FF",
            elevation: 0
            // height:"25%"
          },
          headerTintColor: '#fff',

          headerTitleStyle: {

            fontFamily: "Tajawal-Bold"
          },

          tabBarIcon: () => (
            <Image source={require('../assets/profile.png')} />
          ),
        }}
      />
    </Tab.Navigator >
  );
}
export default Tabs;
