import React, { useEffect, useState } from "react";
import { View, Text, Animated, Easing } from "react-native";
import { Dimensions } from "react-native";

// styles
import styles from "../styles/main";

const deviceWidth = Dimensions.get("window").width;

const scoreRegulator = score => {
  // percent
  if (score.slice(score.length - 1) === "%") {
    const percentScore = score.slice(0, score.length - 1);
    return Number(percentScore);
  } else if (score.split("/").length === 2) {
    const fractionScore = Number(score.split("/")[0]);
    if (fractionScore <= 10) return fractionScore * 10;
    return fractionScore;
  }
  return null;
};

const RatingMeter = ({ rating: { Source, Value } }) => {
  const [scoreAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(scoreAnim, {
      toValue: scoreRegulator(Value) * ((deviceWidth - 20) / 100),
      duration: 1000,
      easing: Easing.bezier(0.075, 0.82, 0.165, 1),
    }).start();
  }, []);

  return (
    <View>
      <Text style={styles.text}>{Source}</Text>
      <View style={styles.track}>
        <Animated.View
          style={[
            styles.scoreBar,
            {
              width: scoreAnim,
            },
          ]}
        ></Animated.View>
        <Text style={[styles.text, styles.score]}>{Value}</Text>
      </View>
    </View>
  );
};

export default RatingMeter;
