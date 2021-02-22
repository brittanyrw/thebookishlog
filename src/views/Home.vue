<template>
  <div class="books">
    <div class="main">
      <OverallBookStatistics :book-info="books" />
      <Books :book-info="books" />
    </div>
  </div>
</template>

<script>
import { bookData } from "@/data/books.js";
import Books from "@/components/Books.vue";
import OverallBookStatistics from "@/components/Statistics/OverallBookStatistics.vue";

export default {
  name: "Home",
  components: {
    Books,
    OverallBookStatistics
  },
  data() {
    return {
      books: bookData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
