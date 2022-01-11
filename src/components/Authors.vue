<template>
  <div class="author-list">
    <div class="filter">
      <p>Filter:</p>
      <button v-on:click="year = 'all'">All</button>
      <button v-on:click="year = '2021'">2021</button>
      <button v-on:click="year = '2022'">2022</button>
    </div>
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
          <h3>
            {{ author.name }}
            <img
              v-if="author.fav"
              class="author-fav-star"
              alt="Favorite Author"
              :src="require('@/assets/imgs/star.svg')"
            />
          </h3>
        </div>
        <div class="author-imgs">
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
          <div class="author-books">
            <img
              v-for="(book, index) in author.books"
              :key="index"
              class="author-book-img"
              :alt="`${book.name}`"
              :src="require(`@/assets/imgs/${slug(book.name)}.png`)"
            />
          </div>
        </div>
        <div class="author-info">
          <div class="author-stats">
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
          <a
            :href="`https://${author.website}`"
            target="_blank"
            class="author-website"
            >{{ author.website }}</a
          >
        </div>
      </li>
    </ul>
    <ul class="authors" v-show="favToggle === 'yes'">
      <li class="author" v-for="(author, index) in favAuthors" :key="index">
        <div class="author-name">
          <h3>
            {{ author.name }}
            <img
              v-if="author.fav"
              class="author-fav-star"
              alt="Favorite Author"
              :src="require('@/assets/imgs/star.svg')"
            />
          </h3>
        </div>
        <div class="author-imgs">
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
          <div class="author-books">
            <img
              v-for="(book, index) in author.books"
              :key="index"
              class="author-book-img"
              :alt="`${book.name}`"
              :src="require(`@/assets/imgs/${slug(book.name)}.png`)"
            />
          </div>
        </div>
        <div class="author-info">
          <div class="author-stats">
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
          <a
            :href="`https://${author.website}`"
            target="_blank"
            class="author-website"
            >{{ author.website }}</a
          >
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
@import "@/assets/styles/varibles.scss";
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
  max-width: 1200px;
  margin: auto;
  .authors {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .author {
      border: 5px solid $black;
      display: block;
      margin: 10px auto;
      border-radius: 7px;
      width: 100%;
      flex-grow: 1;
      @media screen and (min-width: 668px) {
        margin: 10px;
        width: auto;
      }
      .author-name {
        color: $pink;
        text-align: center;
        padding: 20px;
        background-color: $black;
        position: relative;
        h3 {
          margin: 0;
          .author-fav-star {
            position: absolute;
            height: 30px;
            top: 14px;
            margin-left: 5px;
          }
        }
      }
      .author-imgs {
        @media screen and (min-width: 668px) {
          display: flex;
        }
      }
      .author-stats {
        display: flex;
        align-items: center;
      }
      .author-img-wrapper {
        height: 260px;
        border-bottom: 5px solid $black;
        overflow: hidden;
        position: relative;
        @media screen and (min-width: 668px) {
          width: 200px;
          height: 200px;
          border-right: 5px solid $black;
          border-bottom: none;
        }
        .author-img {
          width: 100%;
        }
      }
      .author-info {
        background-color: $black;
        padding: 0 10px 5px 10px;
        @media screen and (min-width: 668px) {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .author-stats {
          justify-content: center;
        }
        .book-number {
          background-color: white;
          border-radius: 50%;
          height: 40px;
          width: 40px;
          border: 4px solid $black;
          font-weight: bold;
          font-size: 22px;
          color: $black;
          display: flex;
          justify-content: center;
          margin-right: 5px;
          margin-top: 5px;
        }
        .lgbt {
          margin-top: 10px;
          height: 35px;
          margin-right: 5px;
        }
        .flag {
          font-size: 40px;
          margin-top: 10px;
        }
        .author-website {
          text-decoration: none;
          color: $pink;
          font-size: 14px;
          display: block;
          margin: auto;
          text-align: center;
          @media screen and (min-width: 668px) {
            display: inline-block;
            text-align: right;
            margin: 0;
          }
        }
      }
      .author-books {
        display: flex;
        align-items: center;
        padding: 10px;
        margin: auto;
        min-width: 132px;
        justify-content: center;
        flex-wrap: wrap;
        .author-book-img {
          height: 150px;
          margin-right: 20px;
        }
        .author-book-img:last-child {
          margin-right: 0;
        }
      }
    }
    .author:last-child,
    .author:nth-last-child(2) {
      flex-grow: unset;
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
    width: 200px;
    height: 200px;
    overflow: hidden;
    img {
      width: 100%;
      min-height: 200px;
    }
  }
}

.filter {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  button {
    border: 2px solid $black;
    padding: 10px 25px;
    background-color: transparent;
    text-transform: uppercase;
    outline-color: $black;
    margin: 10px;
    background-color: $black;
    color: $pink;
  }
  button:hover {
    background-color: $pink;
    color: $black;
    transition: color 1s, background-color 1s;
    cursor: pointer;
  }
  .active button {
    background-color: $pink;
    color: $black;
  }
}
</style>
