<template>
<div id="main-background">
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4 v-center p-4 border-2px">
        <h1 class="text-center" style="font-family:argon">RESET PASSWORD</h1>
        <div class="offset-md-5">
         <i class="fa fa-unlock fa-3x"></i>
        </div>
         <base-input
                    type="password"
                    placeholder="New Password"
                    addon-left-icon="fa fa-key"
                    v-model="secret.password"
                    required
        ></base-input>
        <base-input
                    type="password"
                    placeholder="Confirm New Password"
                    addon-left-icon="fa fa-key"
                    v-model="secret.confirmPassword"
                    required
        ></base-input>
        <small class="text-left text-danger col-sm-12 ml-3">{{passError}}</small>
         <base-button block type="primary" class="mb-2" icon="fa fa-unlock" @click.prevent.stop="changePassword">Reset Password</base-button>
         <router-link to="/login">
              <base-button block type="primary"  icon="fa fa-sign-in" >Click here to Login</base-button>
         </router-link>
         <Loader v-if="loader"></Loader>
          <div class="alert alert-danger" role="alert" v-if="error">{{error}}</div>
          <div class="alert alert-success" role="alert" v-if="success">{{success}}</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Loader from "../components/utils/Loader.vue";
export default {
  name: "ResetPassword",
  components: {
    Loader
  },
  mounted() {
    this.$http
      .get("validate/reset/password/" + this.$route.params.secretKey)
      .then(response => {
        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = "reset token has expired, please generate new link";
      });
  },
  data() {
    return {
      loader: true,
      error: "",
      success: "",
      passError: "",
      secret: {
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    changePassword() {
      this.loader = true;
      this.passError = "";
      if (this.secret.password != this.secret.confirmPassword) {
        this.loader = false;
        this.passError = "confirm password is not same as password";
        return;
      }

      this.$http
        .post("reset/password/" + this.$route.params.secretKey, this.secret)
        .then(response => {
          this.loader = false;
          this.secret = {};
          this.success = "Password updated successfully";
        })
        .catch(error => {
          this.loader = false;
          this.secret = {};
          this.error = "reset token has expired, please generate new link";
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

#main-background{
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
