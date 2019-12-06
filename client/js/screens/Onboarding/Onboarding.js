import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import microphoneImageSource from '../../assets/artwork/MicLightningVCopy@.png';
import fistImageSource from '../../assets/artwork/RevolutionFistCopy@.png';
import heartImageSource from '../../assets/artwork/Heartart@.png';
import styles from './styles';

const slides = [
  {
    key: '1',
    title: 'We are a World Revolution',
    text:
      'Rise up and make your voice heard! Join us and be the change. NOW is the time, to bring wayward corporations to heel with massive international boycotts, subvertisements, sabotage, pranks, hacks and culture jams.',
    image: microphoneImageSource,
    imageStyle: styles.image,
    backgroundColor: '#000',
  },
  {
    key: '2',
    title: 'Track your campaigns',
    text:
      'Sign up to follow campaigns and receive notifications about all the new updates regarding “your stuff”. Be heard, add your comments and turn ideas into action.',
    image: fistImageSource,
    imageStyle: styles.image,
    backgroundColor: '#000',
  },
  {
    key: '3',
    title: 'Stay Connected',
    text:
      'Never miss out on an opportunity to fight for the cause. We want you to be a part of the action. It is NOW or NEVER.  We will not go down with this sinking ship in silence.',
    image: heartImageSource,
    imageStyle: styles.image,
    backgroundColor: '#000',
  },
];

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
    };
  }

  on_Done_all_slides = () => {
    this.setState({show_Main_App: true});
  };

  on_Skip_slides = () => {
    this.setState({show_Main_App: true});
  };

  _renderItem = ({item, dimensions}) => {
    return (
      <View style={styles.mainContent}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        showNextButton={false}
        showSkipButton={true}
        doneLabel="Join the Revolution"
        bottomButton={true}
        renderSkipButton={() => {
          return <Text style={styles.skip}>Skip</Text>;
        }}
        renderDoneButton={() => {
          return <Button style={styles.done} title="Join the Revolution" />;
        }}
        activeDotStyle={{backgroundColor: '#CC0000'}}
        //use renderDoneButton={()=><Button Component>} when component is done}
      />
    );
  }
}
