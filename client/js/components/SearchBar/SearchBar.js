import React, {Component} from 'react';
import {View, Image, TextInput} from 'react-native';
import SearchIcon from '../../assets/headingelement/MagGlass@.png';
import styles from './styles';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Image style={styles.icon} source={SearchIcon} />
          <TextInput
            name="search"
            style={styles.textField}
            render={({input, meta}) => (
              <TextInput
                style={styles.textInput}
                id="search"
                type="text"
                inputProps={{
                  autoComplete: 'off',
                  ...input,
                }}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
