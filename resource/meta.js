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
    title: 'Gyosun Jung | Filmmaker | Designer | Software Engineer :: home',
    description: 'coding with a pen tablet in the film industry',
  },
  wwwMarko: {
    title: 'This is a Marko page title. from Meta.json',
    description: 'This is a Marko page description. from Meta.json',
  },
};
