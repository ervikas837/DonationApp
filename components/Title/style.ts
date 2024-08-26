import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../src/assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default style;
``;
