import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

function CategoriesScreen() {
  const DATA = [
    {
      title: 'معدات',
   
      image:require('./../../assets/secimage1.png'),
      id: 1,
    },
    {
      title: 'فراخ',
      image: require('./../../assets/secimage2.png'),
      id: 2,
    },
    {
      title: 'اليكترونيات',
      image: require('./../../assets/secimage10.png'),
      id: 3,
    },
    {
      title: 'جمال',
      image:require('./../../assets/secimage4.png'),
      id: 4,
    },
    {
      title: 'اعلاف',
      image: 
        require('./../../assets/secimage5.png'),
      id: 5,
    },
    {
      title: 'ماعز',
      image: require('./../../assets/secimage6.png'),
      id: 6,
    },
    {
      title: 'سيارات',
      image: require('./../../assets/secimage7.png'),
      id: 7,
    },
    {
      title: 'جمال',
      image: require('./../../assets/secimage8.png'),
      id: 8,
    },
    {
      title: 'اليكترونيات',
      image:require('./../../assets/secimage10.png'),
      id: 9,
    },
    {
      title: 'ادويه',
      image: require('./../../assets/secimage9.png'),
      id: 10,
    },
    {
      title: 'اليكترونيات',
      image: require('./../../assets/secimage10.png'),
      id: 11,
    },
    {
      title: 'ماعز',
      image: require('./../../assets/secimage6.png'),
      id: 12,
    },
    {
      title: 'جمال',
      image: require('./../../assets/secimage8.png'),
      id: 13,
    },
    {
      title: 'اليكترونيات',
      image: require('./../../assets/secimage10.png'),
      id: 14,
    },
    {
      title: 'ادويه',
      image: require('./../../assets/secimage9.png'),
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
        margin: '1%',
      }}>
       <Image
           style={{marginVertical: '10%'}}
          source={image}></Image>
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
    

        keyExtractor={item => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({

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

  },
});
export default CategoriesScreen;

