import React, { useState, useContext } from "react";
import { View, TextInput } from "react-native";

// contexts
import { ContextStore } from "../contexts/mainContext";

// helpers
import fetchData from "../helpers/fetchData";

// styles
import styles from "../styles/main";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const { dispatch } = useContext(ContextStore);

  const submit = async () => {
    const movies = await fetchData("s", term);
    if (movies === undefined) {
      dispatch({ type: "NO_MOVIES", payload: true });
    } else {
      await dispatch({ type: "SEARCH", payload: { movies, term } });
    }
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search Movies by Title."
        value={term}
        onChangeText={text => setTerm(text)}
        onSubmitEditing={() => submit()}
      />
    </View>
  );
};

export default SearchBar;
