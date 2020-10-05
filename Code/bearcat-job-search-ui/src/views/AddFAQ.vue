<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center">
          <h1>Add FAQ</h1>
          <label for="faqque" class="font-weight-bold">FAQ Question:</label>
          <base-input
            type="text"
            placeholder="Question"
            v-model="form.faqQuestion"
            required
          ></base-input>
          <small v-if="error.faqQuestion" class="col-12 text-left text-danger">{{
            error.faqQuestion
          }}</small>

          <label for="faqans" class="font-weight-bold">FAQ Answer:</label>
          <textarea
            class="form-control mb-3"
            placeholder="Answer"
            v-model="form.faqAnswer"
            required
            rows="2"
          >
          </textarea>
          <small
            v-if="error.faqAnswer"
            class="col-12 text-left text-danger"
            >{{ error.faqAnswer }}</small
          >

          <label for="category" class="font-weight-bold">Category:</label>
          <base-input
            type="text"
            placeholder="Category"
            v-model="form.faqCategory"
            required
          ></base-input>
          <small
            v-if="error.faqCategory"
            class="col-12 text-left text-danger"
            >{{ error.faqCategory }}</small
          >

          <label for="role" class="font-weight-bold">Role:</label>
          <base-input
            type="text"
            placeholder="Role"
            v-model="form.role"
            required
          ></base-input>
          <small v-if="error.role" class="col-12 text-left text-danger">{{
            error.role
          }}</small>

          <base-button
            type="primary"
            class="btn pull-left mt-3 btn-icon btn-primary"
            icon="fa fa-save"
            @click.prevent.stop="add"
            >Add FAQ</base-button
          >
          <router-link to="/about">
            <base-button
              type="danger"
              class="btn pull-right mt-3 btn-icon btn-primary"
              icon="fa fa-ban"
              >Cancel</base-button
            >
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

export default {
  name: "addjob",
  components: {
    ChatList,
    SubHeader,
    Loader
  },
  data() {
    return {
      breadcrumb: [
        {
          text: "Add FAQ",
          href: "#/home"
        },
      ],
      error: {
        faqQuestion: "",
        faqAnswer: "",
        faqCategory: "",
        role: ""
      },
      form: {
        faqQuestion: "",
        faqAnswer: "",
        faqCategory: "",
        role: ""
      }
    };
  },
  methods: {
    add() {
      this.loader = true;
      this.error = null;
      this.error = {};

      if (!this.form.faqQuestion) {
        this.error.faqQuestion = "Enter Question";
      }
      if (!this.form.faqAnswer) {
        this.error.faqAnswer = "Enter Answer";
      }

      if (!this.form.faqCategory) {
        this.error.faqCategory = "Enter Category";
      }

      if (!this.form.role) {
        this.error.role = "Enter Role";
      }

      if (Object.keys(this.error).length) {
        console.log("In error");
        return;
      }

      this.$http
        .post("faq/create/faq", this.form)
        .then(response => {
          this.$root.$bvToast.toast(
            `New FAQ added successfully`,
            {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success"
            }
          );

          this.$router.go(-1);
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;

          this.$bvToast.toast("Error while creating new FAQ", {
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
