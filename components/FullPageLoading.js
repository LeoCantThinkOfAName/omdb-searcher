import React from "react";
import { View } from "react-native";

// components
import Spinner from "./Spinner";

// styles
import styles from "../styles/main";

const FullPageLoading = () => {
  return (
    <View style={[styles.container, styles.loading]}>
      <Spinner delay={0} />
      <Spinner delay={200} />
      <Spinner delay={400} />
    </View>
  );
};

export default FullPageLoading;
