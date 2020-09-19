import Vue from "vue";
import _ from "lodash";
import axios from "axios";
import Ws from "@adonisjs/websocket-client/index";

// axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.baseURL = "http://localhost:3006/api/v1";

// setting up web-socket provider
const ws = Ws("ws://localhost:3006");
ws.connect();
ws.on("open", () => {
  console.log("--web socket connection is open");
});
ws.on("close", () => {
  console.log("--web socket connection is close");
});

// setting up web-socket with chat channel
/** subscribe to chat channel **/
const wsChat = ws.subscribe("chat");

const state = {
  activeUsers: [],
};

const getters = {
  getActiveUsers: (state) => {
    return state.activeUsers;
  },
};

const mutations = {
  setActiveUser: (state, users) => {
    state.activeUsers = users;
  },
};

const actions = {
  // getActiveUsers: (context) => {
  //   wsChat.on("activeUser", (activeUser) => {
  //     context.commit("setActiveUser", activeUser);
  //   });
  // },

  addNewUser: ({ commit }) => {
    wsChat.emit("addUser", localStorage.getItem("user_name"));
    wsChat.on("userUpdated", (activeUser) => {
      commit("setActiveUser", activeUser);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  wsChat,
};
