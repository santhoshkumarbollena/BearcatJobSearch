<template>
  <div>
    <div v-if="loader">
      <Loader v-if="loader"></Loader>
    </div>
    <div v-else>
      <SubHeader :breadcrumb="breadcrumb" />
      <div class="mt-2 p-3 m-2">
        <b-card-group columns>
          <div v-for="githubrepo in githubRepos" :key="githubrepo.id">
            <b-card border-variant="primary" align="left">
              <div class="corner-ribbon top-left orange">GitHub</div>
              <b-card-header
                header-bg-variant="info"
                header-text-variant="white"
                >{{ githubrepo.name }}
              </b-card-header>
              <b-card-text v-if="githubrepo.description"
                >Description: {{ githubrepo.description }}</b-card-text
              >
              <b-card-text>
                GitHub Url:
                <a :href="githubrepo.html_url" target="blank">{{
                  githubrepo.html_url
                }}</a>
              </b-card-text>
            </b-card>
          </div>
        </b-card-group>
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
      githubRepos: [],
      userName: this.$route.params.githubUserId,
      students: [],
      breadcrumb: [
        {
          text: "Students",
          href: "#/students"
        },
        {
          text: "Student Info",
          href: "#/student-info/" + localStorage.getItem("id")
        },
        {
          text: "GitHub Projects",
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
    this.$http2
      .get(`https://api.github.com/users/${this.userName}/repos`)
      .then(response => {
        console.log(this.userName);
        console.log(response.data);
        this.githubRepos = response.data;
        this.loader = false;
      })
      .catch(error => {
        console.log("error", error);
        this.loader = false;
      });
  },
  methods: {}
};
</script>

<style scoped>
.corner-ribbon {
  width: 50px;
  font-size: 14px;
  position: absolute;
  text-align: center;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Different positions */

.corner-ribbon.top-left {
  top: 15px;
  left: 0px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.corner-ribbon.black {
  background: #333;
}
.corner-ribbon.grey {
  background: #999;
}
.corner-ribbon.blue {
  background: #39d;
}
.corner-ribbon.green {
  background: #2c7;
}
.corner-ribbon.turquoise {
  background: #1b9;
}
.corner-ribbon.purple {
  background: #95b;
}
.corner-ribbon.red {
  background: #e43;
}
.corner-ribbon.orange {
  background: #e82;
}
.corner-ribbon.yellow {
  background: #ec0;
}
</style>