import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {baseSize, headerFont},
} = THEME;

const styles = StyleSheet.create({
  button: {
    borderColor: black,
    borderWidth: 1,
    borderRadius: baseSpacing * 2,
    padding: baseSpacing,
    padding: baseSpacing,
    width: 375, //Width 100% does not work
    ...centeredChildren,
  },
  buttonText: {
    fontFamily: headerFont,
    fontSize: baseSize,
  },
});

export default styles;
