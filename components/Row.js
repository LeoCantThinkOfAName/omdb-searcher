import React, { useContext, memo } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// contexts
import { ContextStore } from "../contexts/mainContext";

// styles
import styles from "../styles/main";

const Row = memo(({ navigation, info }) => {
  const { index, item } = info;
  const handlePress = () => {
    navigation.navigate("Detail", {
      id: item.imdbID,
      title: item.Title,
    });
  };

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View
        style={[
          styles.row,
          {
            backgroundColor: index % 2 !== 0 ? "#262626" : null,
          },
        ]}
      >
        <Image
          style={styles.thumbnail}
          source={{
            uri:
              item.Poster !== "N/A"
                ? item.Poster
                : "https://via.placeholder.com/180x300?text=No Image",
          }}
        />
        <Text style={styles.listText}>
          {item.Title} ({item.Year})
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default Row;
