import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from './all_product_screen/all_product_screen_view.jsx';
import Cars from './cars_screen/cars_screen_view.jsx';
import Animals from './animals_screen/animals_screen_view.jsx';
import Foods from './foods_screen/foods_screen_view.jsx';
import Building from './building_screen/building_screen_view.jsx';
import Electronics from './electronics_screen/electronics_screen_view.jsx';

const Tab = createMaterialTopTabNavigator();

export default function TopTaps() {
  return (
    <Tab.Navigator
      initialRouteName="الكل"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 7,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        },

        tabBarStyle: {
          backgroundColor: '#6A7Aff',
        },
        tabBarLabelStyle: {
          fontSize: 9,
          fontWeight: 'bold',
          alignSelf: 'auto',
          color: '#FFFFFF',
          fontFamily: 'Tajawal-Light',
        },
        animationEnabled: true,
      }}>
      <Tab.Screen name="اعلاف" component={Foods} />
      <Tab.Screen name="حيوانات" component={Animals} />
      <Tab.Screen name="الكترونات" component={Electronics} />
      <Tab.Screen name="عقارات" component={Building} />
      <Tab.Screen name="سيارات" component={Cars} />
      <Tab.Screen name="الكل" component={All} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F4F4',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '80%',
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: '1%',
  },
});
