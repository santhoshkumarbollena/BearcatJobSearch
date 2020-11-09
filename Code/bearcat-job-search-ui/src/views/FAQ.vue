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
          <b-form-input id="search" class="mr-2 ml-5" placeholder="Search for FAQ's"></b-form-input>
          <b-button variant="info" class="my-2 my-sm-0" @click="findFAQs()" type="submit">
            <i class="fa fa-search mr-1"></i>
            Search
          </b-button>
          <b-button variant="info" class="my-2 my-sm-0" @click="clearSearch()">
            <i class="fa fa-times mr-1"></i>
            Clear
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </div>
    <hr class="mt-3 mb-3" />

    <b-container fluid>
      <b-row>
        <b-col sm="4" lg="4" v-for="faq in projects" :key="faq.FAQQuestion" class="mb-5">
          <b-card
            :title="faq.FAQQuestion"
            class="mb-2 m-auto card-1"
            :img-src="require(`../assets/Question.png`)"
            img-top
            style="max-width: 22rem;"
          >
            <b-card-text class="mb-0">
              FAQAnswer:
              <span class="fw-650 ml-1">{{ faq.FAQAnswer }}</span>
            </b-card-text>
            <b-card-text class="mb-0">
              category:
              <span class="fw-650 ml-1">{{ faq.category }}</span>
            </b-card-text>
            <b-card-text class="mb-0">
              role:
              <span class="fw-650 ml-1">{{ faq.role }}</span>
            </b-card-text>
            <router-link :to="{ name: 'edit-faq', params: { id: faq.id } }">
              <b-button variant="info" v-if="userRole == 'admin'">
                <i class="fa fa-edit mr-1" /> Edit
              </b-button>
            </router-link>
            <b-button
              variant="danger"
              v-if="userRole == 'admin'"
              class="ml-2"
              @click="deleteFaq(faq.id)"
            >
              <i class="fa fa-trash mr-1"></i> Delete
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ChatList from "../components/Chat/ChatList";
import SubHeader from "../components/Nav/SubHeader";
import Loader from "../components/utils/Loader.vue";

export default {
  name: "FAQ",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      loader: true,
      userRole: localStorage.getItem("role"),
      breadcrumb: [
        {
          text: "FAQ's",
          href: "/faqs"
        }
      ],
      projects: []
    };
  },
  mounted() {
    this.loader = false;
    this.$http
      .get("faq/get/all/faqs")
      .then(response => {
        this.projects = response.data;

        this.loader = false;
      })
      .catch(error => {
        this.loader = false;
        this.error = error.response ? error.response.data.error.message : error;
      });
  },
  methods: {
    findFAQs() {
      this.search = document.getElementById("search").value;
      this.getFAQs();
    },
    getFAQs() {
      this.$http
        .get("faq/search/faq?search=" + this.search)
        .then(response => {
          this.projects = response.data;

          this.loader = false;
        })
        .catch(error => {
          this.loader = false;
          this.error = error.response
            ? error.response.data.error.message
            : error;
        });
    },
    clearSearch() {
      document.getElementById("search").value = "";
      this.search = "";
      this.getFAQs();
    },
    deleteFaq(id) {
      this.$http
        .delete("faq/delete/faq/" + id)
        .then(response => {
          this.$root.$bvToast.toast(`faq deleted successfully`, {
            title: "Success",
            autoHideDelay: 5000,
            variant: "success"
          });

          this.$router.go();
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;

          this.$root.$bvToast.toast("error while deleting the faq", {
            title: "Error",
            autoHideDelay: 5000,
            variant: "danger"
          });
        });
    }
  }
};
</script>

<style scoped>
</style>