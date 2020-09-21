<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>

export default {
  name: "SubHeader",
  data() {
    return {
      items: [
        {
          text: "List All Jobs",
          href: "/home"
        }
      ]
    };
  }
};
</script>
