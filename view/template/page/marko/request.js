function fetchMovies(queryString) {
  let url = '/api/movies/';

  if (queryString) {
    url = url + queryString;
  }

  return window.fetch(url).then(((res)=> res.json()));
}

module.exports = {
  fetchMovies,
};
