/* eslint-disable prettier/prettier */
import { StyleSheet, View, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomInputText from './general_elements/customtextinput';
import CustomTextButton from './general_elements/customtextbtton';


function LoginScreen({navigation }) {


  return (

   <View>
    <View style={{
          statusBar: {
            backgroundColor: "#4A82FF",

          },
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#4982FF',
        }}>
          <View style={{ height: '30%', }}>
            <View style={{

              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: "center"
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginLeft: "27%",
                fontFamily: "Tajawal-Bold",
              }}> تسجيل الدخول</Text>
              <Text style={{
                fontSize: 15,

                color: '#FFFFFF',
                marginLeft: "25%",
                fontFamily: 'Tajawal-Regular',
              }}> رجوع</Text>
              <Icon name="chevron-right" size={15} color="#FDFEFF" />
            </View>
            <View style={{

              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: "center",
              margin: "4%"

            }}>
              <Image style={{ margin: "3%" }} source={require("../assets/mazadelras.png")}></Image>

              <Image
                source={require("../assets/hammer2.png")}></Image>
            </View>
          </View>
        </View>

     <View style={{
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: "center",
          // marginTop: "15%"
        }}>
          {/* <View style={{ backgroundColor: "#FFFFFF", width: "95%", borderRadius: 20, marginTop: "15%" }}>
            <Text style={{ alignSelf: "flex-end", margin: "2%", fontFamily: "Tajawal-Bold" }}>
              البريد الالكترونى
            </Text>
            <View
              style={{
                borderBottomColor: '#F4F4F4',
                borderBottomWidth: 1,

              }}
            />
                 <TextInput
                style={{
                  alignSelf: "center",
                  width: '85%',
                  borderWidth: 1,
                  // underlineColorAndroid:"transparent",
                  borderColor: "transparent",
                  // backgroundColor:'#D3D3D3',
                  textAlign: 'right',
                  fontSize: 15,
                }}
                placeholder="اكتب هنا..."

              />
          </View> */}
           <CustomInputText name={"البريد الالكترونى"} title={"اكتب هنا..."}></CustomInputText>
          <CustomInputText name={"الرقم السرى"} title={"اكتب هنا..."}></CustomInputText>
          {/* <View style={{ backgroundColor: "#FFFFFF", width: "95%", borderRadius: 20, margin: "5%" }}>
            <Text style={{ alignSelf: "flex-end", margin: "2%", fontFamily: "Tajawal-Bold" }}>
              الرقم السرى    </Text>
            <View
              style={{
                borderBottomColor: '#F4F4F4',
                borderBottomWidth: 1,

              }}
            />
            
              <TextInput
                style={{
                  alignSelf: "center",
                  width: '85%',
                  borderWidth: 1,
                  // underlineColorAndroid:"transparent",
                  borderColor: "transparent",
                  // backgroundColor:'#D3D3D3',
                  textAlign: 'right',
                  fontSize: 15,
                }}
                placeholder="اكتب هنا..."

              />
           

          </View> */}
          
          <Text
            style={{
              color: '#4169E1',
              fontWeight: 'bold',
              textAlign: 'right',
             // paddingLeft: '10%',
              marginLeft: '65%',
              marginTop:"5%", 
              marginBottom:"18%"
            }}>
            نسيت الرقم السرى؟
          </Text>
        </View>
        <View style={styles.button}>
        {/* <TouchableOpacity
          style={{
            height: 40,
            backgroundColor: '#424242',
            // width:"100%",
            borderColor: 'red',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate("bottom_tabs");
          }}>
          <Text style={{ color: '#FFFFFF', fontFamily: "Tajawal-Bold" }}>تسجيل دخول</Text>
        </TouchableOpacity> */}
      <CustomTextButton tilte={"تسجيل دخول"}></CustomTextButton>
        <View style={{ paddingTop: '5%' }}>
          <Text
            style={{
              color: '#808080',
              fontWeight: 'bold',
              textAlign: 'center',
              paddingLeft: '10%',

            }}>
            {' '}
            ليس لديك حساب ؟
          </Text>
          <Text
            style={{
              color: '#4169E1',
              // fontWeight: 'bold',
              fontFamily: "Tajawal-Bold",
              textAlign: 'center',
              paddingLeft: '10%',
            }}>
            {' '}
            سجل حساب جديد الان
          </Text>
        </View>

        </View>
   </View>

  );
}
const styles = StyleSheet.create({
  button: {
    //marginVertical:"70%",
    paddingTop: '15%',

    // marginVertical: "30%",
    marginHorizontal: '5%',
  },
  buttonRaduis: {},
  body: {
    height: '30%',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 100,
    fontFamily: 'Tajawal-Light',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 80,
    fontFamily: 'Tajawal-Regular',
  },
  row1: {
    height: 120,
    flexDirection: 'row',

  },
  row2: {
    height: 50,
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center',

    marginRight: 120,
    marginLeft: 30,

  },
  columnbody: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#4169E1',
  },
  hummarImage: {
    height: 100,
    width: 100,

  },
  input1: {
    marginHorizontal: '10%',
    //paddingHorizontal:20,
    // marginBottom:100,
    marginTop: '12%',
    width: '80%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'left',
    fontSize: 20,
  },
  input2: {
    marginHorizontal: '10%',
    // marginBottom:100,
    marginTop: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'left',
    fontSize: 20,
  },
});
export default LoginScreen;

