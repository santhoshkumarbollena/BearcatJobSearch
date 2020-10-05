<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <b-button
            variant="warning"
            v-if="userRole == 'admin'"
            class="float-right ml-2"
            @click="$router.go(-1)"
          >
            <i class="fa fa-arrow-left" /> Back
          </b-button>
          <router-link :to="{ name: 'edit-job', params: { jobId: form.id } }">
            <b-button
              variant="info"
              v-if="userRole == 'admin'"
              class="float-right"
            >
              <i class="fa fa-edit mr-1" /> Edit
            </b-button>
          </router-link>
        </div>
        <div class="col-md-6 v-center border-right">
          <h3>Job Details Page</h3>
          <label for="jobId" class="font-weight-bold">Job Id:</label>
          <base-input
            type="text"
            placeholder="Job ID"
            addon-left-icon="fa fa-id-card"
            v-model="form.id"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Job Name:</label>
          <base-input
            type="text"
            placeholder="Job Title"
            addon-left-icon="fa fa-id-badge"
            v-model="form.jobTitle"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Job Description:</label>
          <textarea
            class="form-control mb-3"
            placeholder="Job Description"
            v-model="form.jobDescription"
            readonly
            rows="4"
          >
          </textarea>

          <label for="jobId" class="font-weight-bold">Job Type:</label>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employmentType"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Salary:</label>
          <base-input
            type="number"
            placeholder="Salary"
            addon-left-icon="fa fa-money"
            v-model="form.salary"
            readonly
          ></base-input>
        </div>

        <div class="col-md-6 v-center" v-if="form.admin_user">
          <h3>Organization Details</h3>

          <label for="jobId" class="font-weight-bold">Recruiter Name:</label>
          <base-input
            type="text"
            placeholder="Job Title"
            addon-left-icon="fa fa-id-badge"
            v-model="form.admin_user.userName"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Organization Name:</label>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.admin_user.userOrganization"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold"
            >Organization Description:</label
          >
          <textarea
            class="form-control mb-3"
            placeholder="Job Description"
            v-model="form.admin_user.userOrganizationDescription"
            readonly
            rows="4"
          >
          </textarea>

          <label for="jobId" class="font-weight-bold">Email:</label>
          <base-input
            type="text"
            placeholder="email"
            addon-left-icon="fa fa-envelope"
            v-model="form.admin_user.email"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Phone Number:</label>
          <base-input
            type="text"
            placeholder="email"
            addon-left-icon="fa fa-phone-square"
            v-model="form.admin_user.phoneNumber"
            readonly
          ></base-input>
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
      userRole: localStorage.getItem("role"),
      jobs: {},
      breadcrumb: [
        {
          text: "Jobs",
          href: "#/home"
        },
        {
          text: "Job Details",
          href: ""
        }
      ],
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
    let url = document.URL;
    const path_id = url.substring(url.lastIndexOf("/") + 1);
    this.$http
      .get("job/getJob/" + path_id)
      .then(response => {
        if (response.data && response.data.length) {
          this.form = response.data[0];
          this.loader = false;
        }
      })
      .catch(error => {
        this.endResult = error.response
          ? error.response.data.error.message
          : error;
      });
  },
  methods: {}
};
</script>

<style scoped>
</style>
