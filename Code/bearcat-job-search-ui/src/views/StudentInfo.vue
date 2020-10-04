<template>
  <div v-if="loader">
    <Loader v-if="loader"></Loader>
  </div>
  <div v-else>
    <SubHeader :breadcrumb="breadcrumb" />
    <div>
      <ChatList />
    </div>
    <hr class="mt-3 mb-3" />

    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center p-4 ">
          <h1 class="text-center">Student Info</h1>
           <base-input
            type="text"
            v-model="form.studentId"
            readonly
          ></base-input>
           
          <base-input
            type="text"
            v-model="form.studentName"
            
          ></base-input>
           
         
           
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
      breadcrumb: [
        {
          text: "Student Information",
          href: "/students"
        }
      ],
      form: {
        studentId:"",
        studentName:"",
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
        console.log("================="+this.students.email);
        this.form.studentId = this.students.studentId;
        this.form.studentName = this.students.studentName;
        //console.log("================="+this.students.studentId);
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