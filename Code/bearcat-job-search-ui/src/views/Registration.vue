<template>
  <div>
    <div class="sidenav">
      <div class="Registration-main-text">
        <h2>
          Bearcat Job Search
          <br />Registration Page
        </h2>
        <p>Registration to access the application.</p>
      </div>
    </div>
    <div class="main form-outline">
      <section>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-xl-6">
              <div class="row align-items-center mt-4">
                <div class="col">
                  <div class="input-group">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-user fa-1x"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Student ID"
                      v-model="form.studentId"
                      required
                    />
                    <small class="col-12 text-left ml-4">Please provied student id (#919)</small>
                    <small class="col-12 text-left ml-4 text-danger">{{error.studentId}}</small>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <div class="input-group">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-user fa-1x"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      v-model="form.studentName"
                    />
                    <small class="col-12 text-left ml-4 text-danger">{{error.studentName}}</small>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <div class="input-group">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-phone fa-1x"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                      v-model="form.phoneNumber"
                    />
                    <small class="col-12 text-left ml-4 text-danger">{{error.phoneNumber}}</small>
                  </div>
                </div>
              </div>
              <div class="row text-left mt-4">
                <div class="col">
                  <div class="form-check form-check-inline">
                    <b-form-radio-group
                      v-model="form.gender"
                      :options="options"
                      class="mb-3"
                      value-field="item"
                      text-field="name"
                      disabled-field="notEnabled"
                    ></b-form-radio-group>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <div class="input-group">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-envelope fa-1x"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="form.email"
                    />
                    <small class="col-12 text-left ml-4 text-danger">{{error.email}}</small>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <div class="input-group">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-lock fa-1x"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      v-model="form.password"
                    />
                    <small class="col-12 text-left ml-4 text-danger">{{error.password}}</small>
                  </div>
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <div class="input-group">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-square-o fa-stack-2x"></i>
                      <i class="fa fa-lock fa-1x"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      v-model="confirmPassword"
                    />
                    <small class="col-12 text-left ml-4 text-danger">{{error.confirmPassword}}</small>
                  </div>
                </div>
              </div>
              <div class="row text-left mt-4">
                <div class="col">
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >I accept the terms and use</b-form-checkbox>
                  <button class="btn btn-primary mt-4" @click.prevent.stop="register">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Loader v-if="loader"></Loader>
      <b-alert show variant="success" v-if="endResult">{{endResult}}</b-alert>
    </div>
  </div>
</template>

<script>
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
        confirmPassword: ""
      },
      form: {
        studentId: 919584288,
        studentName: "",
        email: "",
        password: "",
        phoneNumber: "",
        gender: "Male"
      },
      loader: false,
      confirmPassword: "",
      status: "not_accepted",
      endResult: "",
      options: [
        { item: "Male", name: "Male" },
        { item: "Female", name: "Female" }
      ]
    };
  },
  methods: {
    register() {
      this.loader = true;
      this.error = null;

      if (!this.form.studentId) {
        this.error.studentId = "please enter student id";
      }
      if (!this.form.studentName) {
        this.error.studentName = "please enter student name";
      }
      if (!this.form.email) {
        this.error.email = "please enter email";
      }
      if (!this.form.password) {
        this.error.password = "please enter password";
      }
      // if (!this.form.dob) {
      //   this.error.dob = "please enter dob";
      // }
      if (!this.form.phoneNumber) {
        this.error.phoneNumber = "please enter phone number";
      }
      if (this.error) {
        this.loader = false;
        return;
      }
      console.log("In functio")
      console.log(this.form)

      this.$http
        .post("registration", this.form)
        .then(response => {
          this.loader = false;
          this.endResult = "Student register successfully...!!";
        })
        .catch(error => {
          this.loader = false;
          this.endResult = error.response
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
  .Registration-form {
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

  .Registration-form {
    margin-top: 50%;
  }
}

.Registration-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.Registration-main-text h2 {
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
