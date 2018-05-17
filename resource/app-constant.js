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
    MARKUP_PAGE_SOURCE: '/view/page/',
    MARKUP_SHARED_SOURCE: '/view/shared/',
    MARKUP_PAGE_DIST: '/dist/page/',
    MARKUP_SHARED_DIST: '/dist/shared/',
    BUNDLED_ASSET_DIST: '/dist/asset/bundle/',
    PUBLIC_PATH: '/bundle/',
  },
};
