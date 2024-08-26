import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../src/assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingHorizontal: 8,
  },
  textContainer: {
    padding: 12,
  },
  text: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  seperator: {
    height: 2,
    width: '100%',
    backgroundColor: '#cccccc',
    marginVertical: 10,
  },
});

export default style;
