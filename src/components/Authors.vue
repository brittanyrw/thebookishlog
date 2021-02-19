<template>
  <div class="author-list">
    <h4>Authors Read</h4>
    <ul class="authors">
      <li class="author" v-for="(author, index) in authorInfo" :key="index">
        <div class="author-img-wrapper">
          <img
            class="author-img"
            :alt="`${author.name}`"
            :src="require(`@/assets/imgs/${slug(author.name)}.png`)"
          />
          <a class="author-name" :href="author.website">{{ author.name }}</a>
          <div class="author-info">
            <span class="book-number">{{ author.books.length }}</span>
            <img
              v-if="author.lgbt"
              class="lgbt"
              alt="lgbt rainbow heart"
              :src="require('@/assets/imgs/lgbtqa-heart.png')"
            />
            <span
              class="flag"
              v-for="(country, index) in author.country"
              :key="index"
            >
              {{ flagEmoji(country.code) }}
            </span>
          </div>
        </div>
        <div class="author-books">
          <img
            v-for="(book, index) in author.books"
            :key="index"
            class="author-book-img"
            :alt="`${book}`"
            :src="require(`@/assets/imgs/${slug(book)}.png`)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import slugMixin from "@/mixins/slugMixin.js";

export default {
  props: {
    authorInfo: Array
  },
  mixins: [slugMixin],
  methods: {
    flagEmoji(countryCode) {
      return countryCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";

.authors {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  .author {
    border: 5px solid $black;
    display: flex;
    margin: 10px;
    .author-img-wrapper {
      height: 200px;
      width: 200px;
      border-right: 5px solid $black;
      overflow: hidden;
      position: relative;
      .author-img {
        width: 100%;
        min-height: 200px;
      }
      .author-name {
        position: absolute;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.6);
        left: 0;
        width: 100%;
        text-align: center;
        padding: 5px;
        color: black;
        text-decoration: none;
        font-size: 15px;
      }
      .author-info {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 40px;
        text-align: center;
        span {
          display: block;
        }
        .book-number {
          background-color: white;
          border-radius: 50%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid $black;
          font-weight: bold;
          font-size: 22px;
          color: $black;
        }
        .lgbt {
          margin-top: 10px;
          height: 40px;
        }
        .flag {
          font-size: 40px;
        }
      }
    }
    .author-books {
      display: flex;
      align-items: center;
      padding: 10px 20px 10px 10px;
    }
  }
  .author:nth-child(1n) .author-img-wrapper {
    background-color: $purple;
  }

  .author:nth-child(2n) .author-img-wrapper {
    background-color: $red;
  }
  .author:nth-child(3n) .author-img-wrapper {
    background-color: $orange;
  }

  .author:nth-child(4n) .author-img-wrapper {
    background-color: $blue;
  }

  .author:nth-child(5n) .author-img-wrapper {
    background-color: $green;
  }
  .author:nth-child(6n) .author-img-wrapper {
    background-color: $yellow;
  }
}
.author-book-img {
  height: 150px;
}
</style>
