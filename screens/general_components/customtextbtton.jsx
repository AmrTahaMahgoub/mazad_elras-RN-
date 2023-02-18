
import { StyleSheet, Text,  } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
const CustomTextButton=(props)=>{
    return(
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
      
        }}>
        <Text style={styles.buttontext}>{props.title}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        height: 40,
        backgroundColor: '#424242',
         width:370,
        borderColor: 'red',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttontext:{
        color: '#FFFFFF', fontFamily: "Tajawal-Bold" 
      }
});
export default CustomTextButton