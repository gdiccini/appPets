import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const ButtonArea = styled.View`
  align-items: center;
  border-radius: 10px;
  height: 44px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  font-size: 18px;
`;

export default ({icon}) => {
  return (
    <ButtonArea>
      <Button>
        <Image source={icon} style={{ width: 348, height: 44 }} />
      </Button>
    </ButtonArea>
  );
}