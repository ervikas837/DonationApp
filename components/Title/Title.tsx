import {View, Text} from 'react-native';
import React, {FC} from 'react';
import style from './style';

type TitleProps = {
  heading: string;
};

const Title: FC<TitleProps> = ({heading}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{heading}</Text>
    </View>
  );
};

// Title.propTypes = {
//   heading: PropTypes.string.isRequired,
// };

export default Title;
