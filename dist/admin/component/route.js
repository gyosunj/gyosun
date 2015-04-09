YeSeul.menuAdmin = new YeSeul.menu();
YeSeul.menuAdmin.layoutRoute = {
  renderHeader: {
    run: true,
    path: './partials/header.mst', 
    data: function () {
      var data = {};
      data.year = YeSeul.ingredient.punchClock.year();
      data.monthName = YeSeul.ingredient.punchClock.monthName();
      return data;
    },
    target: '#renderedHeader'
  },
  renderSidebar: {
    run: false,
    path: './partials/sidebar.mst', 
    data: function() {
      var data;
      return data;
    },
    target: '#renderedSidebar'
  },
  renderFooter: {
    run: false,
    path: './partials/footer.mst', 
    data: function () {
      var data = {};
      return data;
    },
    target: '#renderedFooter'
  }
};
YeSeul.menuAdmin.changeRoute = function(param) {
  if (YeSeul.restaurant.owner === null || YeSeul.restaurant.owner === 'null') {
    if (param != '/admin/') {
      window.location = "/admin/";
    }
  };
  switch(param) {
    case '/admin/':
      YeSeul.entree.auth.ctrl(this.route.login);
      break;
    case '#dashboard/':
      YeSeul.entree.dashboard.ctrl(this.route.dashboard);
      break;
    case '#resume/':
      YeSeul.entree.resumes.ctrl(this.route.resumes);
      break;
    case '#resume/edit/' + param.slice('#resume/edit/'.length):
      var key = param.slice('#resume/edit/?id='.length);
      YeSeul.entree.resume.ctrl(this.route.resumeEdit, key);
      break;
    case '#resume/create/':
      YeSeul.entree.resume.ctrl(this.route.resumeCreate);
      break;
    case '#resume/trash/':
      YeSeul.entree.resumes.ctrl(this.route.resumesTrash);
      break;
    case '#blog/':
      YeSeul.entree.blogs.ctrl(this.route.blogs);
      break;
    case '#blog/edit/' + param.slice('#blog/edit/'.length):
      var key = param.slice('#blog/edit/?id='.length);
      YeSeul.entree.blog.ctrl(this.route.blogEdit, key);
      break;
    case '#blog/create/':
      YeSeul.entree.blog.ctrl(this.route.blogCreate);
      break;
    case '#blog/trash/':
      YeSeul.entree.blogs.ctrl(this.route.blogsTrash);
      break;
    default:
      YeSeul.entree.auth.ctrl(this.route.login);
      break;
  }
};
YeSeul.menuAdmin.route = {
  'login': { 
    thisName: 'Login',
    renderTemplate: './component/auth/auth.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'dashboard': { 
    thisName: 'Dashboard',
    renderTemplate: './component/dashboard/dashboard.mst',
    renderTarget: '#renderedBody',
    onNav: true
  },
    'resumes': { 
    thisName: 'Resumes',
    renderTemplate: './component/resume/templates/list.mst',
    renderTarget: '#renderedBody',
    onNav: true
  },
  'resumeEdit': { 
    thisName: 'Edit Resume',
    renderTemplate: './component/resume/templates/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'resumeCreate': { 
    thisName: 'Create Resume',
    renderTemplate: './component/resume/templates/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'resumesTrash': { 
    thisName: 'Deleted Resumes',
    renderTemplate: './component/resume/templates/list.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'blogs': { 
    thisName: 'Blogs',
    renderTemplate: './component/blog/templates/list.mst',
    renderTarget: '#renderedBody',
    onNav: true
  },
  'blogEdit': { 
    thisName: 'Edit Blog',
    renderTemplate: './component/blog/templates/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'blogCreate': { 
    thisName: 'Create Blog',
    renderTemplate: './component/blog/templates/detail.mst',
    renderTarget: '#renderedBody',
    onNav: false
  },
  'blogsTrash': { 
    thisName: 'Deleted Blogs',
    renderTemplate: './component/blog/templates/list.mst',
    renderTarget: '#renderedBody',
    onNav: false
  }
};
YeSeul.menuAdmin.layout();
YeSeul.menuAdmin.run();

