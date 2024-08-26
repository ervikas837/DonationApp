import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {FC, useState} from 'react';
import style from './style';
import CustomButton from '../../../components/Button/CustomButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScreenNavigationProp, ScreenRouteProp} from '../../../types';

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation<ScreenNavigationProp<'SignUp'>>();

  const onEnterEmail = (text: string) => setEmail(text);

  const onEnterPassword = (text: string) => setPassword(text);

  const onConfirmPassword = (text: string) => setConfirmPassword(text);

  function handleSignUp() {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'all fields are required');
      return;
    }

    if (password != confirmPassword) {
      Alert.alert('Error', 'password does not match');
      return;
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.heading}>SignUp</Text>
      <TextInput
        style={style.email}
        placeholder="Enter Email"
        onChangeText={onEnterEmail}
      />
      <TextInput
        style={style.password}
        placeholder="Enter Password"
        onChangeText={onEnterPassword}
      />
      <TextInput
        style={style.password}
        placeholder="Confirm Password"
        onChangeText={onConfirmPassword}
      />
      <CustomButton title="Sign Up" onPress={handleSignUp}></CustomButton>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={style.textLink}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
