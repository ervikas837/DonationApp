import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../src/assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfecf7',
  },
  heading: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: 24,
    color: 'black',
    marginBottom: 24,
  },
  email: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  password: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  textLink: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 12,
  },
});

export default style;
