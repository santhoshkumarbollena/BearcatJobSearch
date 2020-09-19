"use strict";

let activeUser = {};

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
    console.log("---connected socket id %s", socket.id, activeUser);

    // new user has logged-in save and emit activeUsers
    this.socket.on("addUser", (username) => {
      // activeUser.push({ [this.socket.id]: username });
      activeUser[username] = this.socket.id;
      
      this.socket.broadcastToAll("userUpdated", activeUser);
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
