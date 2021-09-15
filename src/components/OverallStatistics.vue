<template>
  <div class="overall-stats-component">
    <div class="stats-list">
      <div class="statistics">
        <section class="numbers">
          <div class="age">
            <div class="age-list">
              <h3>Young Adult</h3>
              <p>{{ valueCount("age", "Young Adult") }}</p>
            </div>
            <div class="age-list">
              <h3>Adult</h3>
              <p>{{ valueCount("age", "Adult") }}</p>
            </div>
          </div>
          <div class="methods">
            <div class="methods-list">
              <h3>Physical Books</h3>
              <p>{{ valueCount("medium", "Physical") }}</p>
            </div>
            <div class="methods-list">
              <h3>E-Books</h3>
              <p>{{ valueCount("medium", "E-Book") }}</p>
            </div>
          </div>
        </section>
        <section class="book-length-ratings">
          <div class="length">
            <div class="longest-book">
              <h3>Longest Book</h3>
              <p>{{ sortByLength()[sortByLength().length - 1].title }}</p>
              <img
                class="book-cover-img"
                :class="[{ 'e-book': sortByLength()[sortByLength().length - 1].title.medium == 'E-Book' }]"
                :alt="
                  `${
                    sortByLength()[sortByLength().length - 1].title
                  } book cover`
                "
                :src="
                  require(`@/assets/imgs/${slug(
                    sortByLength()[sortByLength().length - 1].title
                  )}.png`)"
              />
            </div>
            <div class="shortest-book">
              <h3>Shortest Book</h3>
              <p>{{ sortByLength()[0].title }}</p>
              <img
                class="book-cover-img"
                :class="[{ 'e-book': sortByLength()[0].medium == 'E-Book' }]"
                :alt="`${sortByLength()[0].title} book cover`"
                :src="
                  require(`@/assets/imgs/${slug(sortByLength()[0].title)}.png`)"
              />
            </div>
          </div>
          <div class="ratings">
            <div class="favorite-books">
              <h3>Favorite Books</h3>
              <ul>
                <li
                  class="book"
                  v-for="(book, index) in filter('fav', true)"
                  :key="index"
                >
                  <p>{{ book.title }}</p>
                  <img
                    class="book-cover-img"
                    :class="[{ 'e-book': book.medium == 'E-Book' }]"
                    :alt="`${book.title} book cover`"
                    :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                  />
                </li>
              </ul>
            </div>
            <div class="lowest-rated-book">
              <h3>Lowest Rated Books</h3>
              <p>{{ sortByRating()[sortByRating().length - 1].title }}</p>
              <img
                class="book-cover-img"
                :class="[{ 'e-book': sortByRating()[sortByRating().length - 1].medium == 'E-Book' }]"
                :alt="
                  `${
                    sortByRating()[sortByRating().length - 1].title
                  } book cover`
                "
                :src="
                  require(`@/assets/imgs/${slug(
                    sortByRating()[sortByRating().length - 1].title
                  )}.png`)"
              />
            </div>
          </div>
        </section>
        <div class="genres">
          <div class="genre-list">
            <h3>Genres</h3>
            <ul>
              <li
                v-for="(genreAmount, genre) in count(listGenres)"
                :key="genre"
                :class="[{ 'fade-genre': genreAmount < 3 }]"
              >
                <p class="">{{ genre }}</p>
                <p class="">{{ genreAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="setting">
          <div class="setting-list">
            <h3>Book Settings</h3>
            <ul>
              <li
                v-for="(settingAmount, setting) in count(listSettings)"
                :key="setting"
                class=""
              >
                <p class="">{{ setting }}</p>
                <p class="">{{ settingAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.ts";

export default {
  props: {
    bookInfo: Array,
  },
  mixins: [mixins],
  computed: {
    filterReadBooks() {
      return this.bookInfo.filter(item => item.dateFinished);
    },
    listGenres() {
      let genreList = [];
      this.filterReadBooks.forEach(function(each) {
        genreList.push(each.genre);
      });

      return genreList.flat();
    },
    listSettings() {
      let settingList = [];
      this.filterReadBooks.forEach(function(each) {
        settingList.push(each.setting);
      });

      return settingList.flat();
    },
  },
  methods: {
    sortByLength() {
      const sorted = (a, b) => {
        if (a.pages > b.pages) {
          return -1;
        } else {
          return 1;
        }
      };
      return this.filterReadBooks.sort(sorted);
    },
    sortByRating() {
      const sorted = (a, b) => {
        if (a.rating > b.rating) {
          return -1;
        } else {
          return 1;
        }
      };
      return this.filterReadBooks.sort(sorted);
    },
    filter(key, value) {
      return this.bookInfo.filter(item => item[key] == value);
    },
    count(obj) {
      var countedObj = {};

      obj.forEach(function(el) {
        countedObj[el] = countedObj[el] + 1 || 1;
      });

      const sortedCountedObj = Object.entries(countedObj).sort(
        (a, b) => b[1] - a[1]
      );
      countedObj = Object.fromEntries(sortedCountedObj);
      return countedObj;
    },
    valueCount(key, value) {
      return this.filterReadBooks.filter(book => book[key] === value).length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";

// .stats-list {
//   max-width: 1200px;
//   margin: auto;
// }

ul {
  padding: 0;
  list-style: none;
}

h2 {
  text-align: center;
  margin: 0;
}

h3 {
  margin: 0;
}

.book-cover-img {
  width: 120px;
}

.book-cover-img.e-book {
  width: 90px;
}

.numbers,
.genres {
  background-color: $black;
  color: $pink;
}

.length,
.ratings,
.genres,
.age,
.methods,
.setting,
.years {
  text-align: center;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 20px;
}
</style>
