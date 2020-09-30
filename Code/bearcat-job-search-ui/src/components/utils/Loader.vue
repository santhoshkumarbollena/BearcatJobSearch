<template>
  <div class="mt-30">
    <b-overlay :show="true" rounded="sm" spinner-variant="primary"></b-overlay>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style scoped>
.mt-30 {
  margin-top: 15%;
}
</style>