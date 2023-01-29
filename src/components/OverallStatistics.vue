<template>
  <div class="overall-stats-component">
    <div class="stats-list">
      <div class="statistics">
        <section class="numbers">
          <h2>Other Numbers</h2>
          <div class="age">
            <div class="stats-wrapper">
              <h3>Age</h3>
              <div class="stat">
                <p class="stat-number">{{ valueCount("age", "Adult") }}</p>
                <p class="stat-title">Adult</p>
              </div>
              <div class="stat">
                <p class="stat-number">
                  {{ valueCount("age", "Young Adult") }}
                </p>
                <p class="stat-title">Young Adult</p>
              </div>
              <div class="stat">
                <p class="stat-number">
                  {{ valueCount("age", "Middle Grade") }}
                </p>
                <p class="stat-title">Middle Grade</p>
              </div>
              <div class="stat">
                <p class="stat-number">
                  {{ valueCount("age", "Childrens") }}
                </p>
                <p class="stat-title">Children's</p>
              </div>
            </div>
            <div class="stats-wrapper">
              <h3>Medium</h3>
              <div class="stat">
                <p class="stat-number">
                  {{ valueCount("medium", "Physical") }}
                </p>
                <p class="stat-title">Physical Books</p>
              </div>
              <div class="stat">
                <p class="stat-number">{{ valueCount("medium", "E-Book") }}</p>
                <p class="stat-title">E-Books</p>
              </div>
              <div class="stat">
                <p class="stat-number">{{ valueCount("medium", "Audio") }}</p>
                <p class="stat-title">Audio Books</p>
              </div>
              <div class="stat">
                <p class="stat-number">
                  {{ valueCount("medium", "Physical and Audio") }}
                </p>
                <p class="stat-title">Both Physical & Audio</p>
              </div>
            </div>
          </div>
        </section>
        <section class="book-length-ratings">
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
                    :class="[
                      { 'e-book': book.medium == 'E-Book' },
                      { audio: book.medium == 'Audio' }
                    ]"
                    :alt="`${book.title} book cover`"
                    :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                  />
                  <p>{{ book.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="length">
            <div class="shortest-book">
              <h3>Shortest Book</h3>
              <img
                class="book-cover-img"
                :class="[
                  {
                    'e-book':
                      sortByLength()[sortByLength().length - 1].title.medium ==
                      'E-Book'
                  },
                  {
                    audio:
                      sortByLength()[sortByLength().length - 1].title.medium ==
                      'Audio'
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
            <div class="longest-book">
              <h3>Longest Book</h3>
              <div class="longest-book-wrapper">
                <div
                  v-for="(book, index) in longestBook()"
                  :key="index"
                  class="long-book"
                >
                  <img
                    class="book-cover-img"
                    :class="[
                      { 'e-book': book.medium == 'E-Book' },
                      { audio: book.medium == 'Audio' }
                    ]"
                    :alt="`${book.title} book cover`"
                    :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                  />
                  <p>{{ book.title }}</p>
                  <p>{{ book.pages }} Pages</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="genres">
          <div class="genre-list">
            <h2>Genres</h2>
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
            <h2>Book Settings</h2>
            <ul>
              <li
                v-for="(settingAmount, setting) in count(listSettings)"
                :key="setting"
                class="location"
                :class="[{ 'fade-location': settingAmount < 2 }]"
              >
                <p class="">{{ setting }}</p>
                <p class="">{{ settingAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <section class="next-book">
      <button @click="nextBook">Next Book</button>
      <p class="next-book-name">{{ newBook }}</p>
    </section> -->
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.ts";

export default {
  props: {
    bookInfo: Array
  },
  data() {
    return {
      newBook: ""
    };
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
      console.log(countedObj);
      return countedObj;
    },
    valueCount(key, value) {
      return this.filterReadBooks.filter(book => book[key] === value).length;
    },
    longestBook() {
      let longestBooks = [];
      if (this.sortByLength()[0].pages == this.sortByLength()[1].pages) {
        longestBooks.push(this.sortByLength()[0], this.sortByLength()[1]);
      } else {
        longestBooks.push(this.sortByLength()[0]);
      }
      return longestBooks;
    },
    nextBook() {
      let list = this.filter("progress", "started");
      this.newBook = list[Math.floor(Math.random() * list.length)].title;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

ul {
  padding: 0;
  list-style: none;
}

h2 {
  padding: 0 20px 20px 20px;
  margin: 0;
}

h3 {
  margin: 0 0 15px 0;
}

.numbers {
  h2 {
    padding-top: 20px;
    padding-bottom: 0;
  }
  .stats-wrapper {
    display: flex;
    padding: 35px 20px 20px 20px;
    border: 2px solid $pink;
    position: relative;
    flex-wrap: wrap;
    margin-bottom: 40px;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    @media screen and (min-width: 992px) {
      margin-right: 15px;
      flex-grow: 0;
    }
    h3 {
      position: absolute;
      background-color: #fae6e9;
      color: #1f1f1f;
      padding: 10px;
      text-align: center;
      z-index: 1;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.length {
  display: flex;
  margin: auto;
  max-width: 1000px;
  justify-content: center;
  flex-wrap: wrap;
}

.star-ratings {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.shortest-book {
  max-width: 250px;
  margin-right: 10px;
}

.longest-book-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.overall-stats-component {
  .favorite-books ul {
    display: flex;
    margin: auto;
    max-width: 1000px;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
    li {
      margin: 0 20px;
      max-width: 200px;
    }
    .book p {
      max-width: 100px;
    }
  }
}

// .long-book {
//   margin-right: 10px;
// }

.book-cover-img {
  width: 120px;
}

.shortest-book .book-cover-img {
  width: 80px;
}

.book-cover-img.e-book {
  width: 90px;
}

.book-cover-img.audio {
  width: 85px;
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
        font-size: 50px;
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
    margin: auto;
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
    .fade-location {
      background-color: #5f5a5a;
      color: $pink;
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
    margin: auto;
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
