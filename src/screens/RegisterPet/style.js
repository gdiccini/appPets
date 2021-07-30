import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #5FC6AE;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100%;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 32px;
  font-weight: 700;
`;

export const SendPhoto = styled.TouchableOpacity`
  align-items: center;
  background-color: #5E2C89;
  border-radius: 20px;
  height: 32px;
  justify-content: center;
  margin: 10px 0;
  width: 145px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
`;

export const FieldName = styled.Text`
  color: #000;
  font-size: 18px
  font-style: italic;
  text-alig: left;
  width: 100%;
`;

export const RegisterButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #5E2C89;
  border-radius: 10px;
  color: #FFF;
  font-size: 24px;
  font-weight: 600;
  justify-content: center;
  height: 44px;
  margin-top: 15px
  width: 100%;
`;

export const Footer = styled.View`
  background-color: #5E2C89;
  bottom: 0;
  height: 17px;
  position: absolute;
  width: 100%;
`;