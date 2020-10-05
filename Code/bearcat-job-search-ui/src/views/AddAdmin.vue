<template>
  <div id="main-background">
    <SubHeader :breadcrumb="breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 v-center">
          <h1>ADD ADMIN</h1>

          <base-input
            type="text"
            placeholder="User Name"
            addon-left-icon="fa fa-briefcase"
            v-model="form.userName"
            required
          ></base-input>
          <small v-if="error.username" class="col-12 text-left text-danger">{{
            error.username
          }}</small>
          <base-input
            type="text"
            placeholder="User Organization"
            addon-left-icon="fa fa-money"
            v-model="form.userOrganization"
            required
          ></base-input>
          <small
            v-if="error.userOrganization"
            class="col-12 text-left text-danger"
            >{{ error.userOrganization }}</small
          >
          <base-input
            type="text"
            placeholder="User Organization Description"
            addon-left-icon="fa fa-money"
            v-model="form.userOrganizationDescription"
            required
          ></base-input>
          <small
            v-if="error.userOrganizationDescription"
            class="col-12 text-left text-danger"
            >{{ error.userOrganizationDescription }}</small
          >
          <base-input
            type="text"
            placeholder="Phone Number"
            addon-left-icon="fa fa-money"
            v-model="form.phoneNumber"
            required
          ></base-input>
          <small v-if="error.phone" class="col-12 text-left text-danger">{{
            error.phone
          }}</small>
          <base-input
            type="text"
            placeholder="Email"
            addon-left-icon="fa fa-money"
            v-model="form.email"
            required
          ></base-input>
          <small v-if="error.email" class="col-12 text-left text-danger">{{
            error.email
          }}</small>
          <base-input
            type="password"
            placeholder="Password"
            addon-left-icon="fa fa-money"
            v-model="form.password"
            required
          ></base-input>
          <small v-if="error.password" class="col-12 text-left text-danger">{{
            error.email
          }}</small>
          <base-input addon-left-icon="fa fa-calendar">
            <flat-picker
              slot-scope="{ focus, blur }"
              @on-open="focus"
              @on-close="blur"
              :config="{ allowInput: true }"
              class="form-control datepicker"
              v-model="form.dob"
              placeholder="DOB"
            ></flat-picker>
          </base-input>
          <small v-if="error.dob" class="col-12 text-left text-danger">{{
            error.dob
          }}</small>
          <b-form-radio-group
            v-model="form.gender"
            :options="options"
            class="mb-3"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
          <base-button
            type="primary"
            class="btn pull-left mt-3 btn-icon btn-primary"
            icon="fa fa-save"
            @click.prevent.stop="add"
            >Add Admin</base-button
          >
          <router-link to="/home">
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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "addadmin",
  components: {
    ChatList,
    SubHeader,
    Loader,
    flatPicker
  },
  data() {
    return {
      breadcrumb: [
        {
          text: "Jobs",
          href: "#/home"
        },
        {
          text: "Add Admin",
          href: ""
        }
      ],
      error: {
        userid: "",
        username: "",
        userOrganization: "",
        userOrganizationDescription: "",
        phone: "",
        email: ""
      },
      options: [
        { item: "Male", name: "Male" },
        { item: "Female", name: "Female" }
      ],
      form: {}
    };
  },
  methods: {
    add() {
      this.error = {};
      if (!this.form.userName) {
        console.log("Error for userName:");
        this.error.username = "please enter user name";
      }
      if (!this.form.userOrganization) {
        console.log("Error for userName:");
        this.error.userOrganization = "please enter user organization";
      }

      if (!this.form.userOrganizationDescription) {
        console.log("Error for userName:");
        this.error.userOrganizationDescription =
          "please enter user organization description";
      }

      if (!this.form.phoneNumber) {
        console.log("Error for phoneNumber");
        this.error.phoneNumber = "please enter phone number";
      }

      if (!this.form.email) {
        console.log("Error for phoneNumber");
        this.error.email = "please enter email";
      }

      if (!this.form.password) {
        console.log("Error for phoneNumber");
        this.error.password = "please enter password";
      }

      if (!this.form.dob) {
        console.log("Error for dob");
        this.error.dob = "please enter dob";
      }

      if (!this.form.gender) {
        console.log("Error for dob");
        this.error.gender = "please enter gender";
      }

      if (Object.keys(this.error).length > 0) {
        return;
      }

      this.form.role = "admin";
      this.$http
        .post("admin/create-admin", this.form)
        .then(response => {
          console.log(response.data);
          this.$router.go(-1);
          this.$root.$bvToast.toast(`Admin added sucessfully`, {
            title: "Success",
            autoHideDelay: 5000,
            variant: "success"
          });
        })
        .catch(error => {
          console.log("error");
        });
    }
  }
};
</script>

<style scoped>
</style>
