import { _ as __nuxt_component_0 } from './nuxt-link-TpvcaGEw.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useSeoMeta, a as useHead } from './index--DdJWkO-.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-full md:w-auto" }, _attrs))}><ul class="flex gap-x-11 2xl:text-[1.3125rem] md:text-lg font-semibold md:justify-start justify-center"><li class="hover:text-amber-400">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`HOME`);
      } else {
        return [
          createTextVNode("HOME")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hover:text-amber-400">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ABOUT`);
      } else {
        return [
          createTextVNode("ABOUT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hover:text-amber-400">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`CONTACT`);
      } else {
        return [
          createTextVNode("CONTACT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/images/logo.svg");
const _imports_1 = publicAssetsURL("/images/logo_ft.png");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "20250120_ENTEST",
      description: "20250120_ENTEST \uD14C\uC2A4\uD2B8 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4. ",
      ogTitle: "20250120_ENTEST",
      ogDescription: "[og:description]",
      ogImage: "[og:image]",
      ogUrl: "[og:url]"
    });
    useHead({
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo.svg"
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo_ft.png"
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/images/favicon.png"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Menu = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><header id="header" class="flex flex-wrap sm:justify-between justify-center items-center 2xl:px-28 sticky top-0 z-50 bg-gray-200 md:h-[3.5rem] px-5 py-3"><h1 class="w-136 md:m-0 mx-auto my-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="EN MEDIA"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "EN MEDIA"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1>`);
      _push(ssrRenderComponent(_component_Menu, null, null, _parent));
      _push(`</header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-800 text-gray-200 py-3.5 2xl:px-28 px-5"><div class="max-w-screen-2xl flex items-center mx-auto h-full 2xl:min-h-80 min-h-60"><div><h2 class="2xl:w-auto w-28">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="EN MEDIA"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "EN MEDIA"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><p class="xl:mt-8 mt-4 2xl:text-[1.3125rem] text-base">Copyrights 2024. <b class="font-semibold">\uD14C\uC2A4\uD2B8</b> All Rights Reserved</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-D5QG7q31.mjs.map
