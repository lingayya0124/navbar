import Vue from "vue";
import App from "./App.vue";
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
