<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand>
        <span class="f-20">
          Bearcat Job Search
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="m-0">
            <router-link to="/home" active>
              <i class="fa fa-briefcase m-0"></i> Jobs
            </router-link>
          </b-nav-item>

          <b-nav-item class="m-0">
            <router-link to="/careers">
              <i class="fa fa-book m-0"></i> Careers
            </router-link>
          </b-nav-item>

          <b-nav-item class="m-0">
            <router-link to="/faqs">
              <i class="fa fa-question-circle m-0"></i> FAQ's
            </router-link>
          </b-nav-item>

          <b-nav-item class="m-0">
            <router-link to="/about">
              <i class="fa fa-phone-square m-0"></i> About Us
            </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right class="color-white">
            <template v-slot:button-content>
              <i class="fa fa-user-circle mr-1"></i>
              {{ userName }}
            </template>
            <b-dropdown-item disabled>
              <i class="fa fa-user-secret mr-2"></i>
              <span style="text-transform: capitalize;">{{ userRole }}</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <i class="fa fa-cog mr-2"></i>Settings</b-dropdown-item
            >
            <b-dropdown-item @click="logout">
              <i class="fa fa-sign-out mr-2" />Sign Out</b-dropdown-item
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
    return {
      userName: localStorage.getItem("user_name"),
      userRole: localStorage.getItem("role")
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.go();
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

.router-link-active:hover {
  color: #fff !important;
  font-weight: 700;
}
</style>
