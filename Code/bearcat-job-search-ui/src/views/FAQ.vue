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
          <b-form-input class="mr-2 ml-5" placeholder="Search for FAQ's"></b-form-input>
          <b-button variant="info" class="my-2 my-sm-0" type="submit">
            <i class="fa fa-search mr-1"></i>
            Search
          </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </div>
    <hr class="mt-3 mb-3" />

    <b-container fluid>
      <b-row>
        <b-col sm="4" lg="4" v-for="faq in projects" :key="faq.FAQQuestion">
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
  methods: {}
};
</script>

<style scoped>
</style>