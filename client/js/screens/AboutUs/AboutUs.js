import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

import AboutUsImage from '../../assets/artwork/adbust@.png';

const AboutUs = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        <Image style={styles.image} source={AboutUsImage} />
        <Text style={styles.subTitle}>Our Mission</Text>
        <Text style={styles.text}>
          Catalyze a sudden unexpected moment of truth, a stunning reversal of
          perspective — a global mind shift — from which the corpo-consumerist
          forces never fully recover and out of which the first ever truly
          global revolution is born.
        </Text>
        <Text style={styles.subTitle}>Our Story</Text>
        <Text style={styles.text}>
          We wake up each morning with the horizon of a new world in our heads,
          on fire and vowing to live without dead time. So we’re changing the
          way information flows, the way corporations and governments wield
          power, and the way meaning is produced in our world. Every damn day.
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;
