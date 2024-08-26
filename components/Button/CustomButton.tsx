import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import React, {FC} from 'react';
import style from './style';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[style.container, containerStyle]}
      onPress={onPress}>
      <Text style={[textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
