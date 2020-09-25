<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand class="f-16">Bearcat Job Search</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="m-0">
            <router-link to="/home" active>
              <i class="fa fa-briefcase m-0"></i> Jobs
            </router-link>
          </b-nav-item>

          <b-nav-item class="m-0">
            <router-link to="/faqs">
              <i class="fa fa-book m-0"></i> Carres
            </router-link>
          </b-nav-item>

          <b-nav-item class="m-0">
            <router-link to="/faqs">
              <i class="fa fa-question-circle m-0"></i> FAQ's
            </router-link>
          </b-nav-item>

          <b-nav-item class="m-0">
            <router-link to="/faqs">
              <i class="fa fa-phone-square m-0"></i> About Us
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown right class="color-white">
            <template v-slot:button-content>
              User
            </template>
            <b-dropdown-item href="#">
              <i class="fa fa-cog mr-1"></i>Settings</b-dropdown-item
            >
            <b-dropdown-item @click="logout">
              <i class="fa fa-sign-out mr-1" />Sign Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
a {
  color: #eee;
  font-weight: 500;
}

a:hover {
  color: #fff !important;
  font-weight: 500;
}

.router-link-active {
  color: #fff !important;
  font-weight: 700;
}
</style>
