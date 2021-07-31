import React from 'react';
import styled from 'styled-components/native';

const ButtonArea = styled.View`
  bottom: 50px;
  height: 58px;
  position: absolute;
  width: 392px;
`;

const Button = styled.TouchableOpacity`
  background-color: #5FC6AE;
  border-radius: 20px;
  box-shadow: 0px 3px 6px #00000029;
  font-size: 32px;
  justify-content: center;
  height: 58px;
  text-align: center;
  width: 392px;
`;

export default () => {
  return (
    <ButtonArea>
      <Button>Salvar</Button>
    </ButtonArea>
  )
}