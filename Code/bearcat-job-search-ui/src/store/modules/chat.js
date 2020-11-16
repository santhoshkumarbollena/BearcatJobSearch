import Vue from "vue";
import _ from "lodash";
import axios from "axios";
import Ws from "@adonisjs/websocket-client/index";

// configure do
require('dotenv').config()

// axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || "http://localhost:3000/api/v1";

// setting up web-socket provider
const ws = Ws("ws://localhost:3000");
ws.connect();
ws.on("open", () => {
  console.log("--------web socket connection is open");
});

// ws.on("close", () => {
//   console.log("--web socket connection is close");
// });

// setting up web-socket with chat channel
/** subscribe to chat channel **/
const wsChat = ws.subscribe("chat");

wsChat.on("message", (res) => {
  // commit("updateMsg", res);
  state.messages = [...state.messages, res];
});

const state = {
  activeUsers: [],
  messages: [],
};

const getters = {
  getActiveUsers: (state) => {
    return state.activeUsers;
  },
  getMesages: (state) => {
    return state.messages;
  },
};

const mutations = {
  setActiveUser: (state, users) => {
    state.activeUsers = users;
  },

  updateMsg: (state, msg) => {
    state.messages = [...state.messages, msg];
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

  emitMessage: ({ commit }, payload) => {
    commit("updateMsg", payload);
    wsChat.emit("message", payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  wsChat,
};
