import React, { useReducer, createContext } from "react";

// reducers
import MainReducer from "../reducers/MainReducer";

export const ContextStore = createContext({});

const initialState = {
  loaded: false,
  term: "",
  page: 1,
  movies: [],
  end: false,
  noMovies: false,
};

const GlobalContext = props => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <ContextStore.Provider value={{ ...state, dispatch }}>
      {props.children}
    </ContextStore.Provider>
  );
};

export default GlobalContext;
