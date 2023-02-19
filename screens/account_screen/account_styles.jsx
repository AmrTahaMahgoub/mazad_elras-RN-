import {StyleSheet, Dimensions} from 'react-native';

const AccountStyles = StyleSheet.create({
  mainTransparentColumn: {
    backgroundColor: 'transparent',
    position: 'absolute',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    right: '3%',
    left: '3%',
    top: '10%',

    flex: 1,
  },
  firstContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    height: '30%',
  },
  nameTextStyle: {
    alignSelf: 'center',
    marginTop: '14%',
    fontFamily: 'Tajawal-Bold',
  },
  modifyTextStyle: {
    alignSelf: 'center',
    marginBottom: '5%',
    fontFamily: 'Tajawal-Regular',
    color: '#76A7FF',
    fontSize: 12,
    fontWeight: '400',
  },
  dividerStyle: {borderBottomColor: '#F4F4F4', borderBottomWidth: 1},
  rowNumersStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
  },
  columnNumersStyle: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },

  rowPayStyle: {
    margin: '3%',
    padding: '4%',

    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  roundedRedNumberStyle: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    backgroundColor: '#FF4967',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinRoundedStyle: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Tajawal-Bold',
  },
});
export default AccountStyles;
