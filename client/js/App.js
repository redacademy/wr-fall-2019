import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Login from './screens/Login';
import RootStackNavigator from './navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return <RootStackNavigator />;
  }
}
