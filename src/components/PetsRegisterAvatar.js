import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 168px;
  margin-top: 10px;
  width: 168px;
`;

const Image = styled.Image`
  width: 168px;
  height: 168px;
`;

export default ({ imageSource }) => {
  return (
    <Container>
      <Image source={imageSource} />
    </Container>
  );
};
