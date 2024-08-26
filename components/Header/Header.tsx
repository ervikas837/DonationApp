import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import Title from '../Title/Title';
import TouchableImage from '../TouchableImage/TouchableImage';
import style from './style';
import {useDispatch} from 'react-redux';
import {resetToInitialState} from '../../redux/reducers/User';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  name: string;
};

const Header: FC<HeaderProps> = ({name}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLogout = () => {
    dispatch(resetToInitialState());
  };

  return (
    <View style={style.container}>
      <Title heading={`Hello ${name}`} />
      <View style={style.profileContainer}>
        <TouchableImage image="account_circle" />
        <Pressable onPress={handleLogout}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
