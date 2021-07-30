import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 10px;
  height: 44px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  padding-left: 15px;
  width: 100%;
`;

const Input = styled.TextInput`
  color: #000000;
  flex: 1;
  font-size: 18px;
`;

export default () => {
  return (
    <InputArea>
      <Input />
    </InputArea>
  );
}
