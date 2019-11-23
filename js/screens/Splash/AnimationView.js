import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

class AnimationView extends React.Component {
  async componentDidMount() {
    this.animaton.play();
  }
  render() {
    const {animation} = this.props;
    return (
      <View>
        <LottieView
          ref={animatonRef => (this.animation = animatonRef)}
          source={animation}
        />
      </View>
    );
  }
}

export default AnimationView;
