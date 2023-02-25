import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const AdvsAddedSuccess = () => {
  return (
    <View
      style={{
        backgroundColor: '#557FFF',
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('./../../assets/okicon.png')}></Image>
        <Text
          style={{
            fontFamily: 'Tajawal-ExtraBold',
            fontSize: 35,
            color: '#FFFFFF',
            textAlign: 'center',
            margin: '3%',
          }}>
          تم اضافه {'\n'}الاعلان بنجاح
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
        
        }}>
        <Pressable
          style={{borderRadius: 22, margin: '2%'}}
          backgroundColor="#424242"
          onPress={() => {}}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginHorizontal: '10%',
              marginVertical: '2%',
            }}>
            <Text
              style={{
                fontFamily: 'Tajawal-Bold',
                color: '#FFFFFF',
                marginRight: '4%',
              }}>
              الرئيسيه
            </Text>
            <Icon name="home" size={18} color="#FDFEFF" />
          </View>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Text style={{fontFamily: 'Tajawal-Bold', color: '#FFFFFF'}}>
            مشاهده الاعلان
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default AdvsAddedSuccess;
