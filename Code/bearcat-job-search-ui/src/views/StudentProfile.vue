<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center p-4 ">
          <h1 class="text-center">STUDENT PROFILE</h1>
          <label for="jobId" class="font-weight-bold">Student Id:</label>
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
          <label for="jobId" class="font-weight-bold">Student Name:</label>
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
          <label for="jobId" class="font-weight-bold">Email Id:</label>
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
          <label for="jobId" class="font-weight-bold">Phone Number:</label>
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
          <label for="jobId" class="font-weight-bold">Gender:</label>
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
          <label for="jobId" class="font-weight-bold">UG University:</label>
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
          <label for="jobId" class="font-weight-bold">UG Degree:</label>
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
          <label for="jobId" class="font-weight-bold">UG Department:</label>
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
          <label for="jobId" class="font-weight-bold">UG Score:</label>
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
          <label for="jobId" class="font-weight-bold">Graduate University:</label>
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
          <label for="jobId" class="font-weight-bold">Graduate Degree:</label>
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
          <label for="jobId" class="font-weight-bold">Graduate Department:</label>
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
          <label for="jobId" class="font-weight-bold">Graduate Score:</label>
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
          <label for="jobId" class="font-weight-bold">Experience (in yrs):</label>
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
          <label for="jobId" class="font-weight-bold">Expected Salary:</label>
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
          <label for="jobId" class="font-weight-bold">Resume (Format: .docx):</label><br/>
          <input
                        type="file"
                        id="file1"
                        name="file1"
                        ref="file1"
                        class="border"
                        v-on:change="handleFile1Upload()"
                      /><br/>
          <label for="jobId" class="font-weight-bold mt-3">Employment Type:</label>
          <base-input
            type="text"
            placeholder="Employment Type"
            addon-left-icon="fa fa-briefcase"
            v-model="form.employementType"
            required
          ></base-input>
          <small v-if="error.emptype" class="col-12 text-left text-danger">{{
            error.emptype
          }}</small>
          <label for="jobId" class="font-weight-bold">GitHub Url:</label>
          <base-input
            type="text"
            placeholder="GitHub Url"
            addon-left-icon="fa fa-briefcase"
            v-model="form.gitHubUrl"
            required
          ></base-input>
          <small v-if="error.emptype" class="col-12 text-left text-danger">{{
            error.emptype
          }}</small>
          <label for="jobId" class="font-weight-bold">LinkedIn Url:</label>
          <base-input
            type="text"
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
            @click.prevent.stop="save"
            >Save</base-button
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
  name: "StudentProfile",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      jobs: [],
      file1: "",
      studentId: localStorage.getItem("id"),
      breadcrumb: [
        {
          text: "Profile",
          href: "/"
        }
      ],
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
        employementType: "",
        linkedInUrl:"",
        resume:""
      }
    };
  },
  mounted() {
    console.log("On mounted getting student info");
    this.getDetails();
  },
  methods: {
    getDetails() {
      this.$http
        .get("student/getStudent/" + this.studentId)
        .then(response => {
          this.form = response.data;
        })
        .catch(error => {
          console.log("error");
        });
    },
    handleFile1Upload() {
      this.file1 = this.$refs.file1.files;
    },
    uploadResume() {
      let formData = new FormData();
      if (this.file1 && this.file1.length) {
        for (let i = 0; i < this.file1.length; i++) {
          let newfile = this.file1[i];
          formData.append("file1", newfile);
        }
        console.log(formData)

        this.$http3
          .post(
            `student/upload-resume/${this.studentId}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((response) => {
            this.file1 = [];
            document.getElementById("file1").value = "";
            this.$root.$bvToast.toast(response.data.message, {
              title: "Success",
              variant: "success",
              autoHideDelay: 5000,
            });
          })
          .catch((error) => {
            this.$bvToast.toast(error.response.data.error.message, {
              title: "Failure",
              variant: "danger",
              autoHideDelay: 5000,
            });
          });
      } else {
        this.$bvToast.toast("please choose the file to add attachment", {
          title: "Warning",
          variant: "warning",
          autoHideDelay: 5000,
        });
      }
    },
    save() {
      const file = document.getElementById("file1").value;
      console.log(file)
      const fileLen = file.length;
      const lastValue = file.substring(fileLen - 4, fileLen);
      console.log("this.form", this.form); //update/student/
      if (lastValue == 'docx')
      {
      this.form.resume = file.substring(file.lastIndexOf("\\")+1)
      this.$http
        .patch("student/update/student/" + this.studentId, this.form)
        .then(response => {
          console.log(response.data);
          this.getDetails();
          this.$root.$bvToast.toast(`Student updated sucessfully`, {
            title: "Success",
            autoHideDelay: 5000,
            variant: "success"
          });
        })
        .catch(error => {
          console.log("error");
        });
        this.uploadResume();
      }
      else{
           this.$bvToast.toast("upload valid resume file format (.docx)", {
              title: "Failure",
              variant: "danger",
              autoHideDelay: 5000,
            });
        }
    }
  }
};
</script>

<style scoped>
</style>
