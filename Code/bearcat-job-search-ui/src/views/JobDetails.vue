<template>
  <div>
    <div v-if="loader">
      <Loader v-if="loader"></Loader>
    </div>
    <div id="main-background" v-else>
      <SubHeader :breadcrumb="breadcrumb" />
      <div class="pl-5 pr-5">
        <div class="row">
          <div class="col-md-12">
            <b-button
              variant="warning"
              v-if="userRole == 'admin'"
              class="float-right ml-2"
              @click="$router.go(-1)"
            >
              <i class="fa fa-arrow-left" /> Back
            </b-button>
            <router-link :to="{ name: 'edit-job', params: { jobId: form.id } }">
              <b-button
                variant="info"
                v-if="userRole == 'admin'"
                class="float-right"
              >
                <i class="fa fa-edit mr-1" /> Edit
              </b-button>
            </router-link>
          </div>
          <div class="col-md-6 v-center border-right">
            <h3>Job Details Page</h3>
            <label for="jobId" class="font-weight-bold">Job Id:</label>
            <base-input
              type="text"
              placeholder="Job ID"
              addon-left-icon="fa fa-id-card"
              v-model="form.id"
              readonly
            ></base-input>

            <label for="jobId" class="font-weight-bold">Job Name:</label>
            <base-input
              type="text"
              placeholder="Job Title"
              addon-left-icon="fa fa-id-badge"
              v-model="form.jobTitle"
              readonly
            ></base-input>

            <label for="jobId" class="font-weight-bold">Job Description:</label>
            <textarea
              class="form-control mb-3"
              placeholder="Job Description"
              v-model="form.jobDescription"
              readonly
              rows="4"
            >
            </textarea>

            <label for="jobId" class="font-weight-bold">Job Type:</label>
            <base-input
              type="text"
              placeholder="Employment Type"
              addon-left-icon="fa fa-briefcase"
              v-model="form.employmentType"
              readonly
            ></base-input>

            <label for="jobId" class="font-weight-bold">Salary:</label>
            <base-input
              type="number"
              placeholder="Salary"
              addon-left-icon="fa fa-money"
              v-model="form.salary"
              readonly
            ></base-input>
          </div>

          <div class="col-md-6 v-center" v-if="form.admin_user">
            <h3>Organization Details</h3>

            <label for="jobId" class="font-weight-bold">Recruiter Name:</label>
            <base-input
              type="text"
              placeholder="Job Title"
              addon-left-icon="fa fa-id-badge"
              v-model="form.admin_user.userName"
              readonly
            ></base-input>

            <label for="jobId" class="font-weight-bold"
              >Organization Name:</label
            >
            <base-input
              type="text"
              placeholder="Employment Type"
              addon-left-icon="fa fa-briefcase"
              v-model="form.admin_user.userOrganization"
              readonly
            ></base-input>

            <label for="jobId" class="font-weight-bold"
              >Organization Description:</label
            >
            <textarea
              class="form-control mb-3"
              placeholder="Job Description"
              v-model="form.admin_user.userOrganizationDescription"
              readonly
              rows="4"
            >
            </textarea>

            <label for="jobId" class="font-weight-bold">Email:</label>
            <base-input
              type="text"
              placeholder="email"
              addon-left-icon="fa fa-envelope"
              v-model="form.admin_user.email"
              readonly
            ></base-input>

            <label for="jobId" class="font-weight-bold">Phone Number:</label>
            <base-input
              type="text"
              placeholder="email"
              addon-left-icon="fa fa-phone-square"
              v-model="form.admin_user.phoneNumber"
              readonly
            ></base-input>
          </div>

          <div
            class="col-md-12"
            v-if="userRole == 'admin' && appliedStudents.length > 0"
          >
            <div class="mt-3 mb-2 border-bottom">
              <h4>Applied Students</h4>
            </div>
            <div class="">
              <el-table
                class="table-responsive table-flush"
                :data="appliedStudents"
              >
                <el-table-column>
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <a href="#" class="avatar rounded-circle mr-3">
                        <img
                          alt="Image placeholder"
                          :src="require(`../assets/student.jpg`)"
                        />
                      </a>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Student ID"
                  min-width="200px"
                  prop="name"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <div class="media-body mb-4 mt-4">
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.studentId }}
                        </span>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Student Name"
                  prop="budget"
                  min-width="140px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="media align-items-center">
                      <div class="media-body">
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.studentName }}
                        </span>
                      </div>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column
                  label="Contact Number"
                  prop="completion"
                  min-width="260px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="d-flex align-items-center">
                      <span class="completion mr-2">{{ row.phoneNumber }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column
                  label="Status"
                  prop="completion"
                  min-width="260px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="d-flex align-items-center">
                      <span class="completion mr-2">{{
                        row.pivot.status
                      }}</span>
                    </div>
                  </template>
                </el-table-column>

                <el-table-column label="Action" min-width="260px" sortable>
                  <template v-slot="{ row }">
                    <div class="d-flex align-items-center">
                      <router-link
                        :to="{
                          name: 'student-info',
                          params: { studentId: row.studentId }
                        }"
                      >
                        <base-button type="primary" size="sm">Info</base-button>
                      </router-link>
                      <base-button type="success" class="ml-1" size="sm"
                        >Approve</base-button
                      >
                      <base-button type="danger" size="sm">Decline</base-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div
            class="col-md-12"
            v-if="userRole == 'admin' && appliedStudents.length === 0"
          >
            <div class="mt-3 mb-2 border-bottom">
              <h4>Applied Students</h4>
            </div>
            <div class="alert alert-warning" role="alert">
              No students have applied for this job...!
            </div>
          </div>
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
  name: "editjob",
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
      jobs: {},
      appliedStudents: [],
      breadcrumb: [
        {
          text: "Jobs",
          href: "#/home"
        },
        {
          text: "Job Details",
          href: ""
        }
      ],
      form: {
        id: "",
        jobTitle: "",
        jobDescription: "",
        employmentType: "",
        salary: ""
      }
    };
  },
  mounted() {
    this.loader = true;
    let url = document.URL;
    const path_id = url.substring(url.lastIndexOf("/") + 1);
    this.$http
      .get("job/getJob/" + path_id)
      .then(response => {
        if (response.data && response.data.length) {
          this.form = response.data[0];
        }
      })
      .catch(error => {
        this.endResult = error.response
          ? error.response.data.error.message
          : error;
      });

    this.$http
      .get("studentApplication/get/student/applied/jobs/" + path_id)
      .then(response => {
        if (response.data && response.data.length) {
          this.appliedStudents = response.data[0].jobApplications;
          console.log(this.appliedStudents);
          this.loader = false;
        }
      })
      .catch(error => {
        this.endResult = error.response
          ? error.response.data.error.message
          : error;
        this.loader = false;
      });
  },
  methods: {}
};
</script>

<style scoped>
</style>
