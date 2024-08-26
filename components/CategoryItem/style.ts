import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../src/assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 16,
  },
  text: {
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: 16,
    color: 'black',
  },
  selectedText: {
    color: 'blue',
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: 16,
  },
});

export default style;
