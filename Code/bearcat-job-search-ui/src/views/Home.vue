<template>
  <div>
    <NavBar />
    <SubHeader :breadcrumb="breadcrumb" />
    <b-row>
      <b-col sm="8" md="8">
        <b-nav-form>
          <b-form-input
            class="mr-sm-2 ml-3"
            placeholder="Search for jobs"
          ></b-form-input>
          <b-button variant="info" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-col>
      <b-col sm="4" md="4">
        <ChatList />
      </b-col>
    </b-row>

    <div v-if="loader">
      <Loader v-if="loader"></Loader>
    </div>
    <div v-else>
      <hr class="mt-3 mb-3" />
      <b-row>
        <b-col sm="4" lg="4" v-for="job in jobs" :key="job.id">
          <b-card :title="job.jobTitle" class="mb-2 card-bg">
            <b-card-text>Description: {{ job.jobDescription }}</b-card-text>
            <b-card-text>Employment Type: {{ job.employmentType }}</b-card-text>
            <b-card-text>Salary: ${{ job.salary }}</b-card-text>

            <b-button href="#" variant="primary">Apply</b-button>
          </b-card>
        </b-col>
      </b-row>
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
