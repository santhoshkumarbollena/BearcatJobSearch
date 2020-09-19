import Vue from "vue";
import Vuex from "vuex";
import chatClient from "./modules/chat";

// load vuex similar to routes
Vue.use(Vuex);

//create store
export default new Vuex.Store({
  modules: {
    chatClient,
  },
});
