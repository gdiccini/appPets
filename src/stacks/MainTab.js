import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Offers from '../screens/Offers';
import MyPets from '../screens/MyPets';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="MyPets" component={MyPets} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}