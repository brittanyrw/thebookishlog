<template>
  <div class="books-list">
    <div class="read-book-list">
      <div class="header">
        <h2>Books Read</h2>
        <div class="toggle-button-wrapper">
          <input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no"
            id="toggle-text-books"
          />
          <label for="toggle-text-books">Show Books with Text</label>
        </div>
      </div>

      <ul class="books" v-show="toggle === 'no'">
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
          <div
            class="stars"
            :style="`--rating: ${book.rating};`"
            :aria-label="`Rating of this product is ${book.rating} out of 5.`"
          ></div>
        </li>
      </ul>
      <ul class="books text-books" v-show="toggle === 'yes'">
        <li
          class="book"
          v-for="(book, index) in filter('finished')"
          :key="index"
        >
          <img
            class="book-cover-img"
            :alt="`${book.title} book cover`"
            :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
          />

          <div class="text-book-info">
            <p>{{ book.title }} by {{ book.author[0] }}</p>
            <div
              class="stars"
              :style="`--rating: ${book.rating};`"
              :aria-label="`Rating of this product is ${book.rating} out of 5.`"
            ></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="current-book-list">
      <h2>Started Reading</h2>
      <ul>
        <li v-for="(book, index) in filter('started')" :key="index">
          <p class="current-book-title">
            <span :style="`width:${book.pageProgress}%;`">
              {{ book.pageProgress }}%
            </span>
            {{ book.title }} by {{ book.author[0] }}
          </p>
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
import mixins from "@/mixins/mixins.ts";

export default {
  data() {
    return {
      toggle: "no"
    };
  },
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

.stars {
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: 28px;
  font-family: Times;
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      #1f1f1f var(--percent),
      rgba(31, 31, 31, 0.5) var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.header {
  h2 {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
}

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
  .text-books {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    flex-wrap: wrap;
    .text-book {
      padding: 10px;
      margin: 10px;
      border: 1px solid black;
      display: flex;
      img {
        max-height: 100px;
        width: auto;
      }
      p {
        margin: 5px 0;
      }
    }
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
      margin: 30px auto;
      max-width: 1400px;
      justify-content: center;
      align-items: center;
      align-content: center;
      li {
        flex-grow: 1;
        background-color: $pink;
        text-align: center;
        margin: 10px;
        border: 2px solid $pink;
        -webkit-box-shadow: 5px 5px 0 $pink;
        box-shadow: 9px 9px 0 $pink;
        border-radius: 7px;
        color: $black;
        outline: 3px solid $black;
        max-width: 500px;
        p {
          margin: 0;
          position: relative;
          padding: 10px;
          @media screen and (min-width: 668px) {
            padding: 10px 10px 10px 50px;
          }
          span {
            top: 0;
            left: 0;
            font-size: 14px;
            padding-left: 15px;
            height: 100%;
            border-radius: 7px;
            background-color: rgba(31, 31, 31, 0.5);
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            @media screen and (min-width: 668px) {
              position: absolute;
              margin-bottom: 0;
            }
          }
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

  .text-books {
    margin-top: 30px;
  }

  .text-books .book {
    transform: rotate(0deg);
  }
}
</style>
