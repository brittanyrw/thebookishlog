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
          v-for="(book, index) in filter('progress', 'finished')"
          :key="index"
          :class="[
            { 'e-book': book.medium == 'E-Book' },
            { audio: book.medium == 'Audio' }
          ]"
        >
          <img
            class="book-cover-img"
            :alt="`${book.title} book cover`"
            :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
          />
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
          class="book"
          v-for="(book, index) in filter('progress', 'finished')"
          :key="index"
        >
          <img
            class="book-cover-img"
            :alt="`${book.title} book cover`"
            :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
          />

          <div class="text-book-info">
            <p>
              {{ book.title }} by
              {{ book.author.join(", ") }}
            </p>
            <p
              v-if="
                book.medium == 'Audio' || book.medium == 'Physical and Audio'
              "
            >
              Narrated by {{ book.audioBookNarrator.join(", ") }}
            </p>
            <div
              class="stars"
              :style="`--rating: ${book.rating};`"
              :aria-label="`Rating is ${book.rating} out of 5.`"
            ></div>
            <p class="read-date">{{ book.dateFinished }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="current-book-list">
      <h2>Started Reading</h2>
      <ul>
        <li v-for="(book, index) in sortedStartedBooks" :key="index">
          <div class="current-book-info">
            <span class="progress" :style="`width:${book.pageProgress}%;`">
              {{ book.pageProgress }}%
            </span>
            <p class="current-book-title">{{ book.title }}</p>
            <p class="current-book-author">
              by
              {{ book.author.join(", ") }}
            </p>
            <p class="current-book-date">Started: {{ book.dateStarted }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="dnf-book-list">
      <h2>DNFed Books</h2>
      <p>"Did Not Finish" books</p>
      <ul>
        <li v-for="(book, index) in filter('progress', 'dnf')" :key="index">
          <div class="dnf-book-info">
            <span :style="`width:${book.pageProgress}%;`">
              {{ book.pageProgress }}%
            </span>
            <p class="dnf-book-title">{{ book.title }}</p>
            <p class="dnf-book-author">by {{ book.author.join(", ") }}</p>
            <p class="dnf-book-date">DNF Date: {{ book.dnfDate }}</p>
          </div>
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
        if (new Date(a.dateFinished) > new Date(b.dateFinished)) {
          return -1;
        } else {
          return 1;
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

.read-date {
  margin: 5px 0;
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
      width: 250px;
    }
    &.e-book,
    &.audio {
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
    transform: rotate(-6deg);
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
