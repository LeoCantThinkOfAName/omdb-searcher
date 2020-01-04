const MainReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        loaded: true,
      };
    case "LOAD_MORE":
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        page: state.page + 1,
      };
    case "SEARCH":
      return {
        ...state,
        movies: action.payload.movies,
        term: action.payload.term,
        page: state.page + 1,
        noMovies: false,
        end: false,
      };
    case "END_SEARCH":
      return {
        ...state,
        end: action.payload,
      };
    case "NO_MOVIES":
      return {
        ...state,
        noMovies: true,
      };
    default:
      return state;
  }
};

export default MainReducer;
