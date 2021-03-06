import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
const {
  colors: {black},
  formatting: {baseSpacing, centeredChildren, containerWidth},
  typography: {baseSize, headerFont, hugeText, contentText},
} = THEME;

const styles = StyleSheet.create({
  title: {
    fontFamily: headerFont,
    fontSize: hugeText,
    padding: baseSpacing,
  },
  container: {
    ...centeredChildren,
  },
  infoContainer: {
    padding: baseSpacing,
    textAlign: 'left',
    width: '100%',
  },
  text: {
    padding: baseSpacing / 2,
    lineHeight: 18,
    fontSize: contentText,
  },
  halfSpaceText: {
    padding: baseSpacing / 2,
    lineHeight: 18,
    fontSize: contentText,
    width: '50%',
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: baseSpacing,
  },
  image: {
    minHeight: 180,
    width: '45%',
    resizeMode: 'cover',
  },
  inputContainer: {
    height: 'auto',
    width: 375,
    borderColor: black,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: containerWidth,
    margin: baseSpacing,
    fontFamily: headerFont,
  },
  commentIcon: {
    margin: baseSpacing / 2,
  },
  comments: {
    width: containerWidth,
  },
  bullet: {
    height: 20,
    width: 20,
    marginVertical: baseSpacing / 4,
    marginHorizontal: baseSpacing,
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: baseSpacing,
    alignItems: 'flex-start',
  },
});

export default styles;
