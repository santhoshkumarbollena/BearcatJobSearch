<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center">
          <h1>EDIT JOBS</h1>
          <label for="jobId" class="font-weight-bold">Job Id:</label>
          <base-input
            type="text"
            placeholder="Job ID"
            addon-left-icon="fa fa-id-card"
            v-model="form.id"
            readonly
          ></base-input>
          <small v-if="error.id" class="col-12 text-left text-danger">{{
            error.id
          }}</small>

          <label for="jobId" class="font-weight-bold">Job Name:</label>
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

          <label for="jobId" class="font-weight-bold">Job Description:</label>
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

          <label for="jobId" class="font-weight-bold">Job Type:</label>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employmentType"
            required
          ></base-input>
          <small
            v-if="error.employmentType"
            class="col-12 text-left text-danger"
            >{{ error.employmentType }}</small
          >

          <label for="jobId" class="font-weight-bold">Salary:</label>
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
            @click.prevent.stop="save"
            >Update</base-button
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
  name: "editjob",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      jobs: [],
      breadcrumb: [
        {
          text: "Jobs",
          href: "#/home"
        },
        {
          text: "Edit Job",
          href: ""
        }
      ],
      error: {
        id: "",
        jobTitle: "",
        jobDescription: "",
        employmentType: "",
        salary: ""
      },
      form: {
        id: "",
        jobTitle: "",
        jobDescription: "",
        employmentType: "",
        salary: ""
      }
    };
  },
  mounted() {
    this.loader = false;
    console.log("In editing job");
    let url = document.URL;
    console.log("this is" + document.URL);
    const path_id = url.substring(url.lastIndexOf("/") + 1);
    this.$http
      .get("job/getJob/" + path_id)
      .then(response => {
        this.jobs = response.data;
        this.loader = false;
        this.form.id = this.jobs.id;
        this.form.jobDescription = this.jobs.jobDescription;
        this.form.jobTitle = this.jobs.jobTitle;
        this.form.employmentType = this.jobs.employmentType;
        this.form.salary = this.jobs.salary;
      })
      .catch(error => {
        this.endResult = error.response
          ? error.response.data.error.message
          : error;
      });
  },
  methods: {
    save() {
      this.loader = true;
      this.error = null;
      this.error = {};

      if (!this.form.jobDescription) {
        console.log("Error for job description");
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
        this.error.jobTitle = "please enter jobTitle";
      }

      if (Object.keys(this.error).length) {
        return;
      }

      this.$http
        .patch("job/update-job/" + this.jobs.id, this.form)
        .then(response => {
          this.$root.$bvToast.toast(
            `${response.data.jobTitle} job updated successfully`,
            {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success"
            }
          );

          this.$router.go(-1);
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;

          this.$root.$bvToast.toast("erroe while updating the job", {
            title: "Error",
            autoHideDelay: 5000,
            variant: "danger"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>
