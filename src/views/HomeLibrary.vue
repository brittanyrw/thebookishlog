<template>
  <div class="library">
    <div class="main">
      <Library />
    </div>
  </div>
</template>

<script>
import Library from "@/components/Library.vue";

export default {
  name: "HomeLibrary",
  components: {
    Library
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
