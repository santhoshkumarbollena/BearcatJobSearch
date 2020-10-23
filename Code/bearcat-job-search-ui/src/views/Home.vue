<template>
  <div v-if="loader">
    <Loader v-if="loader"></Loader>
  </div>
  <div v-else>
    <div>
      <SubHeader :breadcrumb="breadcrumb" />
      <div>
        <ChatList />
        <router-link :to="{ name: 'add-admin' }">
          <b-button variant="info" v-if="userRole == 'admin'" class="float-right mr-2">
            <i class="fa fa-user-secret mr-1" /> Add Admin
          </b-button>
        </router-link>
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
          <!-- <b-col sm="12">
            <iframe width="560" height="315" src="https://www.linkedin.com/" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-col> -->
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
              <b-card-text class="mb-0">
                Salary:
                <span class="fw-650 ml-1">${{ job.salary }}</span>
              </b-card-text>

              <router-link :to="{ name: 'job-details', params: { jobId: job.id } }">
                <b-button variant="info" class="mr-2">
                  <i class="fa fa-info-circle"></i>
                </b-button>
              </router-link>

              <b-button variant="info" v-if="userRole == 'student'" @click="applyJob(job)">
                <i class="fa fa-check-square-o mr-1"></i>
                Apply
              </b-button>

              <router-link :to="{ name: 'edit-job', params: { jobId: job.id } }">
                <b-button variant="info" v-if="userRole == 'admin'">
                  <i class="fa fa-edit mr-1" /> Edit
                </b-button>
              </router-link>

              <b-button
                variant="danger"
                v-if="userRole == 'admin'"
                class="ml-2"
                @click="showModal(job)"
              >
                <i class="fa fa-trash mr-1"></i> Delete
              </b-button>
            </b-card>
          </b-col>
          <b-modal
            id="delete-job"
            ref="delete-job"
            title="Delete Job"
            @hidden="hideModal"
            @cancel="hideModal"
            @ok="confDeleteJob(deleteJob)"
          >
            <p class="my-4">
              Are you sure you want to delete
              <em
                class="font-weight-bold"
              >"{{ this.deleteJob.jobTitle }}"</em>
              ?
            </p>

            <template v-slot:modal-footer="{ ok, cancel }">
              <b-button variant="success" @click="ok()">Yes</b-button>
              <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
          </b-modal>

          <b-col sm="12" md="12" v-if="jobs.length === 0">
            <div class="alert alert-warning" role="alert">No jobs have posted yet...!!!</div>
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
      error: null,
      deleteJob: {}
    };
  },
  methods: {
    showModal(job) {
      this.deleteJob = job;
      this.$refs["delete-job"].show();
    },
    hideModal() {
      this.deleteJob = {};
      this.$refs["delete-job"].hide();
    },
    confDeleteJob(job) {
      this.$http
        .delete("job/delete-job/" + job.id)
        .then(response => {
          this.$root.$bvToast.toast(
            `${job.jobTitle} job deleted successfully`,
            {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success"
            }
          );

          this.$router.go();
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;

          this.$root.$bvToast.toast("error while updating the job", {
            title: "Error",
            autoHideDelay: 5000,
            variant: "danger"
          });
        });

      this.deleteJob = {};
    },
    clearSearch() {
      document.getElementById("search").value = "";
      this.search = "";
      this.getJobs();
    },
    applyJob(job) {
      this.loader = true;
      this.$http
        .get(
          "studentApplication/StudentApplyJob/" + this.studentId + "/" + job.id
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
    },
    searchjob() {
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
  },
  created() {
    this.$http
      .get("job/getAllJobs", this.credentials)
      .then(response => {
        console.log(" response.data: ", response.data);
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
