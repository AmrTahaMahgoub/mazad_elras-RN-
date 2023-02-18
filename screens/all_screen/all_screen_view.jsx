import React from "react";
import { FlatList } from 'react-native-gesture-handler';
import {  Text, View, Image,StyleSheet } from 'react-native';
import Styles from "E:/projects/MazadElRAs/screens/all_screen/all_styles.jsx";

const All = () => {
    const DATA = [
      {
        date: "اليوم-05:32صباحا",
        title: 'سيارة رانج روفر موديل 2010',
        address: "المدينه المنورة سوق السيارات",
        name: 'رجب مبروك',
       
       // image:"E:/projects/MazadElRAs/assets/camel.png",
         image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require("E:/projects/MazadElRAs/assets/car.jpg")}></Image>,
        
        price: "70.000 ر.س",
        id: 1
      },
      {
        date: "اليوم-05:32صباحا",
        title: 'موبايل ايفون 11 بروماكس 265',
        address: "الرياض شارع عبد العزيز",
        name: 'فاطمه عبدالله',
        image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require("E:/projects/MazadElRAs/assets/car.jpg")}></Image>,
      //  image:"E:/projects/MazadElRAs/assets/mobile.jpg",
        price: "4.599 ر.س",
  
        id: 2
      },
      {
        date: "اليوم-05:32صباحا",
        title: 'شقه مطله على حديقه الفوطه',
        address: "الطاثف سوق الجمال",
        name: 'عبدالله بن محمد',
        image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require("E:/projects/MazadElRAs/assets/mobile.jpg")}></Image>,
       // image:"E:/projects/MazadElRAs/assets/camel.png",
        price: "4.599 ر.س",
        id: 3
      },
      {
        date: "اليوم-05:32صباحا",
        title: 'موبايل ايفون 11 بروماكس 265',
        address: "المدينه المنورة سوق السيارات",
        name: 'عمرو بن محجوب',
      //  image:"E:/projects/MazadElRAs/assets/camel.png",
        image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require("E:/projects/MazadElRAs/assets/mobile.jpg")}></Image>,
        price: "4.599 ر.س",
        id: 4
      },
      {
        date: "اليوم-05:32صباحا",
        title: 'ناقه صفراء للبيع ونتاج وفير',
        address: "المدينه المنورة سوق السيارات",
        name: 'اسماء بنت على',
       // image:"E:/projects/MazadElRAs/assets/camel.png",
        image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require("E:/projects/MazadElRAs/assets/mobile.jpg")}></Image>,
        price: "4.599 ر.س",
        id: 5
  
      },
      {
        date: "اليوم-05:32صباحا",
        title: 'ناقه صفراء للبيع ونتاج وفير',
        address: "المدينه المنورة سوق السيارات",
        name: 'اسماء بنت على',
        image: <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require("E:/projects/MazadElRAs/assets/car.jpg")}></Image>,
       // image:"E:/projects/MazadElRAs/assets/camel.png",
        price: "4.599 ر.س",
        id: 6
  
      },
    ];
    const Item = ({ title, name, address, image, price, date }) => (
  
      <View style={Styles.card}>
  
        <Image style={Styles.heartImageStyle}
          source={require("E:/projects/MazadElRAs/assets/heart.png")}></Image>
        <View style={Styles.rowDataStyle}>
          <View style={Styles.columnStyle}>
            <Text  >{date} </Text>
            <Text style={Styles.textFontStyle}>{title} </Text>
            <View style={Styles.row2DataStyle}>
              <Text >{address}</Text>
                 <Image source={require("E:/projects/MazadElRAs/assets/flagicon.png")}></Image>
            </View>
            <View style={Styles.row3DataStyle}>
              <Text >{name}</Text>
                 <Image source={require("E:/projects/MazadElRAs/assets/maleicon.jpg")}></Image>
            </View>
          
            <Text style={Styles.priceTextStyle} >{price}</Text>
          </View>
    {image}
           {/* <Image style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
          source={require(image)}></Image>  */}
        
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
 
  export default All