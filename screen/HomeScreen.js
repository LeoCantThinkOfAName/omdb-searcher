import React, { useContext, useState } from "react";
import { View, FlatList, Text } from "react-native";

// contexts
import { ContextStore } from "../contexts/mainContext";

// components
import SearchBar from "../components/SearchBar";
import Row from "../components/Row";
import ListFooter from "../components/ListFooter";

// helpers
import fetchData from "../helpers/fetchData";

// styles
import styles from "../styles/main";

const HomeScreen = ({ navigation }) => {
  const { movies, term, page, end, noMovies, dispatch } = useContext(
    ContextStore
  );
  const [extraMovies, setExtraMovies] = useState([]);

  const loadMoreMovies = async () => {
    const data = await fetchData("s", term, page);
    if (data !== undefined) {
      if (data.length < 10) {
        dispatch({ type: "END_SEARCH", payload: true });
      }
      dispatch({ type: "LOAD_MORE", payload: data });
    } else {
      dispatch({ type: "END_SEARCH", payload: true });
    }
  };

  const renderItem = info => {
    return <Row id={info.index} info={info} navigation={navigation} />;
  };

  return (
    <View style={[styles.container]}>
      <SearchBar />
      {!noMovies ? (
        movies && movies.length !== 0 ? (
          <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={info => `${info.imdbID}-${new Date().getTime()}`}
            ListFooterComponent={() => {
              if (end) {
                return null;
              } else {
                return <ListFooter />;
              }
            }}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadMoreMovies()}
          />
        ) : (
          <Text style={styles.splash}>OMDB Searcher</Text>
        )
      ) : (
        <View style={[styles.container, styles.noMovies]}>
          <Text style={styles.text}>¯\_(ツ)_/¯</Text>
          <Text style={styles.text}>Not Found.</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
