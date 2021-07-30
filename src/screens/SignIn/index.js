import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles';

import SignInput from '../../components/SignInput'

import logo from '../../assets/logo.png'

export default () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignButton = () => {

  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }


  return (
    <Container>
      <Image source={logo} style={{ width: 285, height: 128, marginBottom: 40, }} />
      <InputArea>

        <SignInput
          onChangeText={ (text) => setEmail(text) }
          placeholder="E-mail"
          value={email}
          />
        <SignInput
          onChangeText={ (text) => setPassword(text) }
          password={true}
          placeholder="Senha"
          value={password}
        />

        <CustomButton onPress={handleSignButton}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>

      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda não tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
