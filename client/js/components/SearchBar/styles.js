import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'rgb(227,227,227)',
    borderRadius: 9,
    width: 245,
    height: 24,
    justifyContent: 'space-between',
  },
  textField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  searchBarContainer: {
    paddingTop: 100,
    ...THEME.formatting.centeredChildren,
  },
  icon: {
    width: 16,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 4,
    marginVertical: 2,
  },
  textInput: {fontSize: THEME.typography.baseSize, width: '60%'},
});

export default styles;
