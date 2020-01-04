const shuffleMovies = movies => {
  const moviesArr = movies;
  for (let i = 0, len = movies.length; i < len; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [moviesArr[i], moviesArr[j]] = [moviesArr[j], moviesArr[i]];
  }
  return moviesArr;
};

export default shuffleMovies;
