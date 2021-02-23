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
      <div class="stat">
        <p class="stat-number">
          {{ (countRead("rating") / filterReadBooks.length).toFixed(2) }}
        </p>
        <p class="stat-title">Avg Rating</p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ Math.floor(countRead("publishedYear") / filterReadBooks.length) }}
        </p>
        <p class="stat-title">Avg Release Year</p>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "@/mixins/mixins.js";

export default {
  props: {
    bookInfo: Array
  },
  mixins: [mixins],
  computed: {
    filterReadBooks() {
      return this.bookInfo.filter(item => item.dateFinished);
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";

.statistics-container {
  background-color: $black;
  padding: 20px;
  h2 {
    color: $pink;
    margin: 0;
    margin-bottom: 20px;
  }
  .statistics {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .stat {
      background-color: $pink;
      padding: 20px;
      text-align: center;
      margin: 10px;
      border: 2px solid $pink;
      -webkit-box-shadow: 5px 5px 0 $pink;
      box-shadow: 9px 9px 0 $pink;
      border-radius: 7px;
      color: $black;
      outline: 3px solid $black;
      .stat-number {
        font-size: 50px;
        font-weight: bold;
        margin: 0;
      }
      .stat-title {
        margin: 0;
      }
    }
  }
}
</style>
