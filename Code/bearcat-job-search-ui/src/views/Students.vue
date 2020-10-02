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
          <b-form-input id="search" class="mr-2 ml-5" placeholder="Search for Students"></b-form-input>
          <b-button variant="info" class="my-2 my-sm-0" @click="findStudents()" type="submit">
            <i class="fa fa-search mr-1"></i>
            Search
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </div>
    <hr class="mt-3 mb-3" />
    <b-container fluid>
      <b-row>
        <b-col sm="12" lg="12">
          <h1>Students</h1>
        </b-col>
      </b-row>
    </b-container>

    <div class="card">
      <el-table
        class="table-responsive table-flush"
        
        :data="projects"
      >
        <el-table-column min-width="50px">
          <template>
            <div class="media align-items-center">
              <a href="#" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="require(`../assets/student.jpg`)" />
              </a>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Student ID" min-width="200px" prop="name" sortable>
          <template v-slot="{row}">
            <div class="media align-items-center">
              <div class="media-body mb-4 mt-4">
                <span class="font-weight-600 name mb-0 text-sm">{{row.studentId}}</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Student Name" prop="budget" min-width="140px" sortable>
          <template v-slot="{row}">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="font-weight-600 name mb-0 text-sm">{{row.studentName}}</span>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Email" prop="budget" min-width="140px" sortable>
          <template v-slot="{row}">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="font-weight-600 name mb-0 text-sm">{{row.email}}</span>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="DOB" min-width="190px">
          <template v-slot="{row}">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="font-weight-600 mb-0 text-sm">{{row.dob}}</span>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="Contact Number" prop="completion" min-width="260px" sortable>
          <template v-slot="{row}">
            <div class="d-flex align-items-center">
              <span class="completion mr-2">{{row.phoneNumber}}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="card-footer py-4 d-flex justify-content-end">
        <base-pagination v-model="currentPage" :total="50"></base-pagination>
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
      studentId: localStorage.getItem("id"),
      search: "",
      students: [],
      breadcrumb: [
        {
          text: "Students",
          href: "/students"
        }
      ],
      proj: [],
      projects: [
        {
          studentId: 9348756,
          studentName: "jobapp",
          email: "jobapp@gmail.com",
          dob: "2020-09-28T05:00:00.000Z",
          phoneNumber: "2345678767",
          gender: "Male",
          ugUniversity: null,
          ugDegree: null,
          ugDepartment: null,
          ugScore: null,
          graduateUniversity: null,
          graduateDegree: null,
          graduateDepartment: null,
          graduateScore: null,
          experienceYears: null,
          expectedSalary: null,
          employementType: null,
          gitHubUrl: null,
          linkedInUrl: null,
          created_at: "2020-09-28 13:09:12",
          updated_at: "2020-09-28 13:09:12"
        },
        {
          studentId: "919111111",
          studentName: "testing",
          email: "testing@gmail.com",
          dob: "2020-07-02T05:00:00.000Z",
          phoneNumber: "1234567890",
          gender: "Male",
          ugUniversity: null,
          ugDegree: null,
          ugDepartment: null,
          ugScore: null,
          graduateUniversity: null,
          graduateDegree: null,
          graduateDepartment: null,
          graduateScore: null,
          experienceYears: null,
          expectedSalary: null,
          employementType: null,
          gitHubUrl: null,
          linkedInUrl: null,
          created_at: "2020-07-03 13:57:03",
          updated_at: "2020-07-03 13:57:03"
        }
      ],
      currentPage: 1
    };
  },
  mounted() {
    this.loader = false;

    this.$http
      .get("student/getAllStudents/")
      .then(response => {
        this.students = response.data;

        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });
  },
  methods: {
    findStudents() {
      this.search = document.getElementById("search").value;
      this.getStudents();
    },
    getStudents() {
      this.$http
        .get("student/getAllStudents/")
        .then(response => {
          this.students = response.data;

          this.loader = false;
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;
        });
    }
  }
};
</script>

<style scoped>
</style>