<template>
  <div v-if="loader">
    <Loader v-if="loader"></Loader>
  </div>
  <div v-else>
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-8 v-center p-4">
          <div class="offset-md-4">
            <h1>Student Info</h1>
          </div>
        </div>
        <div class="col-md-4 v-center p-4">
          <div class="offset-md-4" style="position:relative;">
            <router-link to="/students">
              <base-button
                type="primary"
                class="btn pull-right mt-3 btn-icon btn-primary"
                icon="fa fa-arrow-left"
              >Back</base-button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 v-center p-4">
          <div class="offset-md-4" style="position:relative; right:210px">
            <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-downlaod"
              @click="downloadAttachment()"
              >Download Resume</base-button
            >
          </div>
          <div class="offset-md-4" style="position:relative; right:210px">
            <router-link
              :to="{
                name: 'student-github',
                params: { githubUserId: githubUserId }
              }"
            >
              <base-button v-if="githubUserId"
                type="primary"
                class="btn pull-right mt-3 btn-icon btn-primary"
                icon="fa fa-downlaod"
                >GitHub Profile</base-button
              >
            </router-link>
          </div>
          <div class="offset-md-4" style="position:relative; right:210px">
            <base-button v-if="this.form.linkedInUrl"
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-downlaod"
              @click="linkedinBtn()"
              >LinkedIn Profile</base-button
            >
          </div>
        </div>
        <div class="col-md-8 v-center p-4">
          <div>
            <div class="form-group row">
              <label for="sid" class="col-md-2 col-form-label form-control-label">ID:</label>
              <div class="col-md-10">
                <base-input id="sid" v-model="form.studentId" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="sname" class="col-md-2 col-form-label form-control-label">Name:</label>
              <div class="col-md-10">
                <base-input id="sname" v-model="form.studentName" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="mail" class="col-md-2 col-form-label form-control-label">Email</label>
              <div class="col-md-10">
                <base-input id="mail" v-model="form.email" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="dob" class="col-md-2 col-form-label form-control-label">DOB:</label>
              <div class="col-md-10">
                <base-input id="dob" v-model="form.dob" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="phone" class="col-md-2 col-form-label form-control-label">Contact:</label>
              <div class="col-md-10">
                <base-input id="phone" v-model="form.phoneNumber" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="sex" class="col-md-2 col-form-label form-control-label">Gender:</label>
              <div class="col-md-10">
                <base-input id="sex" v-model="form.gender" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="ugu" class="col-md-2 col-form-label form-control-label">UG University:</label>
              <div class="col-md-10">
                <base-input id="ugu" v-model="form.ugUniversity" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="ugd" class="col-md-2 col-form-label form-control-label">UG Degree:</label>
              <div class="col-md-10">
                <base-input id="ugd" v-model="form.ugDegree" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="ugdep" class="col-md-2 col-form-label form-control-label">UG Department:</label>
              <div class="col-md-10">
                <base-input id="ugdep" v-model="form.ugDepartment" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="ugs" class="col-md-2 col-form-label form-control-label">UG Score:</label>
              <div class="col-md-10">
                <base-input id="ugs" v-model="form.ugScore" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="gu"
                class="col-md-2 col-form-label form-control-label"
              >Graduate University:</label>
              <div class="col-md-10">
                <base-input id="gu" v-model="form.graduateUniversity" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="gd" class="col-md-2 col-form-label form-control-label">Graduate Degree:</label>
              <div class="col-md-10">
                <base-input id="gd" v-model="form.graduateDegree" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="gdep"
                class="col-md-2 col-form-label form-control-label"
              >Graduate Department:</label>
              <div class="col-md-10">
                <base-input id="gdep" v-model="form.graduateDepartment" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="gscore" class="col-md-2 col-form-label form-control-label">Graduate Score:</label>
              <div class="col-md-10">
                <base-input id="gscore" v-model="form.graduateScore" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="exp"
                class="col-md-2 col-form-label form-control-label"
              >Experience in Years:</label>
              <div class="col-md-10">
                <base-input id="exp" v-model="form.experienceYears" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="sal" class="col-md-2 col-form-label form-control-label">Expected Salary:</label>
              <div class="col-md-10">
                <base-input id="sal" v-model="form.expectedSalary" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="etype" class="col-md-2 col-form-label form-control-label">Employee type:</label>
              <div class="col-md-10">
                <base-input id="etype" v-model="form.employementType" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="git" class="col-md-2 col-form-label form-control-label">GitHub URL:</label>
              <div class="col-md-10">
                <base-input id="git" v-model="form.gitHubUrl" readonly></base-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="linkedin" class="col-md-2 col-form-label form-control-label">LinkedIn URL:</label>
              <div class="col-md-10">
                <base-input id="linkedin" v-model="form.linkedInUrl" readonly></base-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-md-4" style="position:relative;">
          <router-link to="/students">
            <base-button
              type="primary"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-arrow-left"
            >Back</base-button>
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
      githubUserId: "",
      students: [],
      breadcrumb: [
        {
          text: "Students",
          href: "#/students"
        },
        {
          text: "Student Info",
          href: ""
        }
      ],
      form: {
        studentId: "",
        studentName: "",
        resume: ""
      },
      currentPage: 1
    };
  },
  async mounted() {
    this.loader = false;
    let url = document.URL;
    const path_id = url.substring(url.lastIndexOf("/") + 1);
   await this.$http
      .get("student/getStudent/" + path_id)
      .then(response => {
        this.students = response.data;
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
        console.log("here is the url: " + this.form.linkedInUrl);
        this.form.resume = this.students.resume;
        this.githubUserId = this.students.gitHubUrl.split("/")[
          this.students.gitHubUrl.split("/").length - 1
        ];

        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });

      console.log("this.githubUserId - ",this.githubUserId)
  },
  methods: {
    linkedinBtn(){
      window.open(this.form.linkedInUrl,'_blank')
      // location.href._blank = this.form.linkedInUrl;
    },
    downloadAttachment() {
      console.log(this.students.studentId);
      this.$http({
        method: "get",
        url: `student/download/resume/${this.students.studentId}`,
        responseType: "arraybuffer"
      })
        .then(response => {
          console.log("response: ", response);
          if (response.data.byteLength) {
            const url = window.URL.createObjectURL(
              new Blob([response.request.response])
            );
            const link = document.createElement("a");
            link.href = url;
            // link.setAttribute("download", `${fileName[1]}`);
            link.download = this.form.resume;
            document.body.appendChild(link);
            link.click();
          } else {
            this.$bvToast.toast("unable to download the file, file not found", {
              title: "Error",
              variant: "danger",
              autoHideDelay: 5000
            });
          }
        })
        .catch(error => {
          this.$bvToast.toast(error.response.data.message, {
            title: "Error",
            variant: "danger",
            autoHideDelay: 5000
          });
        });
    },
    
  }
};
</script>

<style scoped>
</style>