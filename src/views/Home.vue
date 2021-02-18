<template>
  <div class="home">
    <div class="sidebar">
      <h1>Bookish Log</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, iste vel
        consequuntur aut excepturi ratione, eum minus fugit perferendis sequi
        quidem voluptas aliquid. Qui asperiores quasi provident molestias, quis
        ex?
      </p>
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
}

.sidebar {
  background-color: $black;
  color: white;
  padding: 20px;
}
</style>
