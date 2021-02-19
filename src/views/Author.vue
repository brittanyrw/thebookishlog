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
        LINKS HERE
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
      <div class="statistics"></div>
      <Authors :author-info="authors" />
    </div>
  </div>
</template>

<script>
// import BookData from "@/data/bookData.js";
import Authors from "@/components/Authors.vue";
import AuthorData from "@/data/authorData.js";

export default {
  name: "Author",
  components: {
    Authors
  },
  data() {
    return {
      // books: [],
      authors: []
    };
  },
  methods: {
    // bookData(books) {
    //   console.log(books.val());
    //   this.books = books.val();
    // },
    authorData(authors) {
      console.log(authors.val());
      this.authors = authors.val();
    }
  },
  mounted() {
    // BookData.getAll().on("value", this.bookData);
    AuthorData.getAll().on("value", this.authorData);
  }
};
</script>

<style lang="scss" scoped>
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
  .sidebar-navigation {
    align-self: center;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr 0.5fr;
  }
}
</style>
