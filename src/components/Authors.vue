<template>
  <div class="author-list">
    <h2>Authors Read</h2>
    <ul class="authors">
      <li class="author" v-for="(author, index) in sortedAuthors" :key="index">
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
import mixins from "@/mixins/mixins.js";

export default {
  props: {
    authorInfo: Array
  },
  mixins: [mixins],
  computed: {
    sortedAuthors() {
      let sortedAuthorList = this.authorInfo;
      const sorted = (a, b) => {
        if (a.books.length > b.books.length) {
          return -1;
        } else {
          return 1;
        }
      };
      return sortedAuthorList.sort(sorted);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";

.author-list {
  padding: 20px;
  .authors {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .author {
      border: 5px solid $black;
      display: flex;
      margin: 10px;
      // flex-grow: 1;
      .author-img-wrapper {
        height: 200px;
        width: 200px;
        border-right: 5px solid $black;
        overflow: hidden;
        position: relative;
        .author-img {
          width: 100%;
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
        margin: auto;
        .author-book-img {
          height: 150px;
        }
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
}
</style>
