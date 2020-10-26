<template>
  <div>
    <div v-if="loader">
      <Loader v-if="loader"></Loader>
    </div>
    <div id="main-background" v-else>
      <SubHeader :breadcrumb="breadcrumb" />
      <div class="row p-3 border m-4">
        <div class="col-md-6 v-center border-right">
          <h3>Job Info</h3>
          <label for="jobId" class="font-weight-bold">Job Id:</label>
          <base-input
            type="text"
            placeholder="Job ID"
            addon-left-icon="fa fa-id-card"
            v-model="jobDetails.id"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Job Name:</label>
          <base-input
            type="text"
            placeholder="Job Title"
            addon-left-icon="fa fa-id-badge"
            v-model="jobDetails.jobTitle"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Job Description:</label>
          <textarea
            class="form-control mb-3"
            placeholder="Job Description"
            v-model="jobDetails.jobDescription"
            readonly
            rows="4"
          >
          </textarea>

          <label for="jobId" class="font-weight-bold">Job Type:</label>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="jobDetails.employmentType"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Salary:</label>
          <base-input
            type="number"
            placeholder="Salary"
            addon-left-icon="fa fa-money"
            v-model="jobDetails.salary"
            readonly
          ></base-input>
        </div>

        <div class="col-md-6 v-center" v-if="jobDetails.admin_user">
          <h3>Organization Info</h3>

          <label for="jobId" class="font-weight-bold">Recruiter Name:</label>
          <base-input
            type="text"
            placeholder="Job Title"
            addon-left-icon="fa fa-id-badge"
            v-model="jobDetails.admin_user.userName"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Organization Name:</label>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="jobDetails.admin_user.userOrganization"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold"
            >Organization Description:</label
          >
          <textarea
            class="form-control mb-3"
            placeholder="Job Description"
            v-model="jobDetails.admin_user.userOrganizationDescription"
            readonly
            rows="4"
          >
          </textarea>

          <label for="jobId" class="font-weight-bold">Email:</label>
          <base-input
            type="text"
            placeholder="email"
            addon-left-icon="fa fa-envelope"
            v-model="jobDetails.admin_user.email"
            readonly
          ></base-input>

          <label for="jobId" class="font-weight-bold">Phone Number:</label>
          <base-input
            type="text"
            placeholder="email"
            addon-left-icon="fa fa-phone-square"
            v-model="jobDetails.admin_user.phoneNumber"
            readonly
          ></base-input>
        </div>

        <div class="col-md-12">
          <hr class="mt-3 mb-2" />
        </div>

        <div class="col-md-2 v-center"></div>
        <div class="col-md-8 v-center">
          <h3>Student Profile</h3>
          <small class="text-danger mb-2">
            ***Note: Please check and update your profile before apply job!
          </small>
          <base-input
            type="text"
            placeholder="Student Id"
            addon-left-icon="fa fa-id-card"
            v-model="form.studentId"
            readonly
          ></base-input>
          <small v-if="error.studentId" class="col-12 text-left text-danger">{{
            error.studentId
          }}</small>
          <base-input
            type="text"
            placeholder="Student Name"
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
            type="email"
            placeholder="Email Id"
            addon-left-icon="fa fa-envelope"
            v-model="form.email"
            required
          ></base-input>
          <small v-if="error.email" class="col-12 text-left text-danger">{{
            error.email
          }}</small>

          <base-input
            type="number"
            placeholder="Phone Number"
            addon-left-icon="fa fa-phone"
            v-model="form.phoneNumber"
            required
          ></base-input>
          <small
            v-if="error.phoneNumber"
            class="col-12 text-left text-danger"
            >{{ error.phoneNumber }}</small
          >
          <base-input
            type="gender"
            placeholder="Gender"
            addon-left-icon="fa fa-user"
            v-model="form.gender"
            required
          ></base-input>
          <small v-if="error.gender" class="col-12 text-left text-danger">{{
            error.gender
          }}</small>
          <base-input
            type="text"
            placeholder="UG University"
            addon-left-icon="fa fa-university"
            v-model="form.ugUniversity"
            required
          ></base-input>
          <small
            v-if="error.ugUniversity"
            class="col-12 text-left text-danger"
            >{{ error.ugUniversity }}</small
          >
          <base-input
            type="text"
            placeholder="UG Degree"
            addon-left-icon="fa fa-university"
            v-model="form.ugDegree"
            required
          ></base-input>
          <small v-if="error.ugdegree" class="col-12 text-left text-danger">{{
            error.ugdegree
          }}</small>
          <base-input
            type="text"
            placeholder="UG Department"
            addon-left-icon="fa fa-university"
            v-model="form.ugDepartment"
            required
          ></base-input>
          <small v-if="error.ugdepart" class="col-12 text-left text-danger">{{
            error.ugdepart
          }}</small>
          <base-input
            type="number"
            placeholder="UG Score"
            addon-left-icon="fa fa-university"
            v-model="form.ugScore"
            required
          ></base-input>
          <small v-if="error.ugscore" class="col-12 text-left text-danger">{{
            error.ugscore
          }}</small>
          <base-input
            type="text"
            placeholder="Graduate University"
            addon-left-icon="fa fa-university"
            v-model="form.graduateUniversity"
            required
          ></base-input>
          <small v-if="error.graduniv" class="col-12 text-left text-danger">{{
            error.graduniv
          }}</small>
          <base-input
            type="text"
            placeholder="Graduate Degree"
            addon-left-icon="fa fa-university"
            v-model="form.graduateDegree"
            required
          ></base-input>
          <small v-if="error.gradegre" class="col-12 text-left text-danger">{{
            error.gradegre
          }}</small>
          <base-input
            type="text"
            placeholder="Graduate Department"
            addon-left-icon="fa fa-university"
            v-model="form.graduateDepartment"
            required
          ></base-input>
          <small v-if="error.graddepart" class="col-12 text-left text-danger">{{
            error.ugdepart
          }}</small>
          <base-input
            type="number"
            placeholder="Graduate Score"
            addon-left-icon="fa fa-university"
            v-model="form.graduateScore"
            required
          ></base-input>
          <small
            v-if="error.graduateScore"
            class="col-12 text-left text-danger"
            >{{ error.graduateScore }}</small
          >
          <base-input
            type="number"
            placeholder="Experience (in yrs)"
            addon-left-icon="fa fa-user"
            v-model="form.experienceYears"
            required
          ></base-input>
          <small v-if="error.experience" class="col-12 text-left text-danger">{{
            error.experience
          }}</small>
          <base-input
            type="number"
            placeholder="Expected Salary"
            addon-left-icon="fa fa-money"
            v-model="form.expectedSalary"
            required
          ></base-input>
          <small v-if="error.expsalary" class="col-12 text-left text-danger">{{
            error.expsalary
          }}</small>
          <input type="file" />
          <base-input
            type="text"
            class="mt-3"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employementType"
            required
          ></base-input>
          <small v-if="error.emptype" class="col-12 text-left text-danger">{{
            error.emptype
          }}</small>

          <base-input
            type="text"
            class="mt-3"
            placeholder="GitHub Url"
            addon-left-icon="fa fa-briefcase"
            v-model="form.gitHubUrl"
            required
          ></base-input>
          <small v-if="error.emptype" class="col-12 text-left text-danger">{{
            error.emptype
          }}</small>

          <base-input
            type="text"
            class="mt-3"
            placeholder="LinkedIn Url"
            addon-left-icon="fa fa-briefcase"
            v-model="form.linkedInUrl"
            required
          ></base-input>
          <small v-if="error.emptype" class="col-12 text-left text-danger">{{
            error.emptype
          }}</small>
          <base-button
            type="primary"
            class="btn pull-left mt-3 btn-icon btn-primary"
            icon="fa fa-save"
            @click.prevent.stop="applyJob(jobDetails)"
            >Apply Job</base-button
          >
          <router-link to="/home">
            <base-button
              type="primary"
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
  name: "ApplyJob",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      loader: true,
      studentId: localStorage.getItem("id"),
      breadcrumb: [
        {
          text: "Jobs",
          href: "#/home"
        },
        {
          text: "Apply Job",
          href: ""
        }
      ],
      jobDetails: {
        id: "",
        jobTitle: "",
        jobDescription: "",
        employmentType: "",
        salary: ""
      },
      form: {
        studentId: "",
        jobTitle: "",
        jobDescription: "",
        employementType: "",
        salary: "",
        ugUniversity: "",
        ugDegree: "",
        ugDepartment: "",
        ugScore: "",
        graduateUniversity: "",
        graduateDegree: "",
        graduateDepartment: "",
        graduateScore: "",
        experienceYears: "",
        expectedSalary: "",
        employementType: ""
      },
      error: {
        studentId: "",
        jobTitle: "",
        jobDescription: "",
        employementType: "",
        salary: "",
        ugUniversity: "",
        ugDegree: "",
        ugDepartment: "",
        ugScore: "",
        graduateUniversity: "",
        graduateDegree: "",
        graduateDepartment: "",
        graduateScore: "",
        experienceYears: "",
        expectedSalary: "",
        employementType: ""
      }
    };
  },
  mounted() {
    this.loader = true;
    let url = document.URL;
    const path_id = url.substring(url.lastIndexOf("/") + 1);
    this.$http
      .get("job/getJob/" + path_id)
      .then(response => {
        if (response.data && response.data.length) {
          this.jobDetails = response.data[0];
          this.loader = false;
        }
      })
      .catch(error => {
        this.loader = false;
        this.endResult = error.response
          ? error.response.data.error.message
          : error;
      });

    this.$http
      .get("student/getStudent/" + this.studentId)
      .then(response => {
        this.form = response.data;
      })
      .catch(error => {
        console.log("error");
      });
  },

  methods: {
    applyJob(job) {
      this.loader = true;
      this.$http
        .post(
          "studentApplication/StudentApplyJob/" + this.studentId + "/" + job.id,
          this.form
        )
        .then(response => {
          this.$bvToast.toast(
            `You have successfully applied for ${job.jobTitle}`,
            {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success"
            }
          );
          this.loader = false;
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;

          this.$bvToast.toast(`Error while applying job`, {
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
