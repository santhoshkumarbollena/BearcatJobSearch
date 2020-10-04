<template>
  <div v-if="loader">
    <Loader v-if="loader"></Loader>
  </div>
  <div v-else>
    <div class="container">
      <div class="row">
        <div class="offset-md-4">
          <h1>Student Info</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 v-center p-4">
          <div class="offset-md-2" style="position:relative; top:10px; right:100px">
            <label>
              <h4>Download Resume</h4>
            </label>
          </div>
          <div class="offset-md-4" style="position:relative; right:210px">
             <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-downlaod"
            >Here</base-button> 
          </div>
        </div>
        <div class="col-md-4 v-center p-4">
          <div class="offset-md-2" style="position:relative; top:10px;">
            <label for="example-url-input" class="col-form-label form-control-label">
              <h4>Student ID:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:23px;">
            <label>
              <h4>Student Name:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:36px;">
            <label>
              <h4>Email:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:52px;">
            <label>
              <h4>Date of Birth:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:67px;">
            <label>
              <h4>Contact Number:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:81px;">
            <label>
              <h4>Gender:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:95px;">
            <label>
              <h4>UG University:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:109px;">
            <label>
              <h4>UG Degree:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:123px;">
            <label>
              <h4>UG Department:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:137px;">
            <label>
              <h4>UG Score:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:151px;">
            <label>
              <h4>Graduate University:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:165px;">
            <label>
              <h4>Graduate Degree:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:173px;">
            <label>
              <h4>Graduate Department:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:178px;">
            <label>
              <h4>Graduate Score:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:188px;">
            <label>
              <h4>Experience in Years:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:200px;">
            <label>
              <h4>Expected Salary:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:215px;">
            <label>
              <h4>Employement Type:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:229px;">
            <label>
              <h4>GitHub URL:</h4>
            </label>
          </div>
          <div class="offset-md-2" style="position:relative; top:240px;">
            <label>
              <h4>LinkedIn URL:</h4>
            </label>
          </div>
        </div>
        <div class="col-md-4 v-center p-4">
          <base-input type="text" v-model="form.studentId" readonly></base-input>

          <base-input type="text" v-model="form.studentName" readonly></base-input>
          <base-input type="text" v-model="form.email" readonly></base-input>
          <base-input type="text" v-model="form.dob" readonly></base-input>
          <base-input type="text" v-model="form.phoneNumber" readonly></base-input>
          <base-input type="text" v-model="form.gender" readonly></base-input>
          <base-input type="text" v-model="form.ugUniversity" readonly></base-input>
          <base-input type="text" v-model="form.ugDegree" readonly></base-input>
          <base-input type="text" v-model="form.ugDepartment" readonly></base-input>
          <base-input type="text" v-model="form.ugScore" readonly></base-input>
          <base-input type="text" v-model="form.graduateUniversity" readonly></base-input>
          <base-input type="text" v-model="form.graduateDegree" readonly></base-input>
          <base-input type="text" v-model="form.graduateDepartment" readonly></base-input>
          <base-input type="text" v-model="form.graduateScore" readonly></base-input>
          <base-input type="text" v-model="form.experienceYears" readonly></base-input>
          <base-input type="text" v-model="form.expectedSalary" readonly></base-input>
          <base-input type="text" v-model="form.employementType" readonly></base-input>
          <base-input type="text" v-model="form.gitHubUrl" readonly></base-input>
          <base-input type="text" v-model="form.linkedInUrl" readonly></base-input>

          <router-link to="/students">
            <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-arrow-left"
            >Go-Back</base-button>
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
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "element-ui";

export default {
  name: "Students",
  components: {
    ChatList,
    SubHeader,
    Loader,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu
  },
  data() {
    return {
      loader: true,
      userRole: localStorage.getItem("role"),
      search: "",
      students: [],
      form: {
        studentId: "",
        studentName: ""
      },
      currentPage: 1
    };
  },
  mounted() {
    this.loader = false;
    let url = document.URL;
    const path_id = url.substring(url.lastIndexOf("/") + 1);
    this.$http
      .get("student/getStudent/" + path_id)
      .then(response => {
        this.students = response.data;
        console.log("=================" + this.students.email);
        this.form.studentId = this.students.studentId;
        this.form.studentName = this.students.studentName;
        this.form.email = this.students.email;
        this.form.dob = this.students.dob;
        this.form.phoneNumber = this.students.phoneNumber;
        this.form.gender = this.students.gender;
        this.form.ugUniversity = this.students.ugUniversity;
        this.form.ugDegree = this.students.ugDegree;
        this.form.ugDepartment = this.students.ugDepartment;
        this.form.ugScore = this.students.ugScore;
        this.form.graduateUniversity = this.students.graduateUniversity;
        this.form.graduateDegree = this.students.graduateDegree;
        this.form.graduateDepartment = this.students.graduateDepartment;
        this.form.graduateScore = this.students.graduateScore;
        this.form.experienceYears = this.students.experienceYears;
        this.form.expectedSalary = this.students.expectedSalary;
        this.form.employementType = this.students.employementType;
        this.form.gitHubUrl = this.students.gitHubUrl;
        this.form.linkedInUrl = this.students.linkedInUrl;

        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });
  },
  methods: {}
};
</script>

<style scoped>
</style>