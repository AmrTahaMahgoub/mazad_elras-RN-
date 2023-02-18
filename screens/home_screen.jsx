/* eslint-disable prettier/prettier */

import {View, Image, TextInput, Modal} from 'react-native';
import React from 'react';
import TopTaps from './top_tabs';

function HomeScreen() {
  return (
    <>
      <View
        style={{
          backgroundColor: '#6A7Aff',
          height: '20%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#86A7FF',
              marginVertical: '10%',
              marginLeft: '5%',
              borderRadius: 10,
              width: '75%',
            }}>
            <View >
              <View
                style={{
                  margin: 2,
                  backgroundColor: '#9494EB',
                  borderRadius: 5,
                }}>
                <Image
                  style={{margin: 8}}
                  source={require('../assets/search.png')}
                />
              </View>
            </View>

            <TextInput style={{}} placeholder="Search your issues " />
          </View>
          <View
            style={{margin: 8, backgroundColor: '#4079EB', borderRadius: 5}}>
            <Image
              style={{margin: 12}}
              source={require('../assets/list.png')}
            />
          </View>
        </View>
      </View >
 
 <View 
 style={{  
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   height: '100%',
  //   justifyContent: 'center',
  // },
  
    width: '100%',
    height: '100%',
   // alignItems: 'center',
   // justifyContent: 'center',
    position: 'absolute',
   // left: 10,
    top:90,
   // right:20
   paddingHorizontal:10

  
  // behind: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   position: 'absolute',
  //    left: 20,
  //    top:20,
  //   // width: '100%',
  //   // height: '100%'
  // }
  }}
 >
 <TopTaps 
   ></TopTaps>
 </View>


      <View />
    </>
  );
}
export default HomeScreen;
