import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "preparing",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 flex items-center justify-center min-h-screen" }, _attrs))}><div class="text-center p-6 bg-white rounded-lg shadow-lg"><h1 class="text-2xl font-bold text-gray-800 mb-2">\uD398\uC774\uC9C0 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4</h1><p class="text-gray-600 mb-4"> \uD604\uC7AC \uD398\uC774\uC9C0\uB97C \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uBC29\uBB38\uD574 \uC8FC\uC138\uC694. </p><button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"> \uBA54\uC778 \uD398\uC774\uC9C0\uB85C \uB3CC\uC544\uAC00\uAE30 </button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/preparing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as _ };
//# sourceMappingURL=preparing-B0vgczuc.mjs.map
