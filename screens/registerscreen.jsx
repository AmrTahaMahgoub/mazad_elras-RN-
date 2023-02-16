
import React from 'react';
import {StyleSheet ,View} from 'react-native';
import CustomTextButton from './general_elements/customtextbtton';
import CustomInputText from './general_elements/customtextinput';



const RegisterScreen=()=> {
  return( 
<View style={styles.containerStyle}>
  
<CustomInputText title={"الاسم"} ></CustomInputText>
<CustomInputText title={"رقم الهاتف"} ></CustomInputText>
<CustomInputText title={"البريد الالكترونى"}></CustomInputText>
<CustomInputText title={" كلمه السر"}></CustomInputText>

<View style={styles.customTextinputStyle}>
  <CustomTextButton></CustomTextButton>
</View>

</View>

  );
}
const styles = StyleSheet.create({
  containerStyle:{
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: "center",
  },
  customTextinputStyle:{marginTop:"60%"}

});
export default RegisterScreen;
