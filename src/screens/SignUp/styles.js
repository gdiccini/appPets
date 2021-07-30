import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #5E2C89;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
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

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
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
