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
          <b-button variant="info" class="my-2 my-sm-0" @click="findAppliedjob()" type="submit">
            <i class="fa fa-search mr-1"></i>
            Search</b-button
          >
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
        <b-row>
          <b-col sm="4" lg="4" v-for="job in jobs" :key="job.id">
            <b-card
              :title="job.jobTitle"
              class="mb-2 m-auto card-1"
              :img-src="require(`../assets/frontend.png`)"
              img-alt="logo"
              img-top
              style="max-width: 22rem;"
              v-if="job.jobApplications.length>0"
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

              <b-card-text>
                Status: <span class="fw-650 ml-1">Applied</span>
              </b-card-text>

              <b-button variant="info">
                <i class="fa fa-info-circle"></i
              ></b-button>

              <b-button variant="danger" v-if="userRole == 'student'">
                <i class="fa fa-check-square-o mr-1"></i>
                cancel</b-button
              >

              <b-button variant="info" v-if="userRole == 'admin'">
                <i class="fa fa-edit mr-1" /> Edit</b-button
              >
              <b-button variant="danger" v-if="userRole == 'admin'">
                <i class="fa fa-trash mr-1"></i> Delete</b-button
              >
            </b-card>
          </b-col>
        </b-row>
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
      loader: true,
      userRole: localStorage.getItem("role"),
      studentId : localStorage.getItem("id"),
      Appliedjobs:"",
      search:"",
      jobs : [],
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
      .get("studentApplication/getStudentAppliedJobs/"+this.studentId)
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
      this.search = document.getElementById("search").value
      this.getJobs();
    },
    getJobs()
    {
       this.$http
      .get("studentApplication/getStudentAppliedJobs/"+this.studentId+"/search/"+this.search)
      .then(response => {
        this.jobs = response.data;
        
        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });

    }

  }
};
</script>

<style scoped>
</style>