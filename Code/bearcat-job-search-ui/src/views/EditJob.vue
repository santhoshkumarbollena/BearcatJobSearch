<template>
 <div id="main-background">
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center p-4 ">
          <h1 class="text-center">EDIT JOBS</h1>
          <base-input
            type="text"
            placeholder="Job Description"
            addon-left-icon="fa fa-file"
            v-model="form.description"
            required
          ></base-input>
           <small v-if="error.description" class="col-12 text-left text-danger">{{error.description}}</small>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employment"
            required
          ></base-input>
           <small v-if="error.employment" class="col-12 text-left text-danger">{{error.employment}}</small>
           <base-input
            type="number"
            placeholder="Salary"
            addon-left-icon="fa fa-money"
            v-model="form.salary"
            required
          ></base-input>
            <small v-if="error.salary" class="col-12 text-left text-danger">{{error.salary}}</small>
          <base-button
              type="primary"
              class="btn pull-left mt-3 btn-icon btn-primary"
              icon="fa fa-save"
              @click.prevent.stop="save"
            >Save</base-button>
          <router-link to="/home">
          <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-ban"
            >Cancel</base-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatList from "../components/Chat/ChatList";
import SubHeader from "../components/Nav/SubHeader";
import Loader from "../components/utils/Loader.vue";

export default {
  data() {
    return {
      error: {
        description: "",
        employment: "",
        salary: ""
      },
      form: {
        description: "",
        employment: "",
        salary: ""
      }
    };
  },
  mounted() {
    this.loader = false;
    console.log("In editing job")
  },
  methods: {
     save() {
      this.loader = true;
      this.error = null;
      this.error = {};

      if (!this.form.description) {
        console.log("Error for job description");
        this.error.studentId = "please enter job description";
      }
      if (!this.form.employment) {
        console.log("Error for employment type");
        this.error.studentName = "please enter employment type";
      }

      if (!this.form.salary) {
        console.log("Error for salary");
        this.error.studentName = "please enter salary";
      }

      console.log(Object.keys(this.error).length);
      if (Object.keys(this.error).length) {
        console.log("In error");
        return;
      }

      // this.$http
      //   .post("save", this.form)
      //   .then(response => {
      //     this.endResult = "Saved successfully...!!";
      //     alert("Saved succesfully");
      //     window.location = "http://localhost:8080/#/home";
      //   })
      //   .catch(error => {
      //     this.endResult = error.response
      //       ? error.response.data.error.message
      //       : error;
      //   });
    }
  }
};
</script>

<style scoped>
</style>