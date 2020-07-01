<template>
  <div>
    <div class="sidenav">
      <div class="login-main-text">
        <h2>
          Bearcat Job Search
          <br />Login Page
        </h2>
        <p>Login from here to access the application.</p>
      </div>
    </div>
    <div class="main">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-8 col-xl-6">
        <div class="login-form p-3">
          <form>
            <div class="form-group">
              <div class="input-group">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-square-o fa-stack-2x"></i>
                  <i class="fa fa-user fa-1x"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="User Name"
                  v-model="credentials.email"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-square-o fa-stack-2x"></i>
                  <i class="fa fa-lock fa-1x"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  v-model="credentials.password"
                  placeholder="Password"
                />
                <br />
              </div>
            </div>
            <button class="btn btn-primary mr-2" @click.prevent.stop="login">Login</button>
            <router-link to="/register" class="border">
              <button type="submit" class="btn btn-secondary">Register</button>
            </router-link>
            <div class="form-group mt-3">
              <router-link to="/forgot-password" class="border">
                <a>Forgot password?</a>
              </router-link>
            </div>
            <Loader v-if="loader"></Loader>
            <b-alert show variant="danger" v-if="error">{{error}}</b-alert>
          </form>
        </div>
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
  created() {},
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
.nw-bg {
  background-image: url("https://lh5.googleusercontent.com/p/AF1QipP2PpiWMDm_uvLraBe3Esmow4Wki2lwkNF-2S1k=w203-h318-k-no");
  background-color: #cccccc;
  background-repeat: no-repeat;
}
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 50%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}

.btn:hover {
  color: #aaa;
}

#forgot-pwd {
  color: #000000;
}
</style>
