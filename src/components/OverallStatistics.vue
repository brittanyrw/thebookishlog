<template>
  <div class="overall-stats-component">
    <div class="stats-list">
      <div class="statistics">
        <section class="numbers">
          <div class="age">
            <div class="stat">
              <p class="stat-number">{{ valueCount("age", "Young Adult") }}</p>
              <h3 class="stat-title">Young Adult</h3>
            </div>
            <div class="stat">
              <p class="stat-number">{{ valueCount("age", "Adult") }}</p>
              <h3 class="stat-title">Adult</h3>
            </div>
            <div class="stat">
              <p class="stat-number">{{ valueCount("medium", "Physical") }}</p>
              <h3 class="stat-title">Physical Books</h3>
            </div>
            <div class="stat">
              <p class="stat-number">{{ valueCount("medium", "E-Book") }}</p>
              <h3 class="stat-title">E-Books</h3>
            </div>
          </div>
        </section>
        <section class="book-length-ratings">
          <div class="length">
            <div class="longest-book">
              <h3>Shortest Book</h3>
              <img
                class="book-cover-img"
                :class="[
                  {
                    'e-book':
                      sortByLength()[sortByLength().length - 1].title.medium ==
                      'E-Book'
                  }
                ]"
                :alt="
                  `${
                    sortByLength()[sortByLength().length - 1].title
                  } book cover`
                "
                :src="
                  require(`@/assets/imgs/${slug(
                    sortByLength()[sortByLength().length - 1].title
                  )}.png`)
                "
              />
              <p>{{ sortByLength()[sortByLength().length - 1].title }}</p>
              <p>{{ sortByLength()[sortByLength().length - 1].pages }} Pages</p>
            </div>
            <div class="shortest-book">
              <h3>Longest Book</h3>
              <img
                class="book-cover-img"
                :class="[{ 'e-book': sortByLength()[0].medium == 'E-Book' }]"
                :alt="`${sortByLength()[0].title} book cover`"
                :src="
                  require(`@/assets/imgs/${slug(sortByLength()[0].title)}.png`)
                "
              />
              <p>{{ sortByLength()[0].title }}</p>
              <p>{{ sortByLength()[0].pages }} Pages</p>
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
                  <img
                    class="book-cover-img"
                    :class="[{ 'e-book': book.medium == 'E-Book' }]"
                    :alt="`${book.title} book cover`"
                    :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                  />
                  <p>{{ book.title }}</p>
                </li>
              </ul>
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
                class="genre"
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
                class="location"
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
    bookInfo: Array
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
    }
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
    }
  }
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
  margin: 0 0 15px 0;
}

.length {
  display: flex;
  margin: auto;
  max-width: 1000px;
  justify-content: space-evenly;
  align-items: center;
}

.favorite-books ul {
  display: flex;
  margin: auto;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 662px) {
    flex-wrap: wrap;
  }
  li {
    margin: 0 20px;
  }
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
}

.book-length-ratings {
  padding: 35px;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 922px) {
    grid-template-columns: 1fr 1fr;
  }
  max-width: 1000px;
  margin: auto;
}
.age {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 35px;
  .stat {
    background-color: $pink;
    padding: 15px;
    text-align: center;
    margin: 10px;
    border: 2px solid $pink;
    -webkit-box-shadow: 5px 5px 0 $pink;
    box-shadow: 9px 9px 0 $pink;
    border-radius: 7px;
    color: $black;
    outline: 3px solid $black;
    flex-grow: 1;
    @media screen and (min-width: 922px) {
      flex-grow: 0;
    }
    .stat-number {
      font-size: 35px;
      font-weight: bold;
      margin: 0;
      @media screen and (min-width: 922px) {
        font-size: 40px;
      }
    }
    .stat-title {
      margin: 0;
    }
  }
}

.setting {
  padding: 35px;
  .setting-list ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    .location {
      margin: 15px;
      background-color: $black;
      text-align: center;
      border-radius: 7px;
      color: $pink;
      display: flex;
      p {
        margin: 0;
        padding: 10px;
      }
      p:first-child {
        padding-right: 10px;
        border-right: 3px solid $pink;
      }
    }
  }
}

.genres {
  padding: 35px;
  .genre-list ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    .genre {
      margin: 15px;
      background-color: $pink;
      text-align: center;
      border-radius: 7px;
      color: $black;
      display: flex;
      p {
        margin: 0;
        padding: 10px;
      }
      p:first-child {
        padding-right: 10px;

        border-right: 3px solid $black;
      }
    }
    .fade-genre {
      background-color: rgba(250, 230, 233, 0.3);
      color: $pink;
    }
  }
}
</style>
