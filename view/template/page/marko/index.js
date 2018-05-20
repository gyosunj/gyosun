require('./marko.css');
require('../../../asset/javascript/core')();
const request = require('./request');
const movieItemTemplate = require('./movie-item.marko');

const SELECTORS = {
  MOVIE_LIST_CONTAINER: '.js-movie-list__list-container',
  MOVIE_LIST_BUTTON_LOAD_MOVIE: '.js-movie-list__button-load-movie',
};

const MOVIE_API_OPTIONS = {
  sortBy: 'date',
  size: 3,
};

let movieItemCount = 0;

function loadMovies() {
  request
    .fetchMovies(`?sort=${MOVIE_API_OPTIONS.sortBy}&size=${MOVIE_API_OPTIONS.size}&offset=${movieItemCount}`)
    .then((json) => movieItemTemplate.render({movies: json.data}))
    .then((marko) => {
      marko.appendTo(document.querySelectorAll(SELECTORS.MOVIE_LIST_CONTAINER)[0]);
      movieItemCount++;
      window.scrollTo(0, window.document.body.scrollHeight);
    });
}

document.querySelectorAll(SELECTORS.MOVIE_LIST_BUTTON_LOAD_MOVIE)[0].addEventListener('click', loadMovies);
loadMovies();
