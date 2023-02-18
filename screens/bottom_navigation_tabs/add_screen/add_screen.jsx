/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Image, TextInput,StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
// import DropDownPicker from 'react-native-dropdown-picker';
import CustomInputText from './general_components/customtextinput';
import CustomTextButton from './general_components/customtextbtton';

function AddScreen() {
  const [categoty, setCountry] = useState('Unknown');


  return (

<ScrollView>
<View style={{
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: "space-evenly",
    backgroundColor: "#F4F4F4",
    margin: "2%", 
    flex:1
  }}>
    <View style={{
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: "space-between",
      backgroundColor: "#FFFFFF",
      width: "100%",
      paddingHorizontal: "5%",
      borderRadius: 15,
      margin: "2%"

    }}>
      <Picker
        selectedValue={categoty}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown"
        style={{

          width: "33%",

        }}
      >
        <Picker.Item style={{ fontSize: 16, fontFamily: "Tajawal-ExtraBold", }} label="سيارات" value="سيارات" />
        <Picker.Item label="جمال" value="جمال" />
        <Picker.Item label="ادويه" value="ادويه" />

      </Picker>
      <Text style={{fontFamily: "Tajawal-Bold"}}>القسم</Text>
    </View>
    <View style={{
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: "space-between",
      backgroundColor: "#FFFFFF",
      width: "100%",
      paddingHorizontal: "5%",
      borderRadius: 15,
      margin: "2%"

    }}>
      <Picker

        selectedValue={categoty}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown"


        style={{

          width: "33%",

        }}
      >
        <Picker.Item style={{ fontSize: 16, fontFamily: "Tajawal-ExtraBold", }} label="كيا" value="كيا" />
        <Picker.Item label="سيتروين" value="سيتروين" />
        <Picker.Item label="هيونداى" value="هيونداى" />

      </Picker>
      <Text style={{fontFamily: "Tajawal-Bold"}}>القسم الفرعى </Text>
    </View>

<ScrollView horizontal={true}
   showsHorizontalScrollIndicator={false}
   style={{height:220}}
  >
  <View
    style={{  flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: "space-between",
    width:500,
  //  height:300 
    
    }}>

<Image style={{ margin: "1%" }} source={require("../assets/car.jpg")}></Image>
<Image style={{ margin: "1%" }} source={require("../assets/car.jpg")}></Image>
<Image style={{ margin: "1%" }} source={require("../assets/car.jpg")}></Image>
<Image style={{ margin: "1%" }} source={require("../assets/car.jpg")}></Image>
<Image style={{ margin: "1%" }} source={require("../assets/car.jpg")}></Image>
    </View>
  </ScrollView>
<Text style={{alignSelf:"flex-end"}}>اضف صورة للاعلان بحد اقصي عشر صور</Text>
<CustomInputText name={"اسم المنتج"} title={" سيارة كيا موديل..."}></CustomInputText>
<CustomInputText name={"السعر"} title={"اكتب السعر هنا..."}></CustomInputText>
<View style={styles.mainViewStyle}>
      <Text style={styles.titleStyle}>
      تفاصيل الاعلان
      </Text>
      <View
        style={styles.textInputViewStyle}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="اكتب هنا تفاصيل الطلب"

      />
    </View>
    <CustomInputText name={"مكان الاستلام"} title={"اكتب العنونان بالتفصيل..."}></CustomInputText>
   <View style={{marginVertical:"2%"}}>
   <CustomTextButton title={"+ اضف الاعلان"}></CustomTextButton>
   </View>



  </View>
</ScrollView>

  );
}
const styles = StyleSheet.create({
  mainViewStyle:
    { backgroundColor: "#FFFFFF", width: "95%", borderRadius: 20, marginTop: "5%" ,height:"25%"},
  titleStyle: { alignSelf: "flex-end", margin: "2%", fontFamily: "Tajawal-Bold" },
  textInputViewStyle: {
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,

  },
  textInputStyle: {
    alignSelf: "center",
    width: '100%',
    borderWidth: 1,
    borderColor: "transparent",
    textAlign: 'right',
    fontSize: 15,
  }

});
export default AddScreen;
