import React, { useEffect, useState } from "react";
import { View, Animated } from "react-native";

// styles
import styles from "../styles/main";

const Spinner = ({ delay }) => {
  const [spinner] = useState(new Animated.Value(0));

  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(spinner, {
            toValue: 10,
            duration: 500,
          }),
          Animated.timing(spinner, {
            toValue: 0,
            duration: 500,
          }),
        ])
      ).start();
    }, delay);
  }, []);

  return (
    <Animated.View
      style={[
        styles.spinner,
        {
          transform: [{ translateY: spinner }],
        },
      ]}
    />
  );
};

export default Spinner;
