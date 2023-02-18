
import React from 'react';
import {StyleSheet ,View} from 'react-native';




const RegisterScreen=({navigation})=> {
  return( 
<View style={styles.containerStyle}>
  
<CustomInputText name={"الاسم"}  title={"اكتب هنا..."}></CustomInputText>
<CustomInputText name={"رقم الهاتف"}  title={"اكتب هنا..."}></CustomInputText>
<CustomInputText name={"البريد الالكترونى"}  title={"اكتب هنا..."}></CustomInputText>
<CustomInputText name={" كلمه السر"}  title={"اكتب هنا..."}></CustomInputText>

<View style={styles.customTextinputStyle}>
  <CustomTextButton title={'تسجيل دخول'}></CustomTextButton>
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
