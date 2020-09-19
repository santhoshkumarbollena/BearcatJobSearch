"use strict";

let activeUser = [];

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
    console.log("---connected socket id %s", socket.id);

    this.socket.on("activeUser", (username) => {
      activeUser.push({ [this.socket.id]: username });
      this.socket.broadcastToAll("activeUser", activeUser);
    });
  }

  onMessage(message) {
    console.log("---received message", message);
    this.socket.broadcastToAll("message", message);
  }

  onClose(socket) {
    console.log("---disconnected socket id %s", socket.id);
  }
}

module.exports = ChatController;
