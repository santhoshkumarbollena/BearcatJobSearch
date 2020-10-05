<template>
  <div>
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="pl-5 pr-5">
      <div class="row">
        <div class="col-md-6 border-right">
          <h1>About Us</h1>
          <p class="my-text">
            At Northwest Missouri State University, we have a career-center
            office were students update their resume in a professional way for
            better opportunities in the job market. But as of now at Northwest,
            we don't have any job portal or job searching application, and every
            time when the recruiters want to hire students they have to reach
            the particular department head at the university. In order to
            communicate with the students and to inform them about the job
            opportunity, the department head has to send the mail to everyone.
          </p>
          <h5>Team Bearcat</h5>
          <ul>
            <li>Anil Bomma</li>
            <li>Prasanna kumar Potnuru</li>
            <li>Yugandhar Mamidi</li>
            <li>Santhosh kumar Bollena</li>
            <li>Sai Chandu Gampa</li>
            <li>Mahender reddy surkanti</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h1 class="text-center mb-5">Ask a question</h1>
          <div class="mt-2">
            <base-input
              type="text"
              placeholder="Ask question ..?"
              v-model="form.faqQuestion"
              required
            ></base-input>
            <small
              v-if="error.faqQuestion"
              class="col-12 text-left text-danger"
            >
              {{ error.faqQuestion }}
            </small>

            <div style="text-align:center;">
              <b-button variant="info" class="mr-2" @click="submitQuestion">
                <i class="fa fa-check mr-1" /> Submit Question
              </b-button>
            </div>

            <div class="mt-4">
              <h5>How to submit?</h5>
              <ul>
                <li>Submit your question.</li>
                <li>Your question will be review by our team.</li>
                <li>If valid question, your question will be answered.</li>
                <li>Sometime repeted question will be deleted.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubHeader from "../components/Nav/SubHeader";
export default {
  name: "About",
  components: {
    SubHeader
  },
  data() {
    return {
      breadcrumb: [
        {
          text: "About Us",
          href: "#/about"
        }
      ],
      form: {},
      error: {}
    };
  },
  mounted() {},
  methods: {
    submitQuestion() {
      this.$http
        .post("faq/create/faq", this.form)
        .then(response => {
          this.$root.$bvToast.toast(
            `Your question has submitted successfully`,
            {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success"
            }
          );

          this.$router.go();
        })
        .catch(error => {
          this.endResult = error.response
            ? error.response.data.error.message
            : error;

          this.$bvToast.toast("Cannot submit the question", {
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
.my-text {
  font-family: system-ui;
  font-weight: 400;
}
</style>
