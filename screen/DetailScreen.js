import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, BackHandler } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// contexts
import { ContextStore } from "../contexts/mainContext";

// components
import RatingMeter from "../components/RatingMeter";
import FullPageLoading from "../components/FullPageLoading";

// helpers
import fetchData from "../helpers/fetchData";

// styles
import styles from "../styles/main";
import Similars from "../components/Similars";

const arrParser = genreStr => {
  if (genreStr !== undefined && genreStr !== "") {
    const genreArr = genreStr.split(",");
    const newArr = genreArr.map(genre => {
      if (genre[0] === " ") {
        return genre.slice(1);
      }
      return genre;
    });
    return newArr;
  }
  return [];
};

const DetailScreen = ({
  navigation,
  route: {
    params: { id, title },
  },
}) => {
  const [detail, setDetail] = useState(null);

  const getMovieDetail = async () => {
    const movie = await fetchData("i", id);
    await setDetail(movie);
  };

  BackHandler.addEventListener("hardwareBackPress", () => {
    navigation.goBack();
    return true;
  });

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
    getMovieDetail();
  }, []);

  if (detail) {
    return (
      <View style={[styles.container, styles.detail]}>
        <View style={styles.detailMain}>
          <Image
            style={styles.poster}
            source={{
              uri:
                detail.Poster !== "N/A"
                  ? detail.Poster
                  : "https://via.placeholder.com/180x300?text=No Image",
            }}
          />
          <View>
            <Text style={[styles.text, styles.title]}>{detail.Title}</Text>
            <View style={styles.detailScroll}>
              <ScrollView>
                <View style={styles.detailScrollContent}>
                  <Text style={styles.text}>
                    Released Date: {detail.Released}
                  </Text>
                  <Text style={styles.text}>Rated: {detail.Rated}</Text>
                  <Text style={styles.text}>Length: {detail.Runtime}</Text>
                  <Text style={styles.text}>Director: {detail.Director}</Text>
                  <View style={styles.actors}>
                    <Text style={styles.text}>Actors: </Text>
                    <View>
                      {arrParser(detail.Actors).map(actor => (
                        <Text style={styles.text} key={actor}>
                          {actor}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <Text style={[styles.text, styles.plot]}>{detail.Plot}</Text>
                </View>
              </ScrollView>
              <LinearGradient
                colors={["#222", "rgba(0, 0, 0, 0)"]}
                style={styles.maskTop}
              />
              <LinearGradient
                colors={["rgba(0, 0, 0, 0)", "#222"]}
                style={styles.maskBot}
              />
            </View>
            <View style={styles.genres}>
              {arrParser(detail.Genre).map(genre => (
                <Text style={styles.label} key={genre}>
                  {genre}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <ScrollView>
          <View style={styles.detailRating}>
            <Text style={[styles.text, styles.title]}>Rating: </Text>
            {detail.Ratings &&
              detail.Ratings.map((rating, index) => {
                return <RatingMeter key={index} rating={rating} />;
              })}
          </View>
          <Similars id={id} navigation={navigation} />
        </ScrollView>
      </View>
    );
  } else {
    return <FullPageLoading />;
  }
};

export default DetailScreen;
