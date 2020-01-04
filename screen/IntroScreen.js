import React, { useEffect, useState } from "react";
import { View, Text, Animated, Easing } from "react-native";

// styles
import styles from "../styles/main";

const IntroScreen = ({ navigation }) => {
  const [opacity] = useState(new Animated.Value(0));
  const [top] = useState(new Animated.Value(100));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
    }).start();

    Animated.timing(top, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
    }).start();
  }, []);

  return (
    <View style={[styles.container, styles.noMovies]}>
      <Animated.View
        style={{
          alignItems: "center",
          opacity: opacity,
          transform: [
            {
              translateY: top,
            },
          ],
        }}
      >
        <Text style={[styles.text, styles.logo]}>OMDB Searcher</Text>
        <Text style={[styles.text, styles.caption]}>
          This is a Harvard CS50 Mobile Project @LCTOAN.
        </Text>
      </Animated.View>
    </View>
  );
};

export default IntroScreen;
