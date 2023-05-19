import React, {useRef} from 'react';
import {Animated, TouchableOpacity, Text} from 'react-native';

const ConfirmationAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.6)).current;

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.6,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity onPress={startAnimation}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{scale: scaleAnim}],
        }}>
        <Text>Confirmed!</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ConfirmationAnimation;
