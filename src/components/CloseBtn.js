import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  position: absolute;
  top: 59px;
  left: 25px;
`;

const Text = styled.TouchableOpacity`
  font-size: 37px;
  font-weight: 700;
`;

export default () => {
  return (
    <Container>
      <Text>X</Text>
    </Container>
  )
}