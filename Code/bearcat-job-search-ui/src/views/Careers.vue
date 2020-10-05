<template>
  <div v-if="loader">
    <Loader v-if="loader"></Loader>
  </div>
  <div v-else>
    <SubHeader :breadcrumb="breadcrumb" />
    <div>
      <ChatList />
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            id="search"
            class="mr-2 ml-5"
            placeholder="Search for applied jobs"
          ></b-form-input>
          <b-button
            variant="info"
            class="my-2 my-sm-0"
            @click="findAppliedjob()"
            type="submit"
          >
            <i class="fa fa-search mr-1"></i>
            Search
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </div>
    <hr class="mt-3 mb-3" />
    <b-container fluid>
      <b-row>
        <b-col sm="12" lg="12">
          <h1>Applied Jobs</h1>
        </b-col>
      </b-row>
    </b-container>

    <hr class="mt-3 mb-3" />
    <b-container fluid>
      <div class="row" v-for="(job, index) in jobs" :key="job.id">
        <div
          class="col-sm-4"
          v-if="job.jobApplications && job.jobApplications.length > 0"
        >
          <b-card
            :title="job.jobTitle"
            class="mb-2 m-auto card-1"
            :img-src="images[(index % 6) + '']"
            img-alt="logo"
            img-top
            style="max-width: 22rem;"
          >
            <b-card-text class="mb-0">
              Description:
              <span class="fw-650 ml-2">{{ job.jobDescription }}</span>
            </b-card-text>
            <b-card-text class="mb-0">
              Employment-Type:
              <span class="fw-650 ml-1">{{ job.employmentType }}</span>
            </b-card-text>
            <b-card-text class="mb-0">
              Salary:
              <span class="fw-650 ml-1">${{ job.salary }}</span>
            </b-card-text>

            <b-card-text
              class="bg-green text-white"
              v-if="job.jobApplications[0].pivot.status == 'Applied'"
            >
              Status:
              <span class="fw-650 ml-1">{{
                job.jobApplications[0].pivot.status
              }}</span>
            </b-card-text>

            <b-card-text
              class="bg-warning text-white"
              v-if="job.jobApplications[0].pivot.status == 'Cancel'"
            >
              Status:
              <span class="fw-650 ml-1">{{
                job.jobApplications[0].pivot.status
              }}</span>
            </b-card-text>

            <router-link
              :to="{ name: 'job-details', params: { jobId: job.id } }"
            >
              <b-button variant="info" class="mr-2">
                <i class="fa fa-info-circle"></i>
              </b-button>
            </router-link>
            <b-button
              variant="danger"
              v-if="userRole == 'student'"
              @click="cancelJobRequest(job.id)"
            >
              <i class="fa fa-check-square-o mr-1"></i>
              cancel
            </b-button>

            <b-button variant="info" v-if="userRole == 'admin'">
              <i class="fa fa-edit mr-1" /> Edit
            </b-button>
            <b-button variant="danger" v-if="userRole == 'admin'">
              <i class="fa fa-trash mr-1"></i> Delete
            </b-button>
          </b-card>
        </div>
      </div>
      <div sm="12" md="12" v-if="jobs.length === 0">
        <div class="alert alert-warning" role="alert">
          You have not applied for any job yet...!!!
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import ChatList from "../components/Chat/ChatList";
import SubHeader from "../components/Nav/SubHeader";
import Loader from "../components/utils/Loader.vue";
export default {
  name: "Careers",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      images: {
        "0": require(`../assets/1.png`),
        "1": require(`../assets/2.jpg`),
        "2": require(`../assets/3.jpg`),
        "3": require(`../assets/4.jpg`),
        "4": require(`../assets/5.jpg`),
        "5": require(`../assets/6.png`)
      },
      loader: true,
      userRole: localStorage.getItem("role"),
      studentId: localStorage.getItem("id"),
      Appliedjobs: "",
      search: "",
      jobs: [],
      breadcrumb: [
        {
          text: "Careers",
          href: "/careers"
        }
      ]
    };
  },
  mounted() {
    this.loader = false;
    this.$http
      .get("studentApplication/getStudentAppliedJobs/" + this.studentId)
      .then(response => {
        this.jobs = response.data;
        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });
  },
  methods: {
    findAppliedjob() {
      this.search = document.getElementById("search").value;
      this.getJobs();
    },
    getJobs() {
      this.$http
        .get(
          "studentApplication/getStudentAppliedJobs/" +
            this.studentId +
            "/search/" +
            this.search
        )
        .then(response => {
          this.jobs = response.data;
          this.loader = false;
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;
        });
    },

    cancelJobRequest(jobId) {
      this.$http
        .get(
          "studentApplication/StudentGotRejected/" +
            this.studentId +
            "/" +
            jobId +
            "/Cancel"
        )
        .then(response => {
          this.$router.go();
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;
        });
    }
  }
};
</script>

<style scoped>
</style>
