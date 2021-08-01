import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RegisterPet from '../screens/RegisterPet';
import AddVaccine from '../screens/AddVaccine';
import AddMedicine from '../screens/AddMedicine';
import AddReminder from '../screens/AddReminder';
import Profile from '../screens/Profile';

import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="MainTab"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="RegisterPet" component={RegisterPet} />
    <Stack.Screen name="AddVaccine" component={AddVaccine} />
    <Stack.Screen name="AddMedicine" component={AddMedicine} />
    <Stack.Screen name="AddReminder" component={AddReminder} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
