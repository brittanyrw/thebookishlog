<template>
  <div class="overall-stats-component">
    <div class="stats-list">
      <div class="statistics">
        <div class="length">
          <div class="longest-book">
            <h3>Longest Book</h3>
            <p>{{ sortByLength()[sortByLength().length - 1].title }}</p>
          </div>
          <div class="shortest-book">
            <h3>Shortest Book</h3>
            <p>{{ sortByLength()[0].title }}</p>
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
                :class="[{ 'e-book': book.medium == 'E-Book' }]"
              >
                {{ book.title }}
              </li>
            </ul>
          </div>
          <div class="lowest-rated-book">
            <h3>Lowest Rated Books</h3>
            <p>{{ sortByRating()[sortByRating().length - 1].title }}</p>
          </div>
        </div>
        <div class="genres">
          <div class="genre-list">
            <h3>Top Genres</h3>
            <ul>
              <li
                v-for="(genreAmount, genre) in count(listGenres)"
                :key="genre"
                class=""
              >
                <p class="">{{ genre }}</p>
                <p class="">{{ genreAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="age">
          <div class="age-list">
            <h3>Young Adult</h3>
            <p>Number here</p>
          </div>
          <div class="age-list">
            <h3>Adult</h3>
            <p>Number here</p>
          </div>
        </div>
        <div class="methods">
          <div class="methods-list">
            <h3>Physical Books</h3>
            <p>Number here</p>
          </div>
          <div class="methods-list">
            <h3>E-Books</h3>
            <p>Number here</p>
          </div>
        </div>
        <div class="setting">
          <div class="setting-list">
            <h3>Top Book Settings</h3>
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
        <div class="years">
          <div class="years-list">
            <h3>Published Years</h3>
            <p>Chart here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookInfo: Array,
  },
  computed: {
    filterReadBooks() {
      return this.bookInfo.filter((item) => item.dateFinished);
    },
    listGenres() {
      let genreList = [];
      this.filterReadBooks.forEach(function (each) {
        genreList.push(each.genre);
      });

      return genreList.flat();
    },
    listSettings() {
      let settingList = [];
      this.filterReadBooks.forEach(function (each) {
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
      return this.bookInfo.filter((item) => item[key] == value);
    },
    count(obj) {
      var countedObj = {};

      obj.forEach(function (el) {
        countedObj[el] = countedObj[el] + 1 || 1;
      });

      const sortedCountedObj = Object.entries(countedObj).sort((a,b)=> b[1]-a[1]);
      countedObj = Object.fromEntries(sortedCountedObj);
      return countedObj;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";

h2 {
  text-align: center;
  margin: 20px;
}

.statistics {
  max-width: 1200px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 40px;
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

.length div,
.ratings div,
.genres div,
.age div,
.methods div,
.setting div,
.years div {
  margin: 10px;
}
</style>
