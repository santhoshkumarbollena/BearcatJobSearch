<template>
  <div>
    <NavBar />
    <SubHeader :breadcrumb="breadcrumb" />
    <div>
      <ChatList />
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            class="mr-2 ml-3"
            placeholder="Search for jobs"
          ></b-form-input>
          <b-button variant="info" class="my-2 my-sm-0" type="submit">
            <i class="fa fa-search mr-1"></i>
            Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </div>

    <div v-if="loader">
      <Loader v-if="loader"></Loader>
    </div>
    <div v-else>
      <hr class="mt-3 mb-3" />
      <b-container fluid>
        <b-row>
          <b-col sm="4" lg="4" v-for="job in jobs" :key="job.id">
            <b-card
              :title="job.jobTitle"
              class="mb-2 m-auto card-1"
              :img-src="require(`../assets/frontend.png`)"
              img-alt="logo"
              img-top
              style="max-width: 22rem;"
            >
              <b-card-text class="mb-0">
                Description:
                <span class="fw-650 ml-2"> {{ job.jobDescription }}</span>
              </b-card-text>
              <b-card-text class="mb-0">
                Employment-Type:
                <span class="fw-650 ml-1">{{ job.employmentType }}</span>
              </b-card-text>
              <b-card-text>
                Salary: <span class="fw-650 ml-1">${{ job.salary }}</span>
              </b-card-text>
              <b-button href="#" variant="primary">Apply</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/Nav/NavBar";
import SubHeader from "../components/Nav/SubHeader";
import ChatList from "../components/Chat/ChatList";
import Loader from "../components/utils/Loader.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      loader: true,
      breadcrumb: [
        {
          text: "Jobs List",
          href: "/home"
        }
      ],
      jobs: [],
      error: null
    };
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
</style>
