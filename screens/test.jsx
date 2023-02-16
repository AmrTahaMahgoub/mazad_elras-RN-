import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

function Dropdown() {
  const [country, setCountry] = useState('Unknown');

  return (
   
   
      <Picker

        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="اللغه" value="اللغه" />
        <Picker.Item label="العربيه" value="العربيه" />
        <Picker.Item label="الانجليزيه" value="الانجليزيه" />
       
      </Picker>
  
   
  );
}

export default Dropdown;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 24,
  },
  picker: {
    marginVertical: 5,
    width: 150,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});