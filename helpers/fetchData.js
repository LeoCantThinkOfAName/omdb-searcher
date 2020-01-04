const api = "http://www.omdbapi.com/?apikey=8750d29b";

const fetchData = (param, value, page) => {
  const uri = page
    ? `${api}&${param}=${value}&page=${page}&r=json`
    : `${api}&${param}=${value}&r=json`;

  const res = fetch(uri)
    .then(response => response.json())
    .then(jsonRes => {
      if (param === "s") {
        return jsonRes.Search;
      } else if (param === "i") {
        return jsonRes;
      }
      return jsonRes;
    })
    .catch(err => console.error(err));

  return res;
};

export default fetchData;
