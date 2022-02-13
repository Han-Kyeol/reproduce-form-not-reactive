import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import VueCompositionAPI from "@vue/composition-api";

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(VueCompositionAPI);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
