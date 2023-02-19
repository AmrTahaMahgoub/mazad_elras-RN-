import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const CustomPickerButton = props => {
  const [categoty, setcategoty] = useState('Unknown');
  return (
    <Picker
      selectedValue={categoty}
      onValueChange={(value, index) => setcategoty(value)}
      mode="dropdown"
      style={{
        width: '33%',
      }}>
      <Picker.Item
        style={{fontSize: 16, fontFamily: 'Tajawal-ExtraBold'}}
        label={props.label}
        value={props.value}
      />
      <Picker.Item label={props.label1} value={props.value1} />
      <Picker.Item label={props.label2} value={props.label2} />
    </Picker>
  );
};
export default CustomPickerButton;
