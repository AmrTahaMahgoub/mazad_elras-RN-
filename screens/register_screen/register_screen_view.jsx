import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomInputText from '../general_components/customtextinput.jsx';
import CustomTextButton from '../general_components/customtextbtton.jsx';
import Styles from './register_styles.jsx';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={Styles.containerStyle}>
      <CustomInputText name={'الاسم'} title={'اكتب هنا...'}></CustomInputText>
      <CustomInputText
        name={'رقم الهاتف'}
        title={'اكتب هنا...'}></CustomInputText>
      <CustomInputText
        name={'البريد الالكترونى'}
        title={'اكتب هنا...'}></CustomInputText>
      <CustomInputText
        name={' كلمه السر'}
        title={'اكتب هنا...'}></CustomInputText>

      <View style={Styles.customTextinputStyle}>
        <CustomTextButton
          title={'تسجيل دخول'}
          onPress={() => {
            navigation.navigate('Login_Screen');
          }}></CustomTextButton>
      </View>
    </View>
  );
};

export default RegisterScreen;
