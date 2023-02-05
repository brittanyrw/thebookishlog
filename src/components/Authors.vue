<template>
  <div class="author-list">
    <div class="header">
      <h2>Authors Read</h2>
      <div class="toggle-button-wrapper">
        <input
          type="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
          id="toggle-author-images"
        />
        <label for="toggle-author-images">Show Author Image Grid</label>
      </div>
      <div class="toggle-button-wrapper">
        <input
          type="checkbox"
          v-model="favToggle"
          true-value="yes"
          false-value="no"
          id="toggle-fav-authors"
        />
        <label for="toggle-fav-authors">Show Favorite Authors</label>
      </div>
    </div>
    <ul class="authors" v-show="toggle === 'no' && favToggle === 'no'">
      <li class="author" v-for="(author, index) in sortedAuthors" :key="index">
        <div class="author-name">
          <div class="author-img-wrapper">
            <img
              v-if="author.image != false"
              class="author-img"
              :alt="`${author.name}`"
              :src="require(`@/assets/imgs/${slug(author.name)}.png`)"
            />
            <img
              v-else
              class="author-img"
              :alt="`${author.name}`"
              :src="require('@/assets/imgs/placeholder-author.png')"
            />
          </div>
          <div class="author-info">
            <h3>
              <a
                :href="`https://${author.website}`"
                target="_blank"
                class="author-website"
                >{{ author.name }}</a
              >
              <img
                v-if="author.fav"
                class="author-fav-star"
                alt="Favorite Author"
                :src="require('@/assets/imgs/star.svg')"
              />
            </h3>

            <div class="author-stats">
              <span class="book-number">{{ author.books.length }}</span>
              <span v-if="author.lgbt" class="lgbt">🏳️‍🌈</span>
              <span
                class="flag"
                v-for="(country, index) in author.country"
                :key="index"
              >
                {{ flagEmoji(country.code) }}
              </span>
            </div>
          </div>
        </div>
        <div class="author-imgs">
          <div class="author-books">
            <img
              v-for="(book, index) in author.books"
              :key="index"
              class="author-book-img"
              :alt="`${book}`"
              :src="require(`@/assets/imgs/${slug(book)}.png`)"
            />
          </div>
        </div>
      </li>
    </ul>
    <ul class="authors" v-show="favToggle === 'yes'">
      <li class="author" v-for="(author, index) in favAuthors" :key="index">
        <div class="author-name">
          <div class="author-img-wrapper">
            <img
              v-if="author.image != false"
              class="author-img"
              :alt="`${author.name}`"
              :src="require(`@/assets/imgs/${slug(author.name)}.png`)"
            />
            <img
              v-else
              class="author-img"
              :alt="`${author.name}`"
              :src="require('@/assets/imgs/placeholder-author.png')"
            />
          </div>
          <div class="author-info">
            <h3>
              <a
                :href="`https://${author.website}`"
                target="_blank"
                class="author-website"
                >{{ author.name }}</a
              >
              <img
                v-if="author.fav"
                class="author-fav-star"
                alt="Favorite Author"
                :src="require('@/assets/imgs/star.svg')"
              />
            </h3>

            <div class="author-stats">
              <span class="book-number">{{ author.books.length }}</span>
              <span v-if="author.lgbt" class="lgbt">🏳️‍🌈</span>
              <span
                class="flag"
                v-for="(country, index) in author.country"
                :key="index"
              >
                {{ flagEmoji(country.code) }}
              </span>
            </div>
          </div>
        </div>
        <div class="author-imgs">
          <div class="author-books">
            <img
              v-for="(book, index) in author.books"
              :key="index"
              class="author-book-img"
              :alt="`${book}`"
              :src="require(`@/assets/imgs/${slug(book)}.png`)"
            />
          </div>
        </div>
      </li>
    </ul>
    <ul class="author-grid" v-show="toggle === 'yes'">
      <li
        class="author-grid-item"
        v-for="(author, index) in authorsWithImages"
        :key="index"
      >
        <img
          class="author-grid-img"
          :alt="`${author.name}`"
          :src="require(`@/assets/imgs/${slug(author.name)}.png`)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.ts";

export default {
  data() {
    return {
      toggle: "no",
      favToggle: "no"
    };
  },
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
    },
    authorsWithImages() {
      return this.sortedAuthors.filter(author => author.image != false);
    },
    favAuthors() {
      return this.sortedAuthors.filter(author => author.fav);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.header {
  h2 {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
}

.author-list {
  padding: 20px;
  max-width: 1300px;
  margin: auto;
  .authors {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .author {
      flex-grow: 1;
      border: 2px solid $black;
      margin: 10px;
      .author-name {
        border-bottom: 2px solid $black;
        display: flex;
        h3 {
          margin: 0;
          padding: 10px;
          .author-website {
            color: $black;
            text-decoration: none;
          }
        }
        .author-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        }
      }
      .author-img-wrapper {
        height: 130px;
        width: 130px;
        .author-img {
          object-fit: cover;
          width: 130px;
          height: 130px;
          overflow: hidden;
          border-right: 2px solid $black;
        }
      }
      .author-books {
        text-align: center;
        .author-book-img {
          height: 100px;
          margin: 10px;
          border: 1px solid $black;
        }
      }
      .author-stats {
        position: relative;
        padding: 10px;
        .book-number {
          position: absolute;
          right: 0;
          bottom: 0;
          border-top: 2px solid;
          border-left: 2px solid;
          padding: 5px;
        }
      }
      .author-fav-star {
        height: 20px;
        margin-left: 5px;
      }
      .flag,
      .lgbt {
        font-size: 30px;
      }
    }
    @media screen and (min-width: 992px) { 
      .author:first-child {
        width: 48%;
      }
    }
    .author:last-child, .author:nth-last-child(2),.author:nth-last-child(3) {
      flex-grow: 0;
    }
  }
}

.author-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
  .author-grid-item {
    width: 150px;
    height: 150px;
    overflow: hidden;
    img {
      width: 100%;
      min-height: 150px;
    }
  }
}
</style>
