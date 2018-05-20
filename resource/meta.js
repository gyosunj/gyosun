module.exports = {
  global: {
    name: 'Gyosun',
    domain: '//www.gyosun.com/',
    title: 'Gyosun Jung | Filmmaker | Designer | Software Engineer',
    description: 'coding with a pen tablet in the film industry',
    year: () => {
      const today = new Date();
      return today.getFullYear();
    },
  },
  wwwHome: {
    title: 'home :: Gyosun Jung | Filmmaker | Designer | Software Engineer',
    description: 'coding with a pen tablet in the film industry',
  },
  wwwMarko: {
    title: 'marko :: Gyosun Jung | Filmmaker | Designer | Software Engineer',
    description: 'This is a Marko template engine test page.',
  },
};
