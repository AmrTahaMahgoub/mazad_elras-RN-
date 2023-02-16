
import { TextInput, View, Text, StyleSheet } from 'react-native';

const CustomInputText = (props) => {

  return (
    <View style={styles.mainViewStyle}>
      <Text style={styles.titleStyle}>
        {props.name}
      </Text>
      <View
        style={styles.textInputViewStyle}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="اكتب هنا.."

      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainViewStyle:
    { backgroundColor: "#FFFFFF", width: "95%", borderRadius: 20, marginTop: "5%" },
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
export default CustomInputText

