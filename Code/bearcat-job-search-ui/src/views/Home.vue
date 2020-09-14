<template>
  <div>
    <NavBar />
    <SubHeader />
  </div>
</template>

<script>
import NavBar from "../components/Nav/NavBar";
import SubHeader from "../components/Nav/SubHeader";
export default {
  name: "Home",
  components: {
    NavBar,
    SubHeader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>