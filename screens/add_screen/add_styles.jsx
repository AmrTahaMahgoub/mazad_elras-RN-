
import { StyleSheet } from "react-native";
const AddStyles = StyleSheet.create({
  mainContainerStyle:{
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: "space-evenly",
    backgroundColor: "#F4F4F4",
    margin: "2%", 
    flex:1
  },
  rowCategoryandSemiCategotyStyle:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingHorizontal: "5%",
    borderRadius: 15,
    margin: "2%"

  },
  scrollViewStyle:{  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: "space-between",
  width:500,

  
  },

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
export default AddStyles