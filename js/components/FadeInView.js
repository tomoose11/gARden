import React, { Component } from 'react';
import { Animated } from 'react-native';


class FadeInView extends Component {
    state = {
      fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
      const { fadeAnim } = this.state;
      Animated.timing(
        fadeAnim,
        {
          toValue: 100,
          duration: 500,
        }
      ).start();
    }

    render() {
      const { fadeAnim } = this.state;
      const { style, children } = this.props;
      return (
        <Animated.View
          style={{
            ...style,
            right: fadeAnim,
          }}
        >
          {children}
        </Animated.View>
      );
    }
}

export default FadeInView;
