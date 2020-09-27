<template>
  <div>
    <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    breadcrumb: Array
  },
  data() {
    return {};
  }
};
</script>
