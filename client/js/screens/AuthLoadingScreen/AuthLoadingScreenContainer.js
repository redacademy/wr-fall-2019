import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreenContainer extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
        <Text>loading...</Text>
      </View>
    );
  }
}