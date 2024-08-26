import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import style from './style';
import CustomButton from '../../../components/Button/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../types';
import {useDispatch, useSelector} from 'react-redux';
import {logIn} from '../../../redux/reducers/User';
import {RootState} from '../../../redux/store';

const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<ScreenNavigationProp<'SignUp'>>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  function onEnterEmail(text: string) {
    setEmail(text);
  }

  function onEnterPassword(text: string) {
    setPassword(text);
  }

  function handleSignIn() {
    dispatch(logIn({firstName: 'Jacky', lastName: 'Sharma', userId: 2}));
  }

  return (
    <View style={style.container}>
      <Text style={style.heading}>SignIn</Text>
      <TextInput
        style={style.email}
        placeholder="Enter Email"
        value={email}
        onChangeText={onEnterEmail}
      />
      <TextInput
        style={style.password}
        placeholder="Enter Password"
        value={password}
        onChangeText={onEnterPassword}
      />
      <CustomButton title="Sign In" onPress={handleSignIn}></CustomButton>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={style.textLink}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
