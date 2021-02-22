<template>
  <div class="home">
    <div class="sidebar">
      <div class="sidebar-top">
        <h1>Bookish Log</h1>
        <p>
          A log of all of the books I have read starting in 2021.
        </p>
      </div>
      <div class="sidebar-navigation">
        <router-link to="/authors"><button>Authors</button></router-link>
      </div>
      <div class="sidebar-bottom">
        <p>
          Created By
          <a href="https://musicalwebdev.com" target="_blank">
            Brittany Walker</a
          >
        </p>
        <h4>Other Logs</h4>
        <ul>
          <li>Theater Log</li>
        </ul>
      </div>
    </div>
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

h1 {
  font-family: "Abril Fatface", cursive;
}
</style>
