import React from 'react';
import styled from 'styled-components/native';

import background from '../../assets/background.png';

export const Container = styled.SafeAreaView`
  background-image: url(${background});
  flex: 1;
  justify-content: center;
  align-items: center;
`;