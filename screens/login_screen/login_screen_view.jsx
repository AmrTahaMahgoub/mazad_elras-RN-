
import {  View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInputText from '../general_components/customtextinput';
import CustomTextButton from '../general_components/customtextbtton';
import Styles from './login_styles';
function LoginScreen({ navigation }) {
    return (
        <View>
            <View style={Styles.container}>
                <View style={Styles.headerHightStyle}>
                    <View style={
                        Styles.headerRowStyle
                    }>
                        <Text style={Styles.textHeaderStyle1}> دخول تسجيل </Text>
                        <Text style={Styles.textHeaderStyle2}> رجوع</Text>
                        <Icon name="chevron-right" size={15} color="#FDFEFF" />
                    </View>
                    <View style={Styles.imagesStyle}>
                        <Image style={{ margin: "3%" }} source={require("E:/projects/MazadElRAs/assets/mazadelras.png")}></Image>


                         <Image
                            source={require("E:/projects/MazadElRAs/assets/hammer2.png")}></Image> 
                    </View>
                </View>
            </View>

            <View style={Styles.columnTextInputStyle}>

                <CustomInputText name={"البريد الالكترونى"} title={"اكتب هنا..."}></CustomInputText>
                <CustomInputText name={"الرقم السرى"} title={"اكتب هنا..."}></CustomInputText>
                <Text
                    style={Styles.forgotPasswordTextStyle}>
                    نسيت الرقم السرى؟
                </Text>
            </View>
            <View style={Styles.loginButtonStyle}>

                <CustomTextButton title={"تسجيل دخول"} onPress={() => {

                    navigation.navigate("bottom_tabs");
                }}></CustomTextButton>

                <Text
                    style={Styles.dontHaveAccountStyle}>

                    ليس لديك حساب ؟
                </Text>

                <Pressable style={Styles.pressableTextStyle} onPress={() => { navigation.navigate("RegisterScreen"); }}>

                    <Text style={Styles.loginButtonStyle}> سجل حساب جديد الان
                    </Text>
                </Pressable>

            </View>

        </View>


    );
}

export default LoginScreen;

