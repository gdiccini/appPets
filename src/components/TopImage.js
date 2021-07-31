import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 146px;
  margin-bottom: 36px;
  width: 146px;
`;

const Image = styled.Image`
  width: 146px;
  height: 146px;
`;

export default ({ imageSource }) => {
  return (
    <Container>
      <Image source={imageSource} />
    </Container>
  );
};
