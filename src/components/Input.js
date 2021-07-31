import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  background-color: #FFFFFF;
  border: 1px solid #707070;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  height: 61px;
  justify-content: center;
  margin-bottom: 16px;
  width: 358px;
`;

const Input = styled.TextInput`
  color: #000000;
  font-size: 18px;
  margin-left: 20px;
`;

export default ({ placeholder, value, onChangeText }) => {
  return (
    <InputArea>
      <Input
        style={ !value ? { fontStyle: 'italic' } : {} }
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextcolor="#A1A1A1"
        value={value}
      />
    </InputArea>
  );
};
