import React from 'react';
import { Image } from 'react-native';
import { Container, InputArea } from './styles';

import logo from '../../assets/logo.png'

export default () => {
  return (
    <Container>
      <Image source={logo} style={{ width: 285, height: 128 }} />

      <InputArea>
        <SignInput />
      </InputArea>
    </Container>
  );
};
