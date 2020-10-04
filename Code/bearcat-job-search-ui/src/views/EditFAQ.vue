<template>
  <div>
     <SubHeader :breadcrumb="breadcrumb" />
    <h1>This is Edit Faq page</h1>
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
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>