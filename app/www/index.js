module.exports = {
  wwwHome: {method: 'GET', path: '/', handler: require('./home/index').index},
  wwwContact: {method: 'GET', path: '/contact/', handler: require('./contact/index').index},
  wwwArticle: {method: 'GET', path: '/article/:id/', handler: require('./article/index').index},
};
