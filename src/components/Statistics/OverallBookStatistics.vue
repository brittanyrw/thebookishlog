<template>
  <div class="statistics-container">
    <h2>Statistics</h2>
    <div class="statistics">
      <div class="stat">
        <p class="stat-number">{{ filterReadBooks.length }}</p>
        <p class="stat-title">Books Read</p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("progress", "started") }}</p>
        <p class="stat-title">Started</p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("progress", "dnf") }}</p>
        <p class="stat-title">Did Not Finish</p>
      </div>
      <div class="stat">
        <p class="stat-number stat-number-pages">
          {{ Math.floor(averageTimeToRead) }}
        </p>
        <p class="stat-title">Avg Days Per Book</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ (countRead("rating") / filterReadBooks.length).toFixed(2) }}
        </p>
        <p class="stat-title">Avg Rating</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ valueCount("rating", 5) }}
        </p>
        <p class="stat-title">5 Stars</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ Math.floor(countRead("publishedYear") / filterReadBooks.length) }}
        </p>
        <p class="stat-title">Avg Release Year</p>
      </div>
      <div class="stat">
        <p class="stat-number stat-number-pages">
          {{ countRead("pages").toLocaleString() }}
        </p>
        <p class="stat-title">Total Pages</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ Math.floor(countRead("pages") / filterReadBooks.length) }}
        </p>
        <p class="stat-title">Avg Pages</p>
      </div>
    </div>
    <div class="additional-stats">
      <div class="stats-by-year-container">
      <h3>Books Read by Year</h3>
      <div class="stats-by-year">
        <div class="stat">
        <p class="stat-number">
          {{ countYear("2021") }}
        </p>
        <p class="stat-title">2021</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ countYear("2022") }}
        </p>
        <p class="stat-title">2022</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ countYear("2023") }}
        </p>
        <p class="stat-title">2023</p>
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
    averageTimeToRead() {
      let timeToRead = this.filterReadBooks.map(
        book =>
          ((new Date(book.dateStarted) - new Date(book.dateFinished)) /
            86400000) *
            -1 +
          1
      );
      return timeToRead.reduce((a, b) => a + b) / timeToRead.length;
    }
  },
  methods: {
    countRead(key) {
      return this.filterReadBooks.reduce(
        (res, item) => (item[key] ? res + item[key] : res),
        0
      );
    },
    count(key) {
      return this.bookInfo.reduce(
        (res, item) => (item[key] ? res + item[key] : res),
        0
      );
    },
    valueCount(key, value) {
      return this.bookInfo.filter(book => book[key] === value).length;
    },
    countYear(year) {
      return this.filterReadBooks.filter(book => book["dateFinished"].includes(year)).length;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.statistics-container, .stats-by-year-container {
  background-color: $black;
  padding: 20px 20px 40px 20px;
  h2 {
    color: $pink;
    margin: 0;
    margin-bottom: 20px;
  }
  h3 {
    background-color: $pink;
    padding: 10px;
    display: inline-block;
    margin: 0;
    position: absolute;
    top: -20px;
    left: 39%;
  }
  .statistics, .stats-by-year {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
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
}

.stats-by-year-container {
  text-align: center;
  border: 2px solid $pink;
  margin: 50px 20px 20px 20px;
  position: relative;
  padding-top: 40px;
}
</style>
