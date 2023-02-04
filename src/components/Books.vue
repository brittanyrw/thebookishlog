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
          <label for="toggle-text-books">Book Cover Grid</label>
        </div>
      </div>

      <ul class="books"  v-show="toggle === 'no' ">
        <li
          class="book"
          v-for="(book, index) in filter('progress', 'finished')"
          :key="index"
          :class="[
            { 'e-book': book.medium == 'E-Book' },
            { audio: book.medium == 'Audio' }
          ]"
        >
          <div class="book-cover-img-wrapper">
            <img
              class="book-cover-img"
              :alt="`${book.title} book cover`"
              :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
            />
            <div class="bookmark"></div>
          </div>
          <div class="text-book-info">
            <h3>{{ book.title }}</h3>
            <p class="author">{{ book.author.join(", ") }}</p>
          </div>
          <div
            class="stars"
            :style="`--rating: ${book.rating};`"
            :aria-label="`Rating is ${book.rating} out of 5.`"
          ></div>
          <p class="read-date">{{ book.dateFinished }}</p>
        </li>
      </ul>
      <ul class="books text-books" v-show="toggle === 'yes'">
        <li
          class="book grid-book"
          v-for="(book, index) in filter('progress', 'finished')"
          :key="index"
        >
          <img
            class="book-cover-img"
            :alt="`${book.title} book cover`"
            :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
          />
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
  computed: {
    sortedStartedBooks() {
      let startedBooks = this.filter("progress", "started");
      const sorted = (a, b) => {
        if (a.pageProgress > b.pageProgress) {
          return -1;
        } else {
          return 1;
        }
      };
      return startedBooks.sort(sorted);
    },
    sortedBooks() {
      let books = this.bookInfo;


      const sorted = (a, b) => {
        if (
          new Date(
            b.dateFinished.split("/")[2] +
              "/" +
              b.dateFinished.split("/")[1] +
              "/" +
              b.dateFinished.split("/")[0]
          ) >
          new Date(
            a.dateFinished.split("/")[2] +
              "/" +
              a.dateFinished.split("/")[1] +
              "/" +
              a.dateFinished.split("/")[0]
          )
        ) {
          return 1;
        } else {
          return -1;
        }
      };
      return books.sort(sorted);
    }
  },
  methods: {
    filter(key, value) {
      return this.sortedBooks.filter(item => item[key] == value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

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
  width: auto;
  display: inline-block;
  height: 250px;

  // @media screen and (min-width: 668px) {
  //   max-height: 300px;
  //   width: auto;
  // }
}

.read-date {
  margin: 5px 0;
}

.books {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
    .grid-book {
      margin: 0;
      width: 170px;
    }
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
      display: grid;
      grid-template-columns: 1fr;
      margin: 30px auto;
      max-width: 1400px;
      justify-content: center;
      align-items: center;
      align-content: center;
      @media screen and (min-width: 668px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      li {
        flex-grow: 1;
        background-color: $pink;
        margin: 10px;
        border: 2px solid $pink;
        -webkit-box-shadow: 5px 5px 0 $pink;
        box-shadow: 9px 9px 0 $pink;
        border-radius: 7px;
        color: $black;
        outline: 3px solid $black;
        max-width: 500px;
        .current-book-info {
          margin: 0;
          position: relative;
          padding: 10px;
          .progress {
            font-size: 14px;
            padding-left: 15px;
            height: 100%;
            border-radius: 7px;
            background-color: rgba(31, 31, 31, 0.3);
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          .author-list {
            &:before {
              content: ", ";
            }
          }
          .author-list:first-child {
            &:before {
              content: "";
            }
          }
          .current-book-title {
            margin: 0 0 5px 0;
            font-weight: bold;
          }
          .current-book-author {
            font-size: 14px;
            margin: 0 0 10px 0;
          }
          .current-book-date {
            margin: 0;
          }
        }
      }
    }
  }

  .tbr-book-list {
    padding: 20px;
    background-color: $black;
    h2,
    h3 {
      color: $pink;
    }

    h3 {
      margin-left: 15px;
    }
    .tbr-months {
      display: grid;
      grid-template-columns: 1fr;

      @media screen and (min-width: 668px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    ul {
      padding: 0;
      list-style: none;
      margin: 30px auto;
      max-width: 1400px;
      justify-content: center;
      align-items: center;
      align-content: center;
      li {
        background-color: $pink;
        margin: 20px 10px;
        border: 2px solid $pink;
        -webkit-box-shadow: 5px 5px 0 $pink;
        box-shadow: 9px 9px 0 $pink;
        border-radius: 7px;
        color: $black;
        outline: 3px solid $black;
        max-width: 500px;
        .tbr-book-info {
          margin: 0;
          padding: 10px;
          .tbr-book-title {
            margin: 0 0 5px 0;
            font-weight: bold;
          }
          .tbr-book-author {
            font-size: 14px;
            margin: 0;
            font-weight: normal;
          }
        }
      }
    }
    .tbr-read {
      .tbr-book-title,
      .tbr-book-author {
        text-decoration: line-through;
      }
    }
  }

  .dnf-book-list {
    padding: 20px;
    ul {
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      margin: 30px auto;
      max-width: 1400px;
      justify-content: center;
      align-items: center;
      align-content: center;
      @media screen and (min-width: 668px) {
        grid-template-columns: 1fr 1fr;
      }
      @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      li {
        background-color: $black;
        padding: 10px;
        margin: 10px;
        border: 2px solid $black;
        -webkit-box-shadow: 5px 5px 0 $black;
        box-shadow: 9px 9px 0 $black;
        border-radius: 7px;
        color: $pink;
        outline: 3px solid $pink;
        .dnf-book-info {
          margin: 0;
          position: relative;
          padding: 10px;
          span {
            font-size: 14px;
            padding-left: 15px;
            height: 100%;
            border-radius: 7px;
            background-color: rgb(250, 230, 233, 0.3);
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          .dnf-book-title {
            margin: 0 0 5px 0;
            font-weight: bold;
          }
          .dnf-book-author {
            font-size: 14px;
            margin: 0 0 10px 0;
          }
          .dnf-book-date {
            margin: 0;
          }
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
      width: 230px;
    }
  }

  .text-books {
    margin-top: 30px;
  }

  .text-books .book {
    transform: rotate(0deg);
  }
}
</style>
