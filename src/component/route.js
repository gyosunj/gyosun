'use strict';
YeSeul.menuGyosun = new YeSeul.menu();
YeSeul.menuGyosun.layoutRoute = {
  renderHeader: {
    run: false,
    path: './templates/partials/header.mst', 
    data: function() {
      var data;
      return data;
    },
    target: '#renderedHeader'
  },
  renderSidebar: {
    run: false,
    path: '', 
    data: function() {
      var data;
      return data;
    },
    target: ''
  },
  renderFooter: {
    run: false,
    path: './templates/partials/footer.mst', 
    data: function () {
      var data = {};
      return data;
    },
    target: '#renderedFooter'
  },
  renderSidebar: {
    run: true,
    path: './templates/partials/nav.mst', 
    data: function () {
      var data = {};
      data.year = YeSeul.ingredient.punchClock.year();
      data.monthName = YeSeul.ingredient.punchClock.monthName();
      return data;
    },
    target: '#renderedNav'
  },
};
YeSeul.menuGyosun.changeRoute = function(param) {
  switch(param) {
    case '':
      YeSeul.entree.front.ctrl(this.route.front);
      break;
    case '/':
      YeSeul.entree.front.ctrl(this.route.front);
      break;
    case '#blog':
      YeSeul.entree.blogs.ctrl(this.route.blogs);
      break;
    case '#blog' + param.slice('#blog'.length):
      var key = param.slice('#blog/?id='.length);
      YeSeul.entree.blog.ctrl(this.route.blog, key);
      break;
    default:
      YeSeul.entree.generic.Ctrl(this.route.fourofour); // TODO: need to create a generic ctrl
      break;
  }
};
YeSeul.menuGyosun.route = {
  'fourofour': { thisName: '404',
    renderTemplate: '../templates/404.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'front': { thisName: 'Front',
    renderTemplate: '../component/front/front.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'blogs': { thisName: 'Blogs',
    renderTemplate: '../component/blog/templates/list.mst',
    renderTarget: '#renderedBody',
    onNav: true
  },
  'blog': { thisName: 'Blog',
    renderTemplate: '../component/blog/templates/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
};

YeSeul.menuGyosun.layout();
YeSeul.menuGyosun.run();
