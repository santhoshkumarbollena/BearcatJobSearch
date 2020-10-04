<template>
  <div v-if="loader">
    <Loader v-if="loader"></Loader>
  </div>
  <div v-else>
    <div>
      <SubHeader :breadcrumb="breadcrumb" />
      <div>
        <ChatList />
        <router-link :to="{ name: 'add-job' }">
          <b-button variant="info" v-if="userRole == 'admin'" class="float-right mr-2">
            <i class="fa fa-plus-square mr-1" /> Add Job
          </b-button>
        </router-link>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input class="mr-2 ml-5" placeholder="Search for jobs" id="search"></b-form-input>
            <b-button
              variant="info"
              class="my-2 my-sm-0"
              @click="searchjob()"
              id="btnclick"
              type="submit"
            >
              <i class="fa fa-search mr-1"></i>
              Search
            </b-button>

            <b-button variant="info" class="my-2 my-sm-0" @click="clearSearch()">
              <i class="fa fa-times mr-1"></i>
              Clear
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </div>

      <hr class="mt-3 mb-3" />
      <b-container fluid>
        <b-row>
          <b-col sm="4" lg="4" v-for="(job, index) in jobs" :key="job.id" class="mb-5">
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
              <b-card-text>
                Salary:
                <span class="fw-650 ml-1">${{ job.salary }}</span>
              </b-card-text>

              <b-button variant="info">
                <i class="fa fa-info-circle"></i>
              </b-button>

              <b-button variant="info" v-if="userRole == 'student'" @click="applyJob(job)">
                <i class="fa fa-check-square-o mr-1"></i>
                Apply
              </b-button>

              <router-link :to="{ name: 'edit-job', params: { jobId: job.id } }">
                <b-button variant="info" v-if="userRole == 'admin'">
                  <i class="fa fa-edit mr-1" /> Edit
                </b-button>
              </router-link>
              <b-button variant="danger" v-if="userRole == 'admin'" class="ml-2">
                <i class="fa fa-trash mr-1"></i> Delete
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import SubHeader from "../components/Nav/SubHeader";
import ChatList from "../components/Chat/ChatList";
import Loader from "../components/utils/Loader.vue";

export default {
  name: "Home",
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
      search: "",
      breadcrumb: [
        {
          text: "Jobs",
          href: "/home"
        }
      ],
      jobs: [],
      error: null
    };
  },
  methods: {
    clearSearch() {
      document.getElementById("search").value = "";
      this.search = "";
      this.getJobs();
    },
    applyJob(job) {
      console.log("Apply job" + job.id + " STudent id" + this.studentId);
      //  http://127.0.0.1:3006/api/v1/studentApplication/StudentApplyJob/919583579/1
      this.$http
        .get(
          "studentApplication/StudentApplyJob/" + this.studentId + "/" + job.id
        )
        .then(response => {
          console.log(response.data);
          this.loader = false;
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;
        });
    },
    searchjob() {
      console.log("In search");
      this.search = document.getElementById("search").value;
      this.getJobs();
    },
    getJobs() {
      this.$http
        .get("job/searchJob" + "?search=" + this.search)
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
    }
    // searchjob() {
    //   this.search = document.getElementById("search").value;
    //   this.$http
    //     .get(
    //       "job/searchJob" +
    //         this.studentId +
    //         "?search/" +
    //         this.search
    //     )
    //     .then(response => {
    //       this.jobs = response.data;
    //       this.loader = false;
    //     })
    //     .catch(error => {
    //       this.loader = false;
    //       this.error = error.response ? error.response.data.error.message
    //         : error;
    //     });
    // }
  },
  created() {
    this.$http
      .get("job/getAllJobs", this.credentials)
      .then(response => {
        this.jobs = response.data;
        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });
  }
};
</script>

<style scoped>
.card-bg {
  background: #eee;
  color: black;
}

img {
  max-height: 170px;
  min-height: 170px;
}
</style>
