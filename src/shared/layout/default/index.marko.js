// Compiled using marko@4.9.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/gyosun$1.0.0/src/shared/layout/default/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\" dir=\"ltr\" xmlns:fb=\"http://ogp.me/ns/fb#\"><head> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title></title><meta name=\"description\" content=\"\"><link rel=\"canonical\" href=\"\"><link rel=\"shortcut icon\" sizes=\"76x76\" type=\"image/x-icon\" href=\"\"><meta property=\"fb:app_id\" content=\"\"><meta property=\"og:site_name\" content=\"\"><meta property=\"og:title\" content=\"\"><meta property=\"og:description\" content=\"\"><meta property=\"og:type\" content=\"\"><meta property=\"og:url\" content=\"\"><meta property=\"og:image\" content=\"\"><meta property=\"og:locale\" content=\"en_US\"><meta name=\"twitter:card\" content=\"\"><meta name=\"twitter:url\" content=\"\"><meta name=\"twitter:image\" content=\"\"><meta name=\"twitter:title\" content=\"\"><meta name=\"twitter:description\" content=\"\"><meta name=\"twitter:site\" content=\"\"><link rel=\"manifest\" href=\"\"><link rel=\"apple-touch-icon\" href=\"\"><link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"\"><link rel=\"apple-touch-icon\" sizes=\"167x167\" href=\"\"><link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"\"><meta http-equiv=\"x-dns-prefetch-control\" content=\"on\"><link rel=\"dns-prefetch\" href=\"\"><link rel=\"preconnect\" href=\"\"> </head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\">layout! <main id=\"main\">");

  include_tag({
      _target: data.body
    }, out, __component, "34");

  out.w("</main></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/gyosun$1.0.0/src/shared/layout/default/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
