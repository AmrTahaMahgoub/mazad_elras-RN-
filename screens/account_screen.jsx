
import React, { useState } from 'react';
import {View,Dimensions,Image,Text,StyleSheet} from 'react-native';
import { Picker } from "@react-native-picker/picker";

function AccountScreen() {
  const [country, setCountry] = useState('Unknown');
  return (<><View style={{ flex:1}}>
    <View style={{ backgroundColor: '#F4F4F4', flex: 1 }}>
    <View style={{ backgroundColor: "#4982FF", height: "20%" }}>
 
 </View>
       <View  
         style={{
    backgroundColor:"transparent",
                      position: 'absolute',
                      flexDirection: 'column',
                      alignContent: 'center',
                      alignItems: 'center',
                       right:"3%",
                       left: "3%",
                       top: "10%",
                  // bottom:"2%",
                     flex:1
                

                    }}>
  <View style={{backgroundColor: "#FFFFFF",  borderRadius: 20,width:"100%",height:"30%"
 
                      }}>
      <Text style={{alignSelf:"center", marginTop:"14%",fontFamily:"Tajawal-Bold"}}>
       عبدالرحمن بن محمد
      </Text>
      <Text style={{alignSelf:"center",marginBottom:"5%",fontFamily:"Tajawal-Regular",color:"#76A7FF", fontSize:12,fontWeight:"400"}} >
       تعديل
      </Text>
      <View
        style={{  borderBottomColor: '#F4F4F4',
        borderBottomWidth: 1,
    }}
      />
     <View style={{ flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'baseline',
                    justifyContent:"space-evenly",
                  }}
     >
      <View style={{ flexDirection: 'column',
                      alignContent: 'center',
                      alignItems: 'center',}}><Text style={{fontFamily:"Tajawal-ExtraBold", fontSize:18,color:"#FFAE44"}}>3</Text>
                      <Text style={{fontFamily:"Tajawal-ExtraBold", fontSize:12}}>اعلانات متوقفه</Text></View>

      <View style={{ flexDirection: 'column',
                      alignContent: 'center',
                      alignItems: 'center',}}><Text style={{fontFamily:"Tajawal-ExtraBold", fontSize:24,color:"#44CF8F"}}>5</Text>
                      <Text style={{fontFamily:"Tajawal-ExtraBold", fontSize:12}}>اعلانات نشطه</Text></View>
      <View style={{ flexDirection: 'column',
                      alignContent: 'center',
                      alignItems: 'center',}}><Text style={{fontFamily:"Tajawal-ExtraBold", fontSize:18,color:"#FF4F6C"}}>2</Text>
                      <Text style={{fontFamily:"Tajawal-ExtraBold", fontSize:12}}>اعلانات منتهيه</Text></View>
     </View>
    </View>
    
                       <View style={{ 
                       margin:"3%",
                        padding:"4%",
                      
                        flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent:"space-between",
                      
                      width:"100%", backgroundColor:"#FFFFFF",borderRadius:20
                      }}>
                        <View style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.05,
                    height: Dimensions.get('window').width * 0.05,
                    backgroundColor: "#FF4967",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: "white", fontSize: 10, fontFamily: "Tajawal-Bold" }}>2</Text>
                  </View>
                     <View style={{ flexDirection: 'row',
                     alignContent: 'flex-end',
                     alignItems: 'center',
                    justifyContent:"flex-end",
                   
                 }}>
                     <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"5%" }}>دفع المستحقات </Text>
                        <Image
                source={require("../assets/moneyicon.png")}></Image>
                     </View>
                      </View>
                        <View style={{backgroundColor: "#FFFFFF",  borderRadius: 12,width:"100%",flexDirection: 'column',
                      // alignContent: 'center',
                      // alignItems: 'baseline',
                    justifyContent:"space-evenly",
 
}}>
  <View style={{ flexDirection: 'row',
                      alignContent: 'flex-end',
                      alignItems: 'center',
                    justifyContent:"flex-end",
                   // margin:"2%",
                    padding:"3%",
                  }}>
                       <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"6%" }}>من نحن</Text>
                        <Image
                source={require("../assets/roundedexcelemationicon.png")}></Image>
                  </View>
                  <View
        style={{  borderBottomColor: '#F4F4F4',
        borderBottomWidth: 1,
    }}
      />
                   <View style={{  flexDirection: 'row',
                      alignContent: 'flex-end',
                      alignItems: 'center',
                    justifyContent:"flex-end",
                    padding:"3%",
                  }}>
                       <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"6%" }}> سياسه الخصوصيه</Text>
                        <Image
                source={require("../assets/lockicon.png")}></Image>
                  </View>
                  <View
        style={{  borderBottomColor: '#F4F4F4',
        borderBottomWidth: 1,
    }}
      />
                   <View style={{  flexDirection: 'row',
                      alignContent: 'flex-end',
                      alignItems: 'center',
                    justifyContent:"flex-end",
                    padding:"3%",
                  }}>
                       <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"6%" }}> الشروط والاحكام</Text>
                        <Image
                source={require("../assets/donephoneicon.png")}></Image>
                  </View>
</View>
<View style={{backgroundColor: "#FFFFFF",  borderRadius: 12,width:"100%",flexDirection: 'column',
                      // alignContent: 'center',
                      // alignItems: 'baseline',
                    justifyContent:"space-evenly",
                    margin:"3%"
 
}}>
<View style={{ 
                      // margin:"3%",
                        paddingHorizontal:"3%",
                      
                        flexDirection: 'row',
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent:"space-between",
                      
                      width:"100%", backgroundColor:"#FFFFFF",borderRadius:20
                      }}>
                        {/* <View style={{
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.05,
                    height: Dimensions.get('window').width * 0.05,
                    backgroundColor: "#FF4967",
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{ color: "white", fontSize: 10, fontFamily: "Tajawal-Bold" }}>2</Text>
                  </View> */}
                     <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown"
        style={{

          width: "33%",
        //  backgroundColor:"grey",
         // height:5,

        }}
      >
        <Picker.Item style={{ fontSize: 10, fontFamily: "Tajawal-ExtraBold", }} label="اللغه" value="اللغه" />
        <Picker.Item label="العربيه" value="العربيه" />
        <Picker.Item label="الانجليزيه" value="الانجليزيه" />

      </Picker>
                     <View style={{ flexDirection: 'row',
                     alignContent: 'flex-end',
                     alignItems: 'center',
                    justifyContent:"flex-end",
                   
                 }}>
                     <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"5%" }}> اللغه </Text>
                        <Image
                source={require("../assets/moneyicon.png")}></Image>
                     </View>
                      </View>
                      <View
        style={{  borderBottomColor: '#F4F4F4',
        borderBottomWidth: 1,
    }}
      />
                   <View style={{  flexDirection: 'row',
                      alignContent: 'flex-end',
                      alignItems: 'center',
                    justifyContent:"flex-end",
                    padding:"3%",
                  }}>
                       <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"6%" }}> تواصل معنا</Text>
                        <Image
                source={require("../assets/boldphoneicon.png")}></Image>
                  </View>
                  <View
        style={{  borderBottomColor: '#F4F4F4',
        borderBottomWidth: 1,
    }}
      />
                   <View style={{  flexDirection: 'row',
                      alignContent: 'flex-end',
                      alignItems: 'center',
                    justifyContent:"flex-end",
                    padding:"3%",
                  }}>
                       <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"6%" }}>  مساعده</Text>
                        <Image
                source={require("../assets/roundedquestionicon.png")}></Image>
                  </View>
                  
</View>

                       

                   
                     <View style={{ flexDirection: 'row',
                     alignContent: 'flex-end',
                     alignItems: 'flex-end',
                    justifyContent:"flex-end",
                    backgroundColor:"#FFFFFF",
                    width:"100%",
                    padding:"4%",
                    borderRadius:12
                 }}>
                     <Text style={{   fontFamily: "Tajawal-Bold",paddingRight:"5%" }}> تسجيل خروج </Text>
                        <Image
                source={require("../assets/redarrowbackicon.png")}></Image>
                     </View>
                   
                            
                  
                      </View> 
                      <View
                       style={{
                         position: 'absolute',
                    
                          right:"20%",
                          left: "20%",
                          top: "3%",
                       //  bottom:"40%",
                     }}
                     > 
                      <View style={{  translateY: -43,
        alignSelf: 'center',}}>
                    <Image style={{  resizeMode: 'cover',
        height: 86,
        width: 86,
        borderWidth: 2,
        borderRadius: 75,}} source={require("../assets/saudiperson.jpg")}>
                    </Image>
                </View>
                     </View>
                               
    </View>
    
   
  </View>
  
 
</>
    )
}
const styles = StyleSheet.create({
  mainViewStyle:
    { backgroundColor: "#FFFFFF",  borderRadius: 20,  },
  titleStyle: { alignSelf: "center", fontFamily: "Tajawal-Bold" },
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
export default AccountScreen;
  // <View
  //  style={{
  //                // borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  //                 width: Dimensions.get('window').width * 0.9,
  //                 height: Dimensions.get('window').height * 0.28,
  //                 backgroundColor: "white",
  //                 justifyContent: 'center',
  //                 alignItems: 'center',
  //                 position: 'absolute',
  //                 left: 20,
  //               // top: 120,
  //               bottom:"60%",
  //               borderRadius:20,
  //               // start:20,
  //                //paddingHorizontal: 10
  //               }} >
                
  //                 <View
  //                   style={{
  //                     position: 'absolute',
  //                    // flexDirection: 'column',
  //                     alignContent: 'center',
  //                   //  alignItems: 'center',

  //                    // left: 10,
  //                   //  top: 5,
  //                     bottom:"70%"
  //               //  paddingHorizontal: 10

  //                   }}
  //                   >
  //                       <Image source={require("../assets/saudiperson.jpg")}>
                       

  //                 </Image>
                     
  //                    <View style={{ height: 1, backgroundColor: 'black'}} />
              
          
          
             
  //                   <View 
  //                   // style={{
  //                   //   borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  //                   //   width: Dimensions.get('window').width * 0.03,
  //                   //   height: Dimensions.get('window').width * 0.03,
  //                   //   backgroundColor: "red",
  //                   //   justifyContent: 'center',
  //                   //   alignItems: 'center'
  //                   // }}
  //                   >
  //                     {/* <Text style={{ color: "white", fontSize: 8, fontFamily: "Tajawal-Bold" }}>2</Text> */}
                      
  //                   </View>

  //                 </View>
  //               </View>
  /*************** */
  // <View Style={{  
  //   flexDirection: 'row',
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor:"yellow"}}>
  //      <Text>numbei 1</Text>
  //     <Text>numbei 1</Text>
  //     <Text>numbei 1</Text>
     
  //   </View>