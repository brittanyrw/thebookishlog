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

      <ul class="books" v-show="toggle === 'no'">
        <li
          class="book"
          v-for="(book, index) in bookInfo"
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
            <div class="bookmark" :class="book.color"></div>
          </div>
          <div class="text-book-info">
            <h3>
              {{ book.title }}
            </h3>
            <div class="icons">
              <img
                v-if="book.fav"
                class="book-fav-star"
                alt="Favorite Book"
                :src="require('@/assets/imgs/star.svg')"
              />
              <img
                v-if="
                  book.medium === 'Audio' ||
                    book.medium === 'Physical and Audio'
                "
                class="book-headphones"
                alt="Audiobook"
                :src="require('@/assets/imgs/headphones.svg')"
              />
            </div>
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
          v-for="(book, index) in bookInfo"
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

.book-cover-img-wrapper {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 10px;
}

.bookmark {
  position: absolute;
  height: 290px;
  width: 30px;
  top: -15px;
  left: 10px;
  z-index: -1;
  border: 2px solid $black;
  &.red {
    background: #d31d1d;
  }
  &.darkblue {
    background: #1d5ed3;
  }
  &.lightblue {
    background: #1dadd3;
  }
  &.gold {
    background: #d3a01d;
  }
  &.black {
    background: #3d3b36;
  }
  &.purple {
    background: #6e1dd3;
  }
  &.pink {
    background: #d31d96;
  }
  &.green {
    background: #1a963c;
  }
  &.brown {
    background: #903911;
  }
  &.orange {
    background: #d3721d;
  }
}

.book:nth-child(2n + 1) {
  .bookmark {
    width: 40px;
  }
}
.book:nth-child(3n + 2) {
  .bookmark {
    width: 40px;
    border-radius: 5px;
  }
}
.book:nth-child(5n + 3) {
  .bookmark {
    width: 40px;
    border-radius: 20px;
  }
}
.book:nth-child(7n + 5) {
  .bookmark {
    width: 40px;
    border-radius: 20px 20px 0 0;
  }
}
.book:nth-child(11n + 7) {
  .bookmark {
    width: 40px;
    height: 100px;
  }
}
.book:nth-child(13n + 11) {
  .bookmark {
    height: 100px;
    width: 40px;
  }
  .bookmark:before,
  .bookmark:after {
    position: absolute;
    content: "";
    background: inherit;
    height: 20px;
    width: 10px;
    bottom: -188px;
    transform: rotate(45deg);
    border: 2px solid black;
  }
  .bookmark:before {
    right: 3px;
  }
  .bookmark:after {
    left: 3px;
  }
}

.book-cover-img {
  width: auto;
  display: inline-block;
  height: 250px;
  box-shadow: 2px 2px white, 4px 4px $black, 6px 6px white, 8px 8px $black,
    10px 10px white, 12px 12px $black;
  border: 2px solid $black;
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
  h3 {
    margin-top: 1.5rem;
    margin-bottom: 8px;
  }
  .book-fav-star,
  .book-headphones {
    height: 20px;
    margin: 5px;
  }

  .author {
    margin: 8px;
  }
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
      width: 69px;
      .book-cover-img {
        box-shadow: none;
        border: none;
        height: 100px;
      }
    }
    @media screen and (min-width: 992px) {
      .grid-book {
        width: 170px;
        .book-cover-img {
          height: 250px;
        }
      }
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

  .book {
    text-align: center;
    width: 100%;
    position: relative;
    margin-right: 10px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 668px) {
    .book {
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
