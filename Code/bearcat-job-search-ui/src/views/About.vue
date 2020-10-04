<template>
  <div>
     <SubHeader :breadcrumb="breadcrumb" />
    <h1>This is about page</h1>
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
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>