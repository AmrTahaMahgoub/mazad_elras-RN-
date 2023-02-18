import { StyleSheet ,View,Text} from "react-native";
import React from "react";
const Animals = () => {
    return (
  
      <View style={styles.container}>
  
        <Text style={styles.text}>CallScreen</Text>
      </View>
    );
  };


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: "#F4F4",
      flex: 1,
  
      // justifyContent: 'flex-start',
      //  alignItems: 'center',
      // height:"40%",
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
    image:
    {
      //"#F4F4"
      // flexDirection:"row",
      // justifyContent: 'flex-end',
      // alignItems: 'flex-end',
      // alignContent:"flex-end"
    }
  
  });
  export default Animals