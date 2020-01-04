import React from "react";
import { View } from "react-native";

// components
import Spinner from "../components/Spinner";

// styles
import styles from "../styles/main";

const ListFooter = () => {
  return (
    <View style={styles.listFooter}>
      <Spinner delay={0} />
      <Spinner delay={200} />
      <Spinner delay={400} />
    </View>
  );
};

export default ListFooter;
