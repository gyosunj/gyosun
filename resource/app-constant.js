module.exports = {
  NODE_ENV: {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
  },
  NAME_SPACE: {
    RESPONSE_CONFIG: '__$$config',
    RESPONSE_CONTEXT: '__$$context',
  },
  ROUTER: {
    API: 'api',
    WWW: 'www',
  },
  STATIC_DIRECTORY: {
    ROOT: 'static/',
    ASSET: 'dist/asset/',
  },
  BUILD: {
    DIST: '/dist/',
    CLEANUP_TARGETS: ['dist'],
    MARKUP_SOURCE: '/view/',
    MARKUP_TEMPLATE_SOURCE: '/view/template/',
    MARKUP_PAGE_SOURCE: '/view/template/page/',
    MARKUP_LAYOUT_SOURCE: '/view/template/layout/',
    MARKUP_PARTIAL_SOURCE: '/view/template/partial/',
    MARKUP_TEMPLATE_DIST: '/dist/template/',
    MARKUP_PAGE_DIST: '/dist/template/page/',
    MARKUP_LAYOUT_DIST: '/dist/template/layout/',
    MARKUP_PARTIAL_DIST: '/dist/template/partial/',
    BUNDLED_ASSET_DIST: '/dist/asset/bundle/',
    PUBLIC_PATH: '/bundle/',
  },
};
