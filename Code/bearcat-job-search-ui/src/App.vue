<template>
  <div id="app">
    <!-- <header></header> -->
    <router-view />
    <!-- <footer></footer> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    console.log("----- from app.js");
    const ws = adonis.Ws("ws://localhost:3006");
    ws.connect();

    let isConnected = false;

    ws.on("open", () => {
      isConnected = true;
    });

    ws.on("close", () => {
      isConnected = false;
    });

    const chat = ws.subscribe("chat");

    chat.on("ready", () => {
      chat.emit("message", "hello");
    });

    chat.on("error", error => {
      console.log(error);
    });

    chat.on("close", () => {});
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Noto Sans JP", sans-serif;
}
</style>
