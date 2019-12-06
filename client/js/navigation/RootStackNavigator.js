import {createAppContainer} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: DrawerNavigation,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
