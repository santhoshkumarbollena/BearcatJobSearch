<template>
  <div>
    <SubHeader :breadcrumb="breadcrumb" />
    <div>
      <router-link :to="{ name: 'add-faq' }">
        <b-button variant="info" class="float-right mr-2">
          <i class="fa fa-plus-square mr-1" /> Add FAQ
        </b-button>
      </router-link>
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
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>