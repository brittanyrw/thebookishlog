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
import BookData from "@/data/bookData.js";
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
      books: []
    };
  },
  methods: {
    bookData(books) {
      this.books = books.val();
    }
  },
  mounted() {
    BookData.getAll().on("value", this.bookData);
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");

.home {
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 668px) {
    height: 100vh;
    grid-template-columns: 250px 1fr;
  }
}

.main {
  padding: 20px;
  border: 10px solid $black;
  border-top: 0;
}

.main::before {
  background: linear-gradient(
    to right,
    $yellow 16.66%,
    $orange 16.66%,
    $orange 33.32%,
    $red 33.32%,
    $red 49.98%,
    $green 49.98%,
    $green 66.64%,
    $blue 66.64%,
    $blue 83.3%,
    $purple 83.3%
  );
  position: absolute;
  content: "";
  height: 20px;
  right: 0;
  left: 0;
  top: 0;
}

.sidebar {
  background-color: $black;
  color: white;
  padding: 20px;
  h1 {
    font-family: "Abril Fatface", cursive;
  }
}
</style>
