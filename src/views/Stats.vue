<template>
  <div class="overall-statistics">
    <div class="main">
      <OverallStatistics />
    </div>
  </div>
</template>

<script>
import OverallStatistics from "@/components/OverallStatistics.vue";

export default {
  name: "Stats",
  components: {
    OverallStatistics
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
