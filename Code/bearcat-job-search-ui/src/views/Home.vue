<template>
  <div>
    <NavBar />
    <SubHeader />

    <div v-if="loader">
      <Loader v-if="loader"></Loader>
    </div>
    <div v-else>
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
import Loader from "../components/utils/Loader.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    SubHeader,
    Loader
  },
  data() {
    return {
      loader: true,
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