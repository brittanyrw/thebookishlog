<template>
  <div class="overall-statistics">
    <div class="main">
      <OverallStatistics :book-info="books" :tbr-info="tbr" />
    </div>
  </div>
</template>

<script>
import { bookData } from "@/data/books";
import { tbrData } from "@/data/tbr";
import OverallStatistics from "@/components/OverallStatistics.vue";

export default {
  name: "Stats",
  components: {
    OverallStatistics
  },
  data() {
    return {
      books: bookData,
      tbr: tbrData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap");
</style>
