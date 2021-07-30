import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  Container,
  InputArea,
  SignUpText,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  Footer
} from './styles';

import SignInput from '../../components/SignInput';
import SignWith from '../../components/SignWith';

import logo from '../../assets/logo.png';
import fbIcon from '../../assets/fb.png';
import googleIcon from '../../assets/gmail.png';

export default () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignButton = () => {

  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }


  return (
    <Container>
      <Image source={logo} style={{ width: 285, height: 128 }} />
      <SignUpText>Cadastre-se para começar!</SignUpText>
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
        <SignInput
          onChangeText={ (text) => setConfirmPassword(text) }
          password={true}
          placeholder="Confirmar senha"
          value={confirmPassword}
        />

        <CustomButton onPress={handleSignButton}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>

      </InputArea>

      <SignUpText style={{ marginTop: 5, marginBottom: 8 }}>ou</SignUpText>

      <InputArea>
        <SignWith
          color="#4364AF"
          icon={fbIcon}
          text="Continue com Facebook"
        />
        <SignWith
          color="#4381F0"
          icon={googleIcon}
          text="Continue com Google"
        />
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Ainda não tem uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
      <Footer />
    </Container>
  );
};

