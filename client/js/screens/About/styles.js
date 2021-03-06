import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black, darkGrey},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {headerFont, hugeText, contentText, mainFont, subHeaderText},
} = THEME;

const styles = StyleSheet.create({
  page: {...centeredChildren},
  container: {
    ...centeredChildren,
    width: containerWidth,
  },
  image: {
    resizeMode: 'contain',
    height: '27%',
    width: '65%',
  },
  text: {
    fontFamily: mainFont,
    fontSize: contentText,
    color: darkGrey,
    backgroundColor: 'transparent',
    textAlign: 'left',
    lineHeight: 18,
    letterSpacing: 0.15,
    paddingVertical: baseSpacing,
  },
  subTitle: {
    fontSize: subHeaderText,
    fontFamily: headerFont,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: baseSpacing,
  },
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    color: black,
    backgroundColor: 'transparent',
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: baseSpacing * 1.75,
  },
});

export default styles;
