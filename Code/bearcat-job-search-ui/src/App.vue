<template>
  <div id="app">
    <NavBar />
    <router-view />
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import NavBar from "./components/Nav/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Noto Sans JP", sans-serif;
}

.f-16 {
  font-size: 16px;
}

.f-20 {
  font-size: 20px;
}

.fw-650 {
  font-weight: 650;
}

.card-1 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.32);
}
</style>
