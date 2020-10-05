<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center">
          <h1>EDIT FAQ's</h1>
          <label for="FAQQuestionId" class="font-weight-bold"
            >FAQ Question:</label
          >
          <base-input
            type="text"
            id="FAQQuestionId"
            placeholder="FAQ Question"
            addon-left-icon="fa fa-id-card"
            v-model="form.FAQQuestion"
          ></base-input>
          <small
            v-if="error.FAQQuestion"
            class="col-12 text-left text-danger"
            >{{ error.FAQQuestion }}</small
          >

          <label for="FAQAnswerId" class="font-weight-bold">FAQ Answer:</label>
          <base-input
            type="text"
            id="FAQAnswerId"
            placeholder="FAQ Answer"
            addon-left-icon="fa fa-id-badge"
            v-model="form.FAQAnswer"
            required
          ></base-input>
          <small v-if="error.FAQAnswer" class="col-12 text-left text-danger">{{
            error.FAQAnswer
          }}</small>

          <label for="categoryId" class="font-weight-bold">Category:</label>
          <base-input
            type="text"
            id="categoryId"
            placeholder="Category"
            addon-left-icon="fa fa-id-badge"
            v-model="form.category"
            required
          >
          </base-input>
          <small v-if="error.category" class="col-12 text-left text-danger">{{
            error.category
          }}</small>
          <label for="roleId" class="font-weight-bold">Role:</label>
          <base-input
            type="text"
            id="roleId"
            placeholder="FAQ Answer"
            addon-left-icon="fa fa-id-badge"
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
            @click.prevent.stop="save"
            >Save</base-button
          >
          <router-link to="/faqs">
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
import SubHeader from "../components/Nav/SubHeader";
export default {
  name: "EditFaq",
  components: {
    SubHeader
  },
  data() {
    return {
      faqs: [],
      error: {
        id: "",
        FAQQuestion: "",
        FAQAnswer: "",
        category: ""
      },
      form: {
        id: "",
        FAQQuestion: "",
        FAQAnswer: "",
        category: ""
      },
      breadcrumb: [
        {
          text: "FAQ's",
          href: "#/faqs"
        },
        {
          text: "Edit Faq",
          href: ""
        }
      ]
    };
  },
  mounted() {
    this.loader = false;
    let url = document.URL;
    const path_id = url.substring(url.lastIndexOf("/") + 1);
    this.$http
      .get("faq/get/faqs/" + path_id)
      .then(response => {
        this.faqs = response.data;
        this.loader = false;
        this.form.id = this.faqs.id;
        this.form.FAQQuestion = this.faqs.FAQQuestion;
        this.form.FAQAnswer = this.faqs.FAQAnswer;
        this.form.category = this.faqs.category;
        this.form.role = this.faqs.role;
      })
      .catch(error => {
        this.endResult = error.response
          ? error.response.data.error.message
          : error;
      });
  },
  methods: {
    save() {
      this.$http
        .patch("faq/update/faq/" + this.form.id, this.form)
        .then(response => {
          this.$root.$bvToast.toast(`faq updated successfully`, {
            title: "Success",
            autoHideDelay: 5000,
            variant: "success"
          });

          this.$router.go(-1);
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;

          this.$root.$bvToast.toast("error while updating the faq", {
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