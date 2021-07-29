import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';

export default () => {

  const navigation = useNavigation();

  useEffect(() => {
    // const wait = async () => {
    //   await setTimeout(() => {
    //     console.log('bla');
    //   }, 2000);
    // }
    // wait();
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // validar token
      } else {
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, []);

  return (
    <Container>
      <Image source={logo} style={{ width: 285, height: 128 }} />
    </Container>
  );
};
