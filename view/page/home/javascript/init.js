const plusModule = require('./plus');
let movieCount = 0;

module.exports = () => {
  const buttonEl = document.getElementsByClassName('component-button__button');
  const resultEl = document.getElementsByClassName('component-button__result');

  plusModule.init();
  resultEl[0].innerText = plusModule.getPrivateNumber();

  buttonEl[0].addEventListener('click', (event)=> {
    plusModule.incrementPrivateNumber();
    resultEl[0].innerText = plusModule.getPrivateNumber();
  });

  const moviesButtonEl = document.getElementsByClassName('component-movies-button__button');
  const moviesResultEl = document.getElementsByClassName('component-movies-button__result');

  moviesButtonEl[0].addEventListener('click', (event)=> {
    window.fetch(`/api/movies/?sort=date&size=1&offset=${movieCount++}`)
      .then((response) => response.json())
      .then((json) => {
        const movie = json.data[0];
        const template = `
          <div class="component-movies-button__result-movie-container" data-movie-id=${movie.id}>
            <h4>${movie.title}</h4>
            <div><b>Genre</b>: ${movie.genre}</div>
            <div><b>Release Date</b>: ${movie.release_date}<div>
          </div>
        `;

        moviesResultEl[0].insertAdjacentHTML('beforeend', template);
      });
  });
};
