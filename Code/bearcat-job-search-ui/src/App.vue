<template>
  <div id="app">
    <NavBar v-if="userName" />
    <div class="height-70">
      <router-view />
    </div>
    <Footer v-if="userName" />
  </div>
</template>

<script>
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/utils/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      userName: localStorage.getItem("user_name")
    };
  },
  created() {
    this.$http.defaults.headers.common["Authorization"] = localStorage.getItem(
      "access_token"
    );
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Noto Sans JP", sans-serif;
}

.f-12 {
  font-size: 12px;
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

.height-70 {
  min-height: 70vh;
}

input {
  color: #3a3a3a !important;
}

textarea {
  color: #3a3a3a !important;
}

small {
  display: block;
}
</style>
