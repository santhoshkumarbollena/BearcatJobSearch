"use strict";
const Ws = use("Ws");
const _ = use("lodash");

let activeUser = {};

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
    this.topic = Ws.getChannel("chat").topic("chat");

    // new user has logged-in save and emit activeUsers
    this.socket.on("addUser", (username) => {
      activeUser[username] = this.socket.id;
      this.socket.broadcastToAll("userUpdated", activeUser);
    });
  }

  onMessage(message) {
    this.socket.emitTo("message", message, [message.emitTo]);
  }

  onClose(socket) {
    deleteActiveUserProp(socket.id);
    this.topic.broadcast("userUpdated", activeUser);
  }
}

const deleteActiveUserProp = (val) => {
  for (let key in activeUser) {
    if (activeUser[key] == val) delete activeUser[key];
  }
};

module.exports = ChatController;
