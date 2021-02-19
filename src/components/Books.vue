<template>
  <div class="book-list">
    <h4>Books Read</h4>
    <ul class="books">
      <li class="book" v-for="(book, index) in filterReadBooks" :key="index">
        <span v-if="book.fav" :class="[{ fav: book.fav }]"
          ><font-awesome-icon icon="star" class="fav-icon"
        /></span>
        <img
          class="book-cover-img"
          :class="[{ 'e-book': book.type == 'E-Book' }]"
          :alt="`${book.title} book cover`"
          :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import slugMixin from "@/mixins/slugMixin.js";

export default {
  props: {
    bookInfo: Array
  },
  mixins: [slugMixin],
  computed: {
    filterReadBooks() {
      return this.bookInfo.filter(item => item.dateFinished);
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
    position: relative;
    @media screen and (min-width: 668px) {
      width: 250px;
    }
    .fav {
      position: absolute;
      top: 4%;
      right: 20%;
      .fav-icon {
        font-size: 30px;

        path {
          fill: $yellow;
          stroke: $black;
          stroke-width: 23px;
        }
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
