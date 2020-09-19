import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Argon);

// Integrating axios with vue as $http
Vue.prototype.$http = axios.create({
  // baseURL: process.env.API_BASE_URL,
  baseURL: "http://localhost:3006/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
