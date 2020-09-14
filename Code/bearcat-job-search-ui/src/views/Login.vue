<template>
  <div id="main-background">
    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-md-4 v-center p-4 border-2px">
          <h1 class="text-center">LOGIN</h1>
          <base-input
            placeholder="Enter your username or email id"
            addon-left-icon="fa fa-user"
            v-model="credentials.email"
          ></base-input>
          <base-input
            type="password"
            placeholder="Enter your password"
            addon-left-icon="fa fa-unlock"
            v-model="credentials.password"
          ></base-input>
          <div class="pb-2">
            <router-link to="/forgot-password">
              <a href="#">Forgot password?</a>
            </router-link>
          </div>
          <base-button
            type="primary"
            class="pull-left"
            icon="fa fa-sign-in"
            @click.prevent.stop="login"
          >Login</base-button>
          <router-link to="/register">
            <base-button type="secondary" class="pull-right" icon="fa fa-registered">Register</base-button>
          </router-link>
          <Loader v-if="loader"></Loader>
          <small class="alert alert-danger" role="alert" v-if="error">{{error}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/utils/Loader.vue";

export default {
  name: "login",
  components: {
    Loader
  },
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      error: null,
      loader: false
    };
  },
  methods: {
    async login() {
      this.loader = true;
      this.error = null;
      if (!this.credentials.email || !this.credentials.password) {
        this.loader = false;
        this.error = "Missing username or password";
        return;
      }
      if (this.credentials.email.split("@").length == 1) {
        this.credentials.email =
          this.credentials.email.toLowerCase() + "@nwmissouri.edu";
      }
      this.$http
        .post("login", this.credentials)
        .then(response => {
          this.loader = false;
          this.$http.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.token;
          localStorage.setItem("access_token", "Bearer " + response.data.token);
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;
        });
    }
  }
};
</script>

<style scoped>
.v-center {
  margin-top: 10%;
}

.border-2px {
  border: 1px solid #999;
  border-radius: 20px;
  background-color: #fff;
}

#main-background {
  /*Ref: https://thriveglobal.com/stories/the-one-thing-thats-likely-missing-from-your-job-search-strategy/ */
  background-image: url("https://content.thriveglobal.com/wp-content/uploads/2019/12/adult-blur-computer-cup-374897-1.jpg?w=1550");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  max-height: 400vh;
}
</style>
