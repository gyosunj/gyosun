const plusModule = require('./plus');

module.exports = () => {
  const buttonEl = document.getElementsByClassName('component-button__button');
  const resultEl = document.getElementsByClassName('component-button__result');

  plusModule.init();
  resultEl[0].innerText = plusModule.getPrivateNumber();

  buttonEl[0].addEventListener('click', (event)=> {
    plusModule.incrementPrivateNumber();
    resultEl[0].innerText = plusModule.getPrivateNumber();
  });
};
