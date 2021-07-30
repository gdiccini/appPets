import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #5E2C89;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SignUpText = styled.Text`
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 600;
  justify-content: center;
  margin-top: 59px;
`;

export const InputArea = styled.View`
  padding: 10px 40px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #5FC6AE;
  border-radius: 10px;
  height: 44px;
  justify-content: center;
`;

export const CustomButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0px;
`;

export const CustomButtonFB = styled.TouchableOpacity`
  align-items: center;
  background-color: #4364AF;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 18px;
  height: 44px;
  justify-content: center;
  width: 100%;
`;

export const CustomButtonG = styled.TouchableOpacity`
  align-items: center;
  color: #FFFFFF;
  background-color: #4381F0;
  border-radius: 10px;
  font-size: 18px;
  height: 44px;
  justify-content: center;
  width: 100%;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

export const SignMessageButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
`;

export const SignMessageButtonTextBold = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-style: italic;
  margin-left: 5px;
`;

export const Footer = styled.View`
  background-color: #5FC6AE;
  bottom: 0;
  height: 17px;
  position: absolute;
  width: 100%;
`;