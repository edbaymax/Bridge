import React from 'react';
import {View, StyleSheet} from 'react-native';
import AnimationView from './AnimationView';
import Colors from '../../Themes/Colors';
import BouncyPin from '../../../assets/Animations/BouncyPin.json';

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <AnimationView animation={BouncyPin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    background: `linear-gradient(to top bottom, ${Colors.BLUE_DARK},${
      Colors.BLUE_LIGHT
    })`,
  },
});

export default SplashScreen;
