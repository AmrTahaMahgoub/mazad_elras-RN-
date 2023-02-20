import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomInputText from '../general_components/customtextinput.jsx';
import CustomTextButton from '../general_components/customtextbtton.jsx';
import AddStyles from './add_styles.jsx';
import CustomPickerButton from '../general_components/custom_picker.jsx';
function AddScreen() {
  return (
    <ScrollView>
      <View style={AddStyles.mainContainerStyle}>
        <View style={AddStyles.rowCategoryandSemiCategotyStyle}>
          <CustomPickerButton
            label={'سيارات'}
            value={'سيارات'}
            label1={'جمال'}
            value1={'جمال'}
            label2={'ادويه'}
            value2={'ادويه'}></CustomPickerButton>
          <Text style={{fontFamily: 'Tajawal-Bold'}}>القسم</Text>
        </View>
        <View style={AddStyles.rowCategoryandSemiCategotyStyle}>
          <CustomPickerButton
            label={'سيارات'}
            value={'سيارات'}
            label1={'كيا'}
            value1={'كيا'}
            label2={'سيتروين'}
            value2={'سيتروين'}></CustomPickerButton>
          <Text style={{fontFamily: 'Tajawal-Bold'}}>القسم الفرعى </Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 220}}>
          <View style={AddStyles.scrollViewStyle}>
            <Image
              style={{margin: '1%'}}
              source={require('./../../assets/car.jpg')}></Image>
            <Image
              style={{margin: '1%'}}
              source={require('./../../assets/car.jpg')}></Image>
            <Image
              style={{margin: '1%'}}
              source={require('./../../assets/car.jpg')}></Image>
            <Image
              style={{margin: '1%'}}
              source={require('./../../assets/car.jpg')}></Image>
            <Image
              style={{margin: '1%'}}
              source={require('./../../assets/car.jpg')}></Image>
          </View>
        </ScrollView>
        <Text style={{alignSelf: 'flex-end'}}>
          اضف صورة للاعلان بحد اقصي عشر صور
        </Text>
        <CustomInputText
          name={'اسم المنتج'}
          title={' سيارة كيا موديل...'}></CustomInputText>
        <CustomInputText
          name={'السعر'}
          title={'اكتب السعر هنا...'}></CustomInputText>
        <View style={AddStyles.mainViewStyle}>
          <Text style={AddStyles.titleStyle}>تفاصيل الاعلان</Text>
          <View style={AddStyles.textInputViewStyle} />
          <TextInput
            style={AddStyles.textInputStyle}
            placeholder="اكتب هنا تفاصيل الطلب"
          />
        </View>
        <CustomInputText
          name={'مكان الاستلام'}
          title={'اكتب العنونان بالتفصيل...'}></CustomInputText>
        <View style={{marginVertical: '2%'}}>
          <CustomTextButton title={'+ اضف الاعلان'}></CustomTextButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default AddScreen;
