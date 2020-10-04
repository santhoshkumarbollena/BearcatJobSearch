<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center">
          <h1>ADD JOBS</h1>
          <base-input
            type="text"
            placeholder="Job Title"
            addon-left-icon="fa fa-id-badge"
            v-model="form.jobTitle"
            required
          ></base-input>
          <small v-if="error.jobTitle" class="col-12 text-left text-danger">{{
            error.jobTitle
          }}</small>
          <textarea
            class="form-control mb-3"
            placeholder="Job Description"
            v-model="form.jobDescription"
            required
            rows="4"
          >
          </textarea>
          <small
            v-if="error.jobDescription"
            class="col-12 text-left text-danger"
            >{{ error.jobDescription }}</small
          >
          <base-input
            type="text"
            placeholder="Employment Type (part-time / full-time)"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employmentType"
            required
          ></base-input>
          <small v-if="error.employmentType" class="col-12 text-left text-danger">{{
            error.employmentType
          }}</small>
          <base-input
            type="number"
            placeholder="Salary"
            addon-left-icon="fa fa-money"
            v-model="form.salary"
            required
          ></base-input>
          <small v-if="error.salary" class="col-12 text-left text-danger">{{
            error.salary
          }}</small>
          <base-button
            type="primary"
            class="btn pull-left mt-3 btn-icon btn-primary"
            icon="fa fa-save"
            @click.prevent.stop="add"
            >Save Job</base-button
          >
          <router-link to="/home">
            <base-button
              type="danger"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-ban"
              >Cancel</base-button
            >
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
  name: "addjob",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      breadcrumb: [
        {
          text: "Jobs",
          href: "#/home"
        },
        {
          text: "Add New Job",
          href: ""
        }
      ],
      error: {
        jobTitle: "",
        jobDescription: "",
        employmentType: "",
        salary: ""
      },
      form: {
        jobTitle: "",
        jobDescription: "",
        employmentType: "",
        salary: ""
      }
    };
  },
  methods: {
    add() {
      this.loader = true;
      this.error = null;
      this.error = {};

      if (!this.form.jobDescription) {
        console.log("Error for job jobDescription");
        this.error.jobDescription = "please enter job description";
      }
      if (!this.form.employmentType) {
        console.log("Error for employment type");
        this.error.employmentType = "please enter employment type";
      }

      if (!this.form.salary) {
        console.log("Error for salary");
        this.error.salary = "please enter salary";
      }

      if (!this.form.jobTitle) {
        console.log("Error for jobTitle");
        this.error.jobTitle = "please enter jobtitle";
      }

      if (Object.keys(this.error).length) {
        console.log("In error");
        return;
      }

      this.$http
        .post("job/create-job", this.form)
        .then(response => {
          this.endResult = "Added successfully...!!";
          window.location = "http://localhost:8080/#/home";
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;
        });
    }
  }
};
</script>

<style scoped>
</style>
