
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList } from 'react-native-gesture-handler';


const Tab = createMaterialTopTabNavigator();

const All = () => {
  const DATA = [
    {
      date: "اليوم-05:32صباحا",
      title: 'سيارة رانج روفر موديل 2010',
      address: "المدينه المنورة سوق السيارات",
      name: 'رجب مبروك',
      image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
        source={require("../assets/car.jpg")}></Image>
      ,
      price: "70.000 ر.س",
      id: 1
    },
    {
      date: "اليوم-05:32صباحا",
      title: 'موبايل ايفون 11 بروماكس 265',
      address: "الرياض شارع عبد العزيز",
      name: 'فاطمه عبدالله',
      image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
        source={require("../assets/mobile.jpg")}></Image>,
      price: "4.599 ر.س",

      id: 2
    },
    {
      date: "اليوم-05:32صباحا",
      title: 'شقه مطله على حديقه الفوطه',
      address: "الطاثف سوق الجمال",
      name: 'عبدالله بن محمد',
      image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
        source={require("../assets/camel.png")}></Image>,
      price: "4.599 ر.س",
      id: 3
    },
    {
      date: "اليوم-05:32صباحا",
      title: 'موبايل ايفون 11 بروماكس 265',
      address: "المدينه المنورة سوق السيارات",
      name: 'عمرو بن محجوب',
      image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
        source={require("../assets/car.jpg")}></Image>,
      price: "4.599 ر.س",
      id: 4
    },
    {
      date: "اليوم-05:32صباحا",
      title: 'ناقه صفراء للبيع ونتاج وفير',
      address: "المدينه المنورة سوق السيارات",
      name: 'اسماء بنت على',
      image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
        source={require("../assets/camel.png")}></Image>,
      price: "4.599 ر.س",
      id: 5

    },
    {
      date: "اليوم-05:32صباحا",
      title: 'ناقه صفراء للبيع ونتاج وفير',
      address: "المدينه المنورة سوق السيارات",
      name: 'اسماء بنت على',
      image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
        source={require("../assets/camel.png")}></Image>,
      price: "4.599 ر.س",
      id: 6

    },
  ];
  const Item = ({ title, name, address, image, price, date }) => (

    <View style={styles.card}>

      <Image style={{ alignSelf: "flex-end", marginStart: "5%", marginBottom: "3%" }}
        source={require("../assets/heart.png")}></Image>
      <View style={{
        flexDirection: 'row',
        justifyContent: "center",

        margin: "2%"
      }}>
        <View style={{
          flexDirection: 'column',
        


        }}>
          <Text  >{date} </Text>
          <Text style={{fontFamily:"Tajawal-Bold"}}>{title} </Text>
          <View style={{
            flexDirection: 'row',
            justifyContent:"flex-end"


          }}>
            <Text >{address}</Text>
               <Image source={require("../assets/flagicon.png")}></Image>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent:"flex-end",



          }}>
            <Text >{name}</Text>
               <Image source={require("../assets/maleicon.jpg")}></Image>
          </View>
        
          <Text style={{fontFamily:"Tajawal-Bold", fontSize:18, color:"#00BE66"}} >{price}</Text>
        </View>
        {image}
      </View>
    </View>

  );
  return (


    <FlatList

      data={DATA}

      renderItem={({ item }) => <Item title={item.title} name={item.name} address={item.address} image={item.image} price={item.price} date={item.date}></Item>}

      keyExtractor={item => item.id}>


    </FlatList>


  );
};

const Cars = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StatutScreen</Text>
    </View>
  );
};

const Animals = () => {
  return (

    <View style={styles.container}>

      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};
const Building = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};
const Electronics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};
const Foods = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CallScreen</Text>
    </View>
  );
};
export default function TopTaps() {
  return (
    <Tab.Navigator 
    initialRouteName="الكل"
    screenOptions={{
      
      tabBarIndicatorStyle: { backgroundColor: "#fff", height: 7, borderTopEndRadius: 20, borderTopStartRadius: 20 },

      tabBarStyle: {
        backgroundColor: '#6A7Aff',
        //borderRadius:10
      },
      tabBarLabelStyle: { fontSize: 9, fontWeight: "bold", alignSelf: "auto", color: "#FFFFFF" ,fontFamily:"Tajawal-Light"},
      animationEnabled: true,

    }}>
      <Tab.Screen name="اعلاف" component={Foods} />
      <Tab.Screen name="حيوانات" component={Cars} />
      <Tab.Screen name="الكترونات" component={Animals} />
      <Tab.Screen name="عقارات" component={Building} />
      <Tab.Screen name="سيارات" component={Electronics} />
      <Tab.Screen name="الكل" component={All} />
    </Tab.Navigator>
  );
}

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

