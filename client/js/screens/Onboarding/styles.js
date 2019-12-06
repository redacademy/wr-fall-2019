import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, white, darkGrey},
  formatting: {baseSpacing, centeredChildren},
  typography: {headerFont, hugeText, baseSize, mainFont},
} = THEME;

const styles = StyleSheet.create({
  mainContent: {
    ...centeredChildren,
    flex: 1,
    backgroundColor: white,
  },
  image: {
    resizeMode: 'contain',
    width: 326,
    height: 309,
  },
  text: {
    fontFamily: mainFont,
    fontSize: baseSize,
    color: darkGrey,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: baseSpacing,
    lineHeight: 18,
    letterSpacing: 0.17,
    width: 310,
  },
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    color: black,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingVertical: baseSpacing * 1.75,
  },
  skip: {
    fontFamily: headerFont,
    fontSize: baseSize,
    color: black,
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingTop: baseSpacing,
    paddingBottom: baseSpacing * 4,
  },
});

export default styles;
