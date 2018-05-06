module.exports = {
<<<<<<< HEAD
  wwwHome: require('./home/'),
  wwwMarko: require('./marko-example'),
=======
  wwwHome: {method: 'GET', path: '/', handler: require('./home/index').index},
  wwwMarko: {method: 'GET', path: '/marko', handler: require('./marko-example/index').index},
>>>>>>> fix minor bugs for marko
};
