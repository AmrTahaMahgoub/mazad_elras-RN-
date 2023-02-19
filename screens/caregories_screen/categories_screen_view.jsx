import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

function CategoriesScreen() {
  const DATA = [
    {
      title: 'معدات',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage1.png')}></Image>
      ),
      id: 1,
    },
    {
      title: 'فراخ',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage2.png')}></Image>
      ),
      id: 2,
    },
    {
      title: 'اليكترونيات',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage10.png')}></Image>
      ),
      id: 3,
    },
    {
      title: 'جمال',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage4.png')}></Image>
      ),
      id: 4,
    },
    {
      title: 'اعلاف',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage5.png')}></Image>
      ),
      id: 5,
    },
    {
      title: 'ماعز',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage6.png')}></Image>
      ),
      id: 6,
    },
    {
      title: 'سيارات',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage7.png')}></Image>
      ),
      id: 7,
    },
    {
      title: 'جمال',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage8.png')}></Image>
      ),
      id: 8,
    },
    {
      title: 'اليكترونيات',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage10.png')}></Image>
      ),
      id: 9,
    },
    {
      title: 'ادويه',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage9.png')}></Image>
      ),
      id: 10,
    },
    {
      title: 'اليكترونيات',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage10.png')}></Image>
      ),
      id: 11,
    },
    {
      title: 'ماعز',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage6.png')}></Image>
      ),
      id: 12,
    },
    {
      title: 'جمال',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage8.png')}></Image>
      ),
      id: 13,
    },
    {
      title: 'اليكترونيات',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage10.png')}></Image>
      ),
      id: 14,
    },
    {
      title: 'ادويه',
      image: (
        <Image
          style={{marginVertical: '10%'}}
          source={require('E:/projects/MazadElRAs/assets/secimage9.png')}></Image>
      ),
      id: 15,
    },
  ];
  const Item = ({title, image}) => (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        flex: 1,

        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: '8%',
        borderRadius: 16,

        // marginVertical:"5%",
        // height: "100%",
        // width: "10%",
        margin: '1%',
      }}>
      {image}
      <Text style={{fontFamily: 'Tajawal-Bold'}}> {title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item title={item.title} image={item.image}></Item>
        )}
        numColumns={3}
        //  contentContainerStyle={{flexGrow:1}}

        keyExtractor={item => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'column',
  //   backgroundColor: "#F4F4",
  //   flex: 1,

  //   // justifyContent: 'flex-start',
  //   //  alignItems: 'center',
  //   // height:"40%",
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    marginTop: '5%',
    paddingHorizontal: '1%',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '80%',
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: '1%',
  },
  image: {
    //"#F4F4"
    // flexDirection:"row",
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // alignContent:"flex-end"
  },
});
export default CategoriesScreen;
//style={{ alignSelf: "flex-end", marginStart: "3%", marginBottom: "3%" }}
