/* eslint-disable prettier/prettier */

import {View, Image, TextInput, Modal} from 'react-native';
import React from 'react';
import TopTaps from '../top_tabs.jsx';
import HomeStyles from './home_styles.jsx';

function HomeScreen() {
  return (
    <>
      <View style={HomeStyles.headerBottomBorderStyle}>
        <View style={HomeStyles.hearderRowSearchStyle}>
          <View style={HomeStyles.headerRowStyle}>
            <View style={HomeStyles.imageContainerStyle}>
              <Image
                style={{margin: '20%'}}
                source={require('./../../assets/search.png')}></Image>
            </View>

            <TextInput style={{}} placeholder=" ما الذى تبحث عنه ... " />
          </View>
          <View
            style={{margin: 8, backgroundColor: '#4079EB', borderRadius: 5}}>
            <Image
              style={{margin: 12}}
              source={require('./../../assets/list.png')}
            />
          </View>
        </View>
      </View>

      <View style={HomeStyles.tobTabPositionedStyles}>
        <TopTaps></TopTaps>
      </View>

      <View />
    </>
  );
}
export default HomeScreen;
