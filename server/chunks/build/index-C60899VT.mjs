import { useSSRContext, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {
  __name: "card",
  __ssrInlineRender: true,
  props: {
    bg: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    subTxt: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "2xl:min-h-[30.1875rem] md:min-h-[24rem] min-h-auto" }, _attrs))} data-v-bcc114b8><div class="rounded shadow-custom overflow-hidden h-full" data-v-bcc114b8><div class="bg-center bg-no-repeat h-48 w-full bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('${__props.bg}');` })}" data-v-bcc114b8></div><div class="card-contents 2xl:p-7 p-4 flex flex-wrap 2xl:min-h-[18.375rem]" data-v-bcc114b8><div class="w-full" data-v-bcc114b8><h3 class="font-extrabold leading-tight 2xl:text-[1.9375rem] sm:text-2xl" data-v-bcc114b8>${(_a = __props.title) != null ? _a : ""}</h3><p class="2xl:text-lg 2xl:my-3 my-1 font-medium text-[#424242]" data-v-bcc114b8>${(_b = __props.content) != null ? _b : ""}</p></div><p class="2xl:mt-auto text-[#bdbdbd] mt-2" data-v-bcc114b8>${ssrInterpolate(__props.subTxt)}</p></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bcc114b8"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Swiper), {
        navigation: true,
        modules: [unref(Navigation)],
        class: "mainVisual 2xl:h-[46.6875rem] md:h-[31.25rem] h-[24rem]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(3, (i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                class: "bg-[url('/images/visual_bg1.png')] bg-cover bg-center bg-no-repeat",
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="max-w-screen-2xl text-white mx-auto h-full flex items-center lg:w-10/12 2xl:p-0 px-5" data-v-ed6657a9${_scopeId2}><div class="fade-in-up" data-v-ed6657a9${_scopeId2}><p class="text-3xl leading-tight font-extrabold 2xl:text-7xl md:text-5xl" data-v-ed6657a9${_scopeId2}> Lorem ipsum <br data-v-ed6657a9${_scopeId2}> dolor sit amet, ${ssrInterpolate(i)}</p><p class="mt-5 leading-normal 2xl:text-3xl 2xl:mt-11 md:text-lg text-base" data-v-ed6657a9${_scopeId2}> Lorem ipsum dolor sit amet, consectetur <br data-v-ed6657a9${_scopeId2}> sed do eiusmod tempor incididunt ut <br data-v-ed6657a9${_scopeId2}> labore et dolore magna aliqua. </p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "max-w-screen-2xl text-white mx-auto h-full flex items-center lg:w-10/12 2xl:p-0 px-5" }, [
                        createVNode("div", { class: "fade-in-up" }, [
                          createVNode("p", { class: "text-3xl leading-tight font-extrabold 2xl:text-7xl md:text-5xl" }, [
                            createTextVNode(" Lorem ipsum "),
                            createVNode("br"),
                            createTextVNode(" dolor sit amet, " + toDisplayString(i), 1)
                          ]),
                          createVNode("p", { class: "mt-5 leading-normal 2xl:text-3xl 2xl:mt-11 md:text-lg text-base" }, [
                            createTextVNode(" Lorem ipsum dolor sit amet, consectetur "),
                            createVNode("br"),
                            createTextVNode(" sed do eiusmod tempor incididunt ut "),
                            createVNode("br"),
                            createTextVNode(" labore et dolore magna aliqua. ")
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(3, (i) => {
                return createVNode(unref(SwiperSlide), {
                  class: "bg-[url('/images/visual_bg1.png')] bg-cover bg-center bg-no-repeat",
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "max-w-screen-2xl text-white mx-auto h-full flex items-center lg:w-10/12 2xl:p-0 px-5" }, [
                      createVNode("div", { class: "fade-in-up" }, [
                        createVNode("p", { class: "text-3xl leading-tight font-extrabold 2xl:text-7xl md:text-5xl" }, [
                          createTextVNode(" Lorem ipsum "),
                          createVNode("br"),
                          createTextVNode(" dolor sit amet, " + toDisplayString(i), 1)
                        ]),
                        createVNode("p", { class: "mt-5 leading-normal 2xl:text-3xl 2xl:mt-11 md:text-lg text-base" }, [
                          createTextVNode(" Lorem ipsum dolor sit amet, consectetur "),
                          createVNode("br"),
                          createTextVNode(" sed do eiusmod tempor incididunt ut "),
                          createVNode("br"),
                          createTextVNode(" labore et dolore magna aliqua. ")
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="2xl:px-28 px-5" data-v-ed6657a9><div class="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 max-w-screen-2xl mx-auto 2xl:my-40 my-20 gap-7" data-v-ed6657a9>`);
      _push(ssrRenderComponent(_component_Card, {
        bg: "/images/card_img1.png",
        title: "Lorem ipsum <br /> dolor sit amet,",
        content: "Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,",
        subTxt: "Lorem ipsum dolor sit amet,",
        "data-aos": "fade-up",
        "data-aos-delay": "0"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Card, {
        bg: "/images/card_img2.png",
        title: "Lorem ipsum <br /> dolor sit amet,",
        content: "Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,",
        subTxt: "Lorem ipsum dolor sit amet,",
        "data-aos": "fade-up",
        "data-aos-delay": "50"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Card, {
        bg: "/images/card_img3.png",
        title: "Lorem ipsum <br /> dolor sit amet,",
        content: "Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,",
        subTxt: "Lorem ipsum dolor sit amet,",
        "data-aos": "fade-up",
        "data-aos-delay": "100"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Card, {
        bg: "/images/card_img4.png",
        title: "Lorem ipsum <br /> dolor sit amet,",
        content: "Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,",
        subTxt: "Lorem ipsum dolor sit amet,",
        "data-aos": "fade-up",
        "data-aos-delay": "150"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center justify-center bg-gray-200 py-12 2xl:px-28 px-5" data-v-ed6657a9><div class="mx-auto w-full max-w-screen-2xl" data-v-ed6657a9><form action="https://formbold.com/s/FORM_ID" method="POST" data-v-ed6657a9><div class="mb-5" data-aos="fade-up" data-v-ed6657a9><label for="name" class="mb-3 block text-base font-medium text-[#07074D]" data-v-ed6657a9> \uC131\uD568 </label><input type="text" name="name" id="name" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694." class="w-full rounded-md border border-[#e0e0e0] bg-white 2xl:py-3 py-2 2xl:px-6 px-3 text-base font-medium text-[#1c1d1c] outline-none focus:border-[#6A64F1] focus:shadow-md" data-v-ed6657a9></div><div class="mb-5" data-aos="fade-up" data-v-ed6657a9><label for="email" class="mb-3 block text-base font-medium text-[#07074D]" data-v-ed6657a9> \uC774\uBA54\uC77C </label><input type="email" name="email" id="email" placeholder="example@domain.com" class="w-full rounded-md border border-[#e0e0e0] bg-white 2xl:py-3 py-2 2xl:px-6 px-3 text-base font-medium text-[#1c1d1c] outline-none focus:border-[#6A64F1] focus:shadow-md" data-v-ed6657a9></div><div class="mb-5" data-aos="fade-up" data-v-ed6657a9><label for="message" class="mb-3 block text-base font-medium text-[#07074D]" data-v-ed6657a9>\uB0B4\uC6A9</label><textarea rows="4" name="message" id="message" placeholder="\uB0B4\uC6A9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white 2xl:py-3 py-2 2xl:px-6 px-3 text-base font-medium text-[#1c1d1c] outline-none focus:border-[#6A64F1] focus:shadow-md" data-v-ed6657a9></textarea></div><div data-aos="fade-up" data-v-ed6657a9><button class="hover:shadow-form rounded-md bg-[#6A64F1] 2xl:py-3 py-2 2xl:px-6 px-4 text-base font-semibold text-white outline-none" data-v-ed6657a9> \uBCF4\uB0B4\uAE30 </button></div></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed6657a9"]]);

export { index as default };
//# sourceMappingURL=index-C60899VT.mjs.map
