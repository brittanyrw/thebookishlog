<template>
  <div class="books-list">
    <div class="read-book-list">
      <h2>Books Read</h2>
      <ul class="books">
        <li
          class="book"
          v-for="(book, index) in filter('finished')"
          :key="index"
          :class="[{ 'e-book': book.medium == 'E-Book' }]"
        >
          <img
            class="book-cover-img"
            :alt="`${book.title} book cover`"
            :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
          />
        </li>
      </ul>
    </div>
    <div class="current-book-list">
      <h2>Started Reading</h2>
      <ul>
        <li v-for="(book, index) in filter('started')" :key="index">
          <p>{{ book.title }} by {{ book.author[0]}}</p>
        </li>
      </ul>
    </div>
    <div class="dnf-book-list">
      <h2>DNFed Books</h2>
      <p>"Did Not Finish" books</p>
      <ul>
        <li v-for="(book, index) in filter('dnf')" :key="index">
          <p>{{ book.title }} by {{ book.author[0] }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.js";

export default {
  props: {
    bookInfo: Array
  },
  mixins: [mixins],
  methods: {
    filter(status) {
      return this.bookInfo.filter(item => item.progress == status);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";

.book-cover-img {
  width: 100%;
  display: inline-block;
  max-height: 350px;

  @media screen and (min-width: 668px) {
    max-height: 300px;
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
  margin-top: 40px;
  .read-book-list {
    padding: 20px;
  }

  .current-book-list {
    padding: 20px;
    background-color: $black;
    h2 {
      color: $pink;
    }
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 30px auto;
      li {
        flex-grow: 1;
        background-color: $pink;
        padding: 10px;
        text-align: center;
        margin: 10px;
        border: 2px solid $pink;
        -webkit-box-shadow: 5px 5px 0 $pink;
        box-shadow: 9px 9px 0 $pink;
        border-radius: 7px;
        color: $black;
        outline: 3px solid $black;
        p {
          margin: 0;
        }
      }
    }
  }

  .dnf-book-list {
    padding: 20px;
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      li {
        background-color: $black;
        padding: 10px;
        text-align: center;
        margin: 10px;
        border: 2px solid $black;
        -webkit-box-shadow: 5px 5px 0 $black;
        box-shadow: 9px 9px 0 $black;
        border-radius: 7px;
        color: $pink;
        outline: 3px solid $pink;
        p {
          margin: 0;
        }
      }
    }
  }

  .book {
    text-align: center;
    width: 48%;
    position: relative;
    margin-right: 10px;
    margin-bottom: 40px;
    @media screen and (min-width: 668px) {
      width: 250px;
    }
    &.e-book {
    width: 200px; 
    img {
      max-height: 250px;
      width: auto;
    }
  }
  }

    

  .book:nth-child(2n + 1) {
    transform: rotate(-2deg);
  }

  .book:nth-child(3n + 2) {
    transform: rotate(2deg);
  }
  .book:nth-child(5n + 3) {
    transform: rotate(-4deg);
  }

  .book:nth-child(7n + 5) {
    transform: rotate(6deg);
  }

  .book:nth-child(11n + 7) {
    transform: rotate(4deg);
  }
}
</style>
