<template>
  <div class="date">
    <div class="main">
      <Date />
    </div>
  </div>
</template>

<script>
import Date from "@/components/Date.vue";

export default {
  name: "Dates",
  components: {
    Date
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
