import React, {Component} from 'react';
import {withNavigation} from 'react-navigation';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class DrawerScreen extends Component {
  static navigationOptions = {
    title: 'DrawerScreen',
  };

  navigateToScreen = route => {
    this.props.navigation.navigate(route);

    this.props.navigation.closeDrawer();
  };

  render() {
    return (
      <SafeAreaView style={styles.navBackground}>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('About')}
          style={styles.titleContainerOne}>
          <Text style={styles.title}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('Contact')}
          style={styles.titleContainer}>
          <Text style={styles.title}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('Terms')}
          style={styles.titleContainer}>
          <Text style={styles.title}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.navigateToScreen('Privacy')}
          style={styles.titleContainer}>
          <Text style={styles.title}>Privacy Policy</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default withNavigation(DrawerScreen);
