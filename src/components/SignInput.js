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
  margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextcolor="#A1A1A1"
        secureTextEntry={password}
        value={value}
      />
    </InputArea>
  );
}
