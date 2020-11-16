<template>
  <div id="main-background">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 v-center p-4 border-2px mb-5">
          <h1 class="text-center">REGISTER</h1>

          <base-input
            type="number"
            placeholder="Please provide your (919) Id"
            addon-left-icon="fa fa-id-badge"
            v-model="form.studentId"
            required
          ></base-input>
          <!-- <Loader v-if="loader"></Loader> -->
          <small v-if="error.studentId" class="col-12 text-left text-danger">{{
            error.studentId
          }}</small>
          <base-input
            type="text"
            placeholder="Name"
            addon-left-icon="fa fa-user"
            v-model="form.studentName"
            required
          ></base-input>
          <small
            v-if="error.studentName"
            class="col-12 text-left text-danger"
            >{{ error.studentName }}</small
          >
          <base-input
            type="number"
            placeholder="Phone Number"
            v-model="form.phoneNumber"
            onkeypress="if(this.value.length==10) return false;"
            addon-left-icon="fa fa-phone"
            required
          ></base-input>
          <small
            v-if="error.phoneNumber"
            class="col-12 text-left text-danger"
            >{{ error.phoneNumber }}</small
          >
          <base-input addon-left-icon="fa fa-calendar">
            <flat-picker
              slot-scope="{ focus, blur }"
              @on-open="focus"
              @on-close="blur"
              :config="{ allowInput: true }"
              class="form-control datepicker"
              v-model="form.dob"
              placeholder="DOB"
            ></flat-picker>
          </base-input>
          <small v-if="error.dob" class="col-12 text-left text-danger">{{
            error.dob
          }}</small>
          <b-form-radio-group
            v-model="form.gender"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
          <base-input
            type="email"
            placeholder="Email"
            addon-left-icon="fa fa-envelope"
            v-model="form.email"
            required
          ></base-input>
          <small v-if="error.email" class="col-12 text-left text-danger">{{
            error.email
          }}</small>
          <base-input
            type="password"
            placeholder="Password"
            addon-left-icon="fa fa-key"
            v-model="form.password"
            required
          ></base-input>
          <small v-if="error.password" class="col-12 text-left text-danger">{{
            error.password
          }}</small>
          <base-input
            type="password"
            placeholder="Confirm Password"
            addon-left-icon="fa fa-key"
            v-model="confirmPassword"
            required
          ></base-input>
          <small
            v-if="error.confirmPassword"
            class="col-12 text-left text-danger"
            >{{ error.confirmPassword }}</small
          >
          <base-button
            type="success"
            class="pull-left mt-3"
            icon="fa fa-registered"
            @click.prevent.stop="register"
            >Register</base-button
          >
          <router-link to="/login">
            <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-sign-in"
              >Login</base-button
            >
          </router-link>
          <div class="alert alert-danger" role="alert" v-if="endResult">
            {{ endResult }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  name: "Registration",
  data() {
    return {
      error: {
        studentId: "",
        studentName: "",
        email: "",
        password: "",
        phoneNumber: "",
        gender: "",
        confirmPassword: "",
      },
      form: {
        studentId: "",
        studentName: "",
        email: "",
        password: "",
        phoneNumber: "",
        gender: "Male",
        dob: "",
      },
      confirmPassword: "",
      status: "not_accepted",
      endResult: "",
      options: [
        { item: "Male", name: "Male" },
        { item: "Female", name: "Female" },
      ],
    };
  },
  components: {
    flatPicker,
  },
  methods: {
    register() {
      this.loader = true;
      this.error = null;
      this.error = {};

      if (!this.form.studentId) {
        console.log("Error for student id");
        this.error.studentId = "please enter student id";
      }
      if (!this.form.studentName) {
        console.log("Error for student Name");
        this.error.studentName = "please enter student name";
      }
      if (!this.form.email) {
        console.log("Error for student EMail");
        this.error.email = "please enter email";
      }
      if (!this.form.password) {
        console.log("Error for student Password");
        this.error.password = "please enter password";
        // this.error.confirmPassword = "please enter password";
      }
      if (!(this.confirmPassword == this.form.password)) {
        console.log("Password miss match");
        // this.error.password = "please enter conform password";
        this.error.confirmPassword = "please match password";
      }

      if (!this.form.dob) {
        this.error.dob = "please enter dob";
      }
      if (!this.form.phoneNumber) {
        console.log("Error for student phone number");
        this.error.phoneNumber = "please enter phone number";
      }
      console.log(Object.keys(this.error).length);
      if (Object.keys(this.error).length) {
        console.log("In error");
        return;
      }

      this.$http
        .post("registration", this.form)
        .then((response) => {
          this.endResult = "Student register successfully...!!";
          this.$root.$bvToast.toast(`Student register successfully...!!`, {
            title: "Success",
            autoHideDelay: 5000,
            variant: "success",
          });
          this.$router.push({ name: "login" });
        })
        .catch((error) => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;
        });
    },
  },
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
