<template>
<div id="main-background">
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4 v-center p-4 border-2px">
        <h1 class="text-center" style="font-family:argon">FORGOT PASSWORD?</h1>
        <div class="offset-md-5">
         <i class="fa fa-lock fa-3x"></i>
        </div>
        <p>Please enter your registered email,</p>
         <base-input
                placeholder="Enter your username or email id"  type="email" addon-left-icon="fa fa-user"
                v-model="email"
         ></base-input>
         <base-button block type="primary"  icon="fa fa-link" @click.prevent="sendLink">Send Link</base-button>
         <router-link to="/login">
         <base-button block type="primary" class="mt-2" icon="fa fa-sign-in" >Login</base-button>
         </router-link>
         <Loader v-if="loader" class="mt-4"></Loader>
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

