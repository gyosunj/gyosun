require('./style.css');
require('../../shared/javascript/core').init();
const clientTemplate = require('./client-template.marko');

clientTemplate
  .render({
    message: 'It\'s client template!',
    settings: {
      one: 1,
      two: 2,
      three: 3,
    },
  })
  .then((marko) => {
    marko.appendTo(document.getElementsByClassName('client-template__container')[0]);
  });
