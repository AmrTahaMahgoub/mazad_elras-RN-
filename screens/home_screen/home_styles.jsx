import {StyleSheet} from 'react-native';
const HomeStyles = StyleSheet.create({
  headerBottomBorderStyle: {
    backgroundColor: '#6A7Aff',
    height: '20%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  hearderRowSearchStyle: {flexDirection: 'row', alignItems: 'center'},
  headerRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#86A7FF',
    marginVertical: '10%',
    marginLeft: '5%',
    borderRadius: 10,
    width: '75%',
  },
  imageStyle: {
    margin: 2,
    backgroundColor: '#9494EB',
    borderRadius: 5,
  },
  imageContainerStyle: {
    margin: '2%',
    backgroundColor: '#9494EB',
    borderRadius: 5,
    height: '12%',
    width: '12%',
  },
  tobTabPositionedStyles: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 90,
    paddingHorizontal: 10,
  },
});
export default HomeStyles;
