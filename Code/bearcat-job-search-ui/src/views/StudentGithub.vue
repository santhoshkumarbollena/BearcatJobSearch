<template>
  <div>
      <div class="mt-2">
   
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
     
   
  },
  methods: {}
};
</script>

<style scoped>
</style>