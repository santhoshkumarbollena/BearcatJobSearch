<template>
  <div>
      <div class="mt-2">
    <b-card-group columns>
        <div v-for="githubrepo in githubRepos" :key="githubrepo.id">
      <b-card border-variant="primary"
         align="left">
          <b-card-header header-bg-variant="info"
        header-text-variant="white" >{{githubrepo.name}}</b-card-header>
          <b-card-text v-if="githubrepo.description">Description:  {{githubrepo.description}}</b-card-text>
        <b-card-text>GitHub Url: <a href=""> {{githubrepo.html_url}}</a></b-card-text>
        
       
      </b-card>
    </div>
      
    </b-card-group>
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
      githubRepos:[],
      userName:"santhoshkumarbollena",
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
        studentName: ""
      },
      currentPage: 1
    };
  },
  mounted() {
      this.$http2.get(`https://api.github.com/users/santhoshkumarbollena/repos`)
      .then(response => {
      console.log(response.data)
        this.githubRepos = response.data;
      })
      .catch(error => {
        console.log("error",error)
      });
   
  },
  methods: {}
};
</script>

<style scoped>
</style>