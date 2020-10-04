import Vue from "vue";
import axios from "axios";
import moment from 'moment';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";

Vue.config.productionTip = false;

library.add(faSpinner);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Argon);

// Integrating axios with vue as $http
Vue.prototype.$http = axios.create({
  // baseURL: process.env.API_BASE_URL,
  baseURL: "http://localhost:3099/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Vue.filter('formatDate', function (value, formatType) {
  console.log(value, formatType)
  if (formatType == 'date' && value) {
    return moment(new Date(String(value))).format('MMMM Do YYYY');
    return ""
  }

  if (formatType == 'time' && value) {
    const time = value.split(":");
    if (time[0] <= 12) {
      return `${time[0].padStart(2, "0")}:${time[1].padStart(2, "0")} AM`;
    } else {
      return `${(time[0] - 12).toString().padStart(2, "0")}:${time[1].padStart(2, "0")} PM`;
    }
  }
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
