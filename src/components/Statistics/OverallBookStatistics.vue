<template>
  <h1>Statistics</h1>
</template>
<script>
import BookData from "../../data/bookData";

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
          title: data.title
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
<style></style>
