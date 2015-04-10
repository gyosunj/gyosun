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
      YeSeul.entree.resumes.ctrl(this.route.resumes);
      break;
    case '/':
      YeSeul.entree.resumes.ctrl(this.route.resumes);
      break;
    case '#work':
      YeSeul.entree.works.ctrl(this.route.works);
      break;
    case '#blog':
      YeSeul.entree.blogs.ctrl(this.route.blogs);
      break;
    case '#blog' + param.slice('#blog'.length):
      var key = param.slice('#blog/?id='.length);
      YeSeul.entree.blog.ctrl(this.route.blog, key);
      break;
    case '#contact':
      YeSeul.entree.contact.ctrl(this.route.contact);
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
  'resumes': { thisName: 'Resume',
    renderTemplate: '../component/resume/resume.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'works': { thisName: 'Works',
    renderTemplate: '../component/work/work.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'blogs': { thisName: 'Blogs',
    renderTemplate: '../component/blog/list.mst',
    renderTarget: '#renderedBody',
    onNav: true
  },
  'blog': { thisName: 'Blog',
    renderTemplate: '../component/blog/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'contact': { thisName: 'Contact',
    renderTemplate: '../component/contact/contact.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
};

YeSeul.menuGyosun.layout();
YeSeul.menuGyosun.run();
