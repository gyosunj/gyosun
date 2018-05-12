require('./style.css');
require('../../shared/javascript/core')();
const clientTemplate = require('./client-template.marko');
const className = 'client-template__container';

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
    marko.appendTo(document.getElementsByClassName(className)[0]);
  });
