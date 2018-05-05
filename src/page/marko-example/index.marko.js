// Compiled using marko@4.9.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/gyosun$1.0.0/src/page/marko-example/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    default_template = marko_loadTemplate(require.resolve("../../shared/layout/default")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: default_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<h1>This is " +
              marko_escapeXml(input.pageName) +
              " Page</h1><h2>Sub Title</h2><h3>Client Template</h3><div class=\"client-template__container\"></div><script src=\"/marko-example-bundle.js\"></script>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/gyosun$1.0.0/src/page/marko-example/index.marko",
    tags: [
      "../../shared/layout/default",
      "marko/src/taglibs/core/include-tag"
    ]
  };
