
import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: "#F4F4",
      flex: 1,
  
    
    },
    card: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      height: "80%",
      width: "95%",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginVertical: "1%"
    },
    heartImageStyle:{ alignSelf: "flex-end", marginStart: "5%", marginBottom: "3%" },
    rowDataStyle:{
      flexDirection: 'row',
      justifyContent: "center",
      margin: "2%"
    },
    columnStyle:{
      flexDirection: 'column',

    },
    textFontStyle:{fontFamily:"Tajawal-Bold"},
    row2DataStyle:{
      flexDirection: 'row',
      justifyContent:"flex-end"
    },
    row3DataStyle:{
      flexDirection: 'row',
      justifyContent:"flex-end",
    },
    priceTextStyle:{fontFamily:"Tajawal-Bold", fontSize:18, color:"#00BE66"},
 
  
  });
  export default Styles