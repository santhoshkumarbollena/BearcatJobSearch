<template>
  <div>
    <div class="sidenav">
      <div class="ForgotPassword-main-text">
        <h2>
          Bearcat Job Search
          <br />Forgot Password Page
        </h2>
        <p>Forgot Password to access the application</p>
      </div>
    </div>
    <div class="main form-outline">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-8 col-xl-6">
            <div class="row align-items-center mt-4">
              <div class="col">
                <i class="fa fa-lock fa-4x"></i>
              </div>
            </div>
            <div class="row align-items-center mt-4">
              <div class="col">
                <h2>Forgot Password?</h2>
                <p>Please enter your registered email, a verification link will be sent to your email</p>
              </div>
            </div>
            <div class="row align-items-center mt-4">
              <div class="col">
                <div class="input-group">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-square-o fa-stack-2x"></i>
                    <i class="fa fa-envelope fa-1x"></i>
                  </span>
                  <input type="email" class="form-control" placeholder="Email" v-model="email" />
                </div>
              </div>
            </div>
            <div class="row align-items-center mt-4">
              <div class="col">
                <input
                  class="btn btn-primary btn-block"
                  value="Send Link"
                  type="submit"
                  @click.prevent="sendLink"
                />
              </div>
              <div class="col-sm-12 mt-3">
                <Loader v-if="loader" class="mt-4"></Loader>
                <b-alert show variant="danger" v-if="error">{{error}}</b-alert>
                <b-alert show variant="success" v-if="success">{{success}}</b-alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/utils/Loader.vue";
export default {
  name: "ForgotPassword",
  components: {
    Loader
  },
  data() {
    return {
      email: "",
      error: "",
      success: "",
      loader: false
    };
  },
  methods: {
    sendLink() {
      this.loader = true;
      this.error = "";
      this.success = "";
      if (!this.email) {
        this.error = "please enter the email id";
        return;
      }
      this.$http
        .post("forgot-password", { email: this.email })
        .then(response => {
          this.loader = false;
          this.success = "Reset mail has sent successfully";
        })
        .catch(error => {
          console.log("error", error.response);
          this.loader = false;
          this.error = "Invalid, please check your email id";
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
  .ForgotPassword-form {
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

  .ForgotPassword-form {
    margin-top: 50%;
  }
}

.ForgotPassword-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.ForgotPassword-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}

.btn:hover {
  color: #aaa;
}
</style>

