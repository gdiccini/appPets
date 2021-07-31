import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RegisterPet from '../screens/RegisterPet';
import Vaccine from '../screens/Vaccine';
import Medicine from '../screens/Medicine';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Medicine"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="RegisterPet" component={RegisterPet} />
    <Stack.Screen name="Vaccine" component={Vaccine} />
    <Stack.Screen name="Medicine" component={Medicine} />
  </Stack.Navigator>
);
