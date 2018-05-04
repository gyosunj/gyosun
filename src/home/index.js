require('./style.css');
const core = require('../_shared/javascript/core');
const plus = require('./plus')();
core();
const root = document.createElement('div');
root.innerHTML = `<p>Hello Webpack.</p>`;
document.body.appendChild(root);
console.log(plus.two(1));
