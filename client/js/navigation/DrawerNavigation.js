import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

import BottomTabNav from './NavigationLayout';
import DrawerScreen from './DrawerScreen';

export default createDrawerNavigator(
  {
    Home: BottomTabNav,
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
  },
);
