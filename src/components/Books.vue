<template>
  <div class="book-list">
    <h4>Books List</h4>
    <ul class="books">
      <li class="book" v-for="(book, index) in books" :key="index">
        <img
          class="book-cover-img"
          :class="[{ 'e-book': book.type == 'E-Book' }]"
          :alt="`${book.title} book cover`"
          :src="require(`@/assets/${slug(book.title)}.png`)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BookData from "../data/bookData";

export default {
  data() {
    return {
      books: []
    };
  },
  methods: {
    slug(title) {
      return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/ /g, ":")
        .replace(/ /g, "'")
        .replace(/[^\w-]+/g, "");
    },
    bookData(books) {
      let bookList = [];
      books.forEach(book => {
        let key = book.key;
        let data = book.val();
        bookList.push({
          key: key,
          title: data.title,
          type: data.type
        });
      });

      this.books = bookList;
    }
  },
  mounted() {
    BookData.getAll().on("value", this.bookData);
  }
};
</script>

<style lang="scss">
.book-cover-img {
  width: 100%;
  display: inline-block;
  max-height: 350px;

  @media screen and (min-width: 668px) {
    max-height: 300px;
    width: auto;
  }
  &.e-book {
    max-height: 200px;
    width: auto;
  }
}

.books {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .book {
    text-align: center;
    width: 48%;
    @media screen and (min-width: 668px) {
      width: 250px;
    }
  }

  .book:nth-child(2n + 1) img {
    transform: rotate(-2deg);
  }

  .book:nth-child(3n + 2) img {
    transform: rotate(2deg);
  }
  .book:nth-child(5n + 3) img {
    transform: rotate(-4deg);
  }

  .book:nth-child(7n + 5) img {
    transform: rotate(6deg);
  }

  .book:nth-child(11n + 7) img {
    transform: rotate(4deg);
  }
}
</style>
