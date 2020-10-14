<template>
 <div id="main-background">
   <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center p-4 ">
          <h1 class="text-center">STUDENT PROFILE</h1>
           <base-input
            type="text"
            placeholder="Student Id"
            addon-left-icon="fa fa-id-card"
            v-model="form.studentId"
            readonly
          ></base-input>
           <small v-if="error.studentId" class="col-12 text-left text-danger">{{error.studentId}}</small>
          <base-input
            type="text"
            placeholder="Student Name"
            addon-left-icon="fa fa-user"
            v-model="form.studentName"
            required
          ></base-input>
           <small v-if="error.studentName" class="col-12 text-left text-danger">{{error.studentName}}</small>
          <base-input
            type="email"
            placeholder="Email Id"
            addon-left-icon="fa fa-envelope"
            v-model="form.email"
            required
          ></base-input>
           <small v-if="error.email" class="col-12 text-left text-danger">{{error.email}}</small>
           
            <base-input
            type="number"
            placeholder="Phone Number"
            addon-left-icon="fa fa-phone"
            v-model="form.phoneNumber"
            required
          ></base-input>
            <small v-if="error.phoneNumber" class="col-12 text-left text-danger">{{error.phoneNumber}}</small>
            <base-input
            type="gender"
            placeholder="Gender"
            addon-left-icon="fa fa-user"
            v-model="form.gender"
            required
          ></base-input>
            <small v-if="error.gender" class="col-12 text-left text-danger">{{error.gender}}</small>
            <base-input
            type="text"
            placeholder="UG University"
            addon-left-icon="fa fa-university"
            v-model="form.ugUniversity"
            required
          ></base-input>
            <small v-if="error.ugUniversity" class="col-12 text-left text-danger">{{error.ugUniversity}}</small>
            <base-input
            type="text"
            placeholder="UG Degree"
            addon-left-icon="fa fa-university"
            v-model="form.ugDegree"
            required
          ></base-input>
            <small v-if="error.ugdegree" class="col-12 text-left text-danger">{{error.ugdegree}}</small>
            <base-input
            type="text"
            placeholder="UG Department"
            addon-left-icon="fa fa-university"
            v-model="form.ugDepartment"
            required
          ></base-input>
            <small v-if="error.ugdepart" class="col-12 text-left text-danger">{{error.ugdepart}}</small>
            <base-input
            type="number"
            placeholder="UG Score"
            addon-left-icon="fa fa-university"
            v-model="form.ugScore"
            required
          ></base-input>
            <small v-if="error.ugscore" class="col-12 text-left text-danger">{{error.ugscore}}</small>
            <base-input
            type="text"
            placeholder="Graduate University"
            addon-left-icon="fa fa-university"
            v-model="form.graduateUniversity"
            required
          ></base-input>
            <small v-if="error.graduniv" class="col-12 text-left text-danger">{{error.graduniv}}</small>
            <base-input
            type="text"
            placeholder="Graduate Degree"
            addon-left-icon="fa fa-university"
            v-model="form.graduateDegree"
            required
          ></base-input>
            <small v-if="error.gradegre" class="col-12 text-left text-danger">{{error.gradegre}}</small>
            <base-input
            type="text"
            placeholder="Graduate Department"
            addon-left-icon="fa fa-university"
            v-model="form.graduateDepartment"
            required
          ></base-input>
            <small v-if="error.graddepart" class="col-12 text-left text-danger">{{error.ugdepart}}</small>
            <base-input
            type="number"
            placeholder="Graduate Score"
            addon-left-icon="fa fa-university"
            v-model="form.graduateScore"
            required
          ></base-input>
            <small v-if="error.graduateScore" class="col-12 text-left text-danger">{{error.graduateScore}}</small>
            <base-input
            type="number"
            placeholder="Experience (in yrs)"
            addon-left-icon="fa fa-user"
            v-model="form.experienceYears"
            required
          ></base-input>
            <small v-if="error.experience" class="col-12 text-left text-danger">{{error.experience}}</small>
            <base-input
            type="number"
            placeholder="Expected Salary"
            addon-left-icon="fa fa-money"
            v-model="form.expectedSalary"
            required
          ></base-input>
            <small v-if="error.expsalary" class="col-12 text-left text-danger">{{error.expsalary}}</small>
            <input type="file"/>
            <base-input
            type="text"
            class="mt-3"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employementType"
            required
          ></base-input>
            <small v-if="error.emptype" class="col-12 text-left text-danger">{{error.emptype}}</small>
           
            <base-input
            type="text"
            class="mt-3"
            placeholder="GitHub Url"
            addon-left-icon="fa fa-briefcase"
            v-model="form.gitHubUrl"
            required
          ></base-input>
            <small v-if="error.emptype" class="col-12 text-left text-danger">{{error.emptype}}</small>
            
            <base-input
            type="text"
            class="mt-3"
            placeholder="LinkedIn Url"
            addon-left-icon="fa fa-briefcase"
            v-model="form.linkedInUrl"
            required
          ></base-input>
            <small v-if="error.emptype" class="col-12 text-left text-danger">{{error.emptype}}</small>
          <base-button
              type="primary"
              class="btn pull-left mt-3 btn-icon btn-primary"
              icon="fa fa-save"
              @click.prevent.stop="save"
            >Save</base-button>
          <router-link to="/home">
          <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-ban"
            >Cancel</base-button>
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
  name: "StudentProfile",
   components: {
   ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      jobs:[],
       studentId: localStorage.getItem("id"),
        breadcrumb: [
        {
          text: "Profile",
          href: "#/StudentProfile"
        }
      ],
      error: {
        studentId:"",
        jobTitle:"",
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
        graduateScore:"",
        experienceYears:"",
        expectedSalary:"",
        employementType:""
      },
      form: {
        studentId:"",
        jobTitle:"",
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
        graduateScore:"",
        experienceYears:"",
        expectedSalary:"",
        employementType:""
      }
    };
  },
  mounted() {
    console.log("On mounted getting student info")
 this.$http
      .get("student/getStudent/" + this.studentId)
      .then(response => {
        this.form = response.data;
        
      })
      .catch(error => {
        console.log("error")
      });
       
  },
  methods: {
  save(){
    console.log("this.form",this.form)//update/student/
    this.$http
      .patch("student/update/student/" + this.studentId,this.form)
      .then(response => {
        console.log(response.data)
        this.$root.$bvToast.toast(
            `Student updated sucessfully`,
            {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success"
            }
          );
        
      })
      .catch(error => {
        console.log("error")
      });
    
  }
    
  }
};
</script>

<style scoped>
</style>
