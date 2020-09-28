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
          <b-form-input
            class="mr-2 ml-5"
            placeholder="Search for applied jobs"
          ></b-form-input>
          <b-button variant="info" class="my-2 my-sm-0" type="submit">
            <i class="fa fa-search mr-1"></i>
            Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </div>
    <hr class="mt-3 mb-3" />
    <b-container fluid>
      <b-row>
        <b-col sm="12" lg="12">
          <h1>This is faq page</h1>
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
      ]
    };
  },
  mounted() {
    this.loader = false;
  },
  methods: {}
};
</script>

<style scoped>
</style>