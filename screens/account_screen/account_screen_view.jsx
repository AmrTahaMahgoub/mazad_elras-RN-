import React, {useState} from 'react';
import {View, Image, Text, StyleSheet,Pressable ,ScrollView} from 'react-native';

import CustomPickerButton from '../general_components/custom_picker.jsx';
import AccountStyles from './account_styles.jsx';
import CustomAdvertises from "./account_widgets/custom_advertises.jsx"

function AccountScreen({navigation}) {
  const [country, setCountry] = useState('Unknown');
  return (
  
     <ScrollView> <View style={{flex: 1}}>
        <View style={{backgroundColor: '#F4F4F4', flex: 1}}>
          <View style={{backgroundColor: '#4982FF', height: '20%'}}></View>
        
        <View style={AccountStyles.mainTransparentColumn}>
            <View style={AccountStyles.firstContainerStyle}>
              <Text style={AccountStyles.nameTextStyle}>عبدالرحمن بن محمد</Text>
              <Pressable
          onPress={() => {
            navigation.navigate("ModificationScreen")
          }}>
          <Text style={AccountStyles.modifyTextStyle}>تعديل</Text>
        </Pressable>
              
              <View style={AccountStyles.dividerStyle} />
              <View style={AccountStyles.rowNumersStyle}>
                <CustomAdvertises
                  number={'3'}
                  advers={' اعلانات متوقفه'}
                  color={'#FFAE44'}
                  numberFontSize={18}></CustomAdvertises>
                <CustomAdvertises
                  number={'5'}
                  advers={' اعلانات نشطه'}
                  color={'#44CF8F'}
                  numberFontSize={24}></CustomAdvertises>
                <CustomAdvertises
                  number={'2'}
                  advers={'اعلانات منتهيه'}
                  color={'#FF4F6C'}
                  numberFontSize={18}></CustomAdvertises>
              </View>
            </View>

            <View style={AccountStyles.rowPayStyle}>
              <View style={AccountStyles.roundedRedNumberStyle}>
                <Text style={AccountStyles.textinRoundedStyle}>2</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '5%'}}>
                  دفع المستحقات{' '}
                </Text>
                <Image
                  source={require('./../../assets/moneyicon.png')}></Image>
                 
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                width: '100%',
                flexDirection: 'column',
                
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                 
                  padding: '3%',
                }}>
                <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '6%'}}>
                  من نحن
                </Text>
                <Image
                  source={require('./../../assets/roundedexcelemationicon.png')}></Image>
              </View>
              <View
                style={{borderBottomColor: '#F4F4F4', borderBottomWidth: 1}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '3%',
                }}>
                <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '6%'}}>
                  {' '}
                  سياسه الخصوصيه
                </Text>
                <Image
                  source={require('./../../assets/lockicon.png')}></Image>
              </View>
              <View
                style={{borderBottomColor: '#F4F4F4', borderBottomWidth: 1}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '3%',
                }}>
                <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '6%'}}>
                  {' '}
                  الشروط والاحكام
                </Text>
                <Image
                  source={require('./../../assets/donephoneicon.png')}></Image>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                width: '100%',
                flexDirection: 'column',
                
                justifyContent: 'space-evenly',
                margin: '3%',
              }}>
              <View
                style={{
              
                  paddingHorizontal: '3%',

                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-between',

                  width: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                }}>
                <CustomPickerButton
                  label={'اللغه'}
                  value={'اللغه'}
                  label1={'العربيه'}
                  value1={'العربيه'}
                  label2={'الانجليزيه'}
                  value2={'الانجليزيه'}></CustomPickerButton>

                <View
                  style={{
                    flexDirection: 'row',
                    alignContent: 'flex-end',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{fontFamily: 'Tajawal-Bold', paddingRight: '5%'}}>
                    {' '}
                    اللغه{' '}
                  </Text>
                  <Image
                    source={require('./../../assets/moneyicon.png')}></Image>
                </View>
              </View>
              <View
                style={{borderBottomColor: '#F4F4F4', borderBottomWidth: 1}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '3%',
                }}>
                <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '6%'}}>
                  {' '}
                  تواصل معنا
                </Text>
                <Image
                  source={require('./../../assets/boldphoneicon.png')}></Image>
              </View>
              <View
                style={{borderBottomColor: '#F4F4F4', borderBottomWidth: 1}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '3%',
                }}>
                <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '6%'}}>
                  {' '}
                  مساعده
                </Text>
                <Image
                  source={require('./../../assets/roundedquestionicon.png')}></Image>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignContent: 'flex-end',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                backgroundColor: '#FFFFFF',
                width: '100%',
                padding: '4%',
                borderRadius: 12,
              }}>
              <Text style={{fontFamily: 'Tajawal-Bold', paddingRight: '5%'}}>
                {' '}
                تسجيل خروج{' '}
              </Text>
              <Image
                source={require('./../../assets/redarrowbackicon.png')}></Image>
            </View>
          </View>
         
       
          <View
            style={{
              position: 'absolute',

              right: '20%',
              left: '20%',
              top: '3%',
              //  bottom:"40%",
            }}>
            <View style={{translateY: -43, alignSelf: 'center'}}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 86,
                  width: 86,
                  borderWidth: 2,
                  borderRadius: 75,
                }}
                source={require('./../../assets/saudiperson.jpg')}></Image>
            </View>
          </View>
        </View>
      </View></ScrollView>
    
  );
}
const styles = StyleSheet.create({
  mainViewStyle: {backgroundColor: '#FFFFFF', borderRadius: 20},
  titleStyle: {alignSelf: 'center', fontFamily: 'Tajawal-Bold'},
  textInputViewStyle: {
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
  },
  textInputStyle: {
    alignSelf: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
    textAlign: 'right',
    fontSize: 15,
  },
});
export default AccountScreen;
