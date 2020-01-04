import React, { useContext } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

// contexts
import { ContextStore } from "../contexts/mainContext";

// helpers
import shuffleMovies from "../helpers/shuffleMovies";

// styles
import styles from "../styles/main";

const deviceWidth = Dimensions.get("window").width;

const getMovies = (movies, id) => {
  return shuffleMovies([...movies])
    .filter(movie => {
      if (movie.imdbID !== id) return movie;
    })
    .slice(0, 5);
};

const Similars = ({ navigation, id }) => {
  const { movies } = useContext(ContextStore);
  const filtered = getMovies(movies, id);

  return (
    <View style={styles.similarsWrapper}>
      <Text style={[styles.text, styles.title]}>
        Movies You May Also Like:{" "}
      </Text>
      <ScrollView style={styles.similars} horizontal={true}>
        {filtered.map((movie, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push("Detail", {
                id: movie.imdbID,
                title: movie.Title,
              });
            }}
            key={movie.imdbID}
          >
            <View
              style={[
                styles.suggestion,
                {
                  marginRight: index === filtered.length - 1 ? 0 : 10,
                },
              ]}
            >
              <Image
                style={{
                  width: deviceWidth / 4,
                  height: (deviceWidth / 4) * 1.5,
                }}
                source={{
                  uri:
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/180x300?text=No Image",
                }}
              />
              <Text
                style={[
                  styles.text,
                  {
                    width: deviceWidth / 4,
                  },
                ]}
              >
                {movie.Title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Similars;
