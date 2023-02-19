import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomAdvertises = props => {
  return (
    <View style={Styles.columnNumersStyle}>
      <Text
        style={{
          fontFamily: 'Tajawal-ExtraBold',
          fontSize: props.numberFontSize,
          color: props.color,
        }}>
        {props.number}
      </Text>
      <Text style={Styles.advsStyle}>{props.advers}</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  columnNumersStyle: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },

  advsStyle: {fontFamily: 'Tajawal-ExtraBold', fontSize: 12},
});

export default CustomAdvertises;
//
