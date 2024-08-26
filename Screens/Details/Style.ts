import {StyleSheet, Dimensions} from 'react-native';
import {getFontFamily} from '../../src/assets/fonts/helper';

const screenHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight * 0.5,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 24,
  },
  location: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 18,
  },
  description: {
    fontFamily: getFontFamily('Inter', '500'),
    marginVertical: 16,
    fontSize: 18,
  },
  buttonTextStyle: {
    color: 'black',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 18,
  },
});

export default style;
