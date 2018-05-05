require('./style.css');
require('../_shared/javascript/core')();
const myComponent = require('./hello.marko');

myComponent.renderSync({name: 'Marko'}).appendTo(document.body);

const plus = require('./plus')();

const root = document.createElement('div');

root.innerHTML = `<p>Hello Webpack.</p>`;
document.body.appendChild(root);
console.log(plus.two(1));

// IE will fail
const object1 = {
  a: 'somestring',
  b: 43,
  c: false,
  d: true,
};

console.log(Object.values(object1));
