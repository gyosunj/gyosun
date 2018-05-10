let mockMovieData = require('./mock-movie-data.json');

function indexHandler(req, res, next) {
  let movieData = mockMovieData.slice(0);
  const sortBy = req.query.sort || null;
  const size = req.query.size || null;
  const offset = req.query.offset || null;

  if (sortBy === 'date') {
    movieData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  }

  if (Number(offset) && Number(size)) {
    movieData = movieData.splice(offset, size);
  } else if (Number(size)) {
    movieData.splice(size);
  }

  res.json({
    error: null,
    data: movieData,
    total: movieData.length,
  });
};

module.exports = {
  method: 'GET',
  path: '/movies/',
  routeHandler: indexHandler,
};
