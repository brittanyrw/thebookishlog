<template>
  <div class="overall-statistics">
    <div class="main">
      <DedicationsStats :book-info="books" />
    </div>
  </div>
</template>

<script>
import { bookData } from "@/data/books";
import DedicationsStats from "@/components/DedicationsStats.vue";

export default {
  name: "Stats",
  components: {
    DedicationsStats
  },
  data() {
    return {
      books: bookData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap");
</style>
