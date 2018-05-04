const home = require('./home/index');
const contact = require('./contact/index');

module.exports = {
  wwwHome: {method: 'GET', path: '/', handler: home.index},
  wwwContact: {method: 'GET', path: '/contact/', handler: contact.index},
};
