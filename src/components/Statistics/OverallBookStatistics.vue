<template>
  <div class="statistics-container">
    <h2>Statistics</h2>
    <div class="statistics">
      <div class="stat purple">
        <p class="stat-number">{{ filterReadBooks.length }}</p>
        <p class="stat-title">Books Read</p>
      </div>
      <div class="stat blue">
        <p class="stat-number">
          {{ (countRead("rating") / filterReadBooks.length).toFixed(2) }}
        </p>
        <p class="stat-title">Avg Rating</p>
      </div>
      <div class="stat orange">
        <p class="stat-number">
          {{ valueCount("rating", 5) }}
        </p>
        <p class="stat-title">5 Stars</p>
      </div>
      <div class="stat gold">
        <p class="stat-number">
          {{ Math.floor(countRead("publishedYear") / filterReadBooks.length) }}
        </p>
        <p class="stat-title">Avg Release Year</p>
      </div>
      <div class="stat green">
        <p class="stat-number stat-number-pages">
          {{ countRead("pages").toLocaleString() }}
        </p>
        <p class="stat-title">Total Pages</p>
      </div>
      <div class="stat red">
        <p class="stat-number">
          {{ Math.floor(countRead("pages") / filterReadBooks.length) }}
        </p>
        <p class="stat-title">Avg Pages</p>
      </div>
      <div class="stat lightblue">
        <p class="stat-number">
          {{ valueCountDnf("progress", "dnf") }}
        </p>
        <p class="stat-title">DNF books</p>
      </div>
      <div class="stat gold">
        <p class="stat-number">{{ rereadCount }}</p>
        <p class="stat-title">Re-reads</p>
      </div>
      <div class="stat lightblue">
        <p class="stat-number">
          {{ countYear("2021") }}
        </p>
        <p class="stat-title">2021</p>
      </div>
      <div class="stat red">
        <p class="stat-number">
          {{ countYear("2022") }}
        </p>
        <p class="stat-title">2022</p>
      </div>
      <div class="stat green">
        <p class="stat-number">{{ countYear("2023") }}</p>
        <p class="stat-title">2023</p>
      </div>
      <div class="stat pink">
        <p class="stat-number">{{ countYear("2024") }}</p>
        <p class="stat-title">2024</p>
      </div>
      <div class="stat orange">
        <p class="stat-number">{{ countYear("2025") }}/52</p>
        <p class="stat-title">
          {{ Math.floor((countYear("2025") / 52) * 100) }}%
        </p>
        <p class="stat-title">2025</p>
      </div>
      <div class="stat blue stat-number-avg-days">
        <p class="stat-number">
          {{ Math.floor(averageTimeToRead(2025)) }}
        </p>
        <p class="stat-title">Avg Days Per Book (2025)</p>
      </div>
      <div class="stat purple">
        <p class="stat-number">
          {{ Math.floor(countYearlyRead("pages", 2025) / countYear("2025")) }}
        </p>
        <p class="stat-title">Avg Pages (2025)</p>
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
      return this.bookInfo.filter(item => item.progress == "finished");
    },
    rereadCount() {
      return this.filterReadBooks.filter(book => book.isReread).length;
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
      return this.filterReadBooks.reduce(
        (res, item) => (item[key] ? res + item[key] : res),
        0
      );
    },
    valueCount(key, value) {
      return this.filterReadBooks.filter(book => book[key] === value).length;
    },
    valueCountDnf(key, value) {
      return this.bookInfo.filter(book => book[key] === value).length;
    },
    countYear(year) {
      return this.filterReadBooks.filter(book =>
        book["dateFinished"].includes(year)
      ).length;
    },
    countYearlyRead(key, year) {
      return this.filterReadBooks
        .filter(item => {
          const date = new Date(item.dateFinished);
          return date.getFullYear() === year;
        })
        .reduce((res, item) => (item[key] ? res + item[key] : res), 0);
    },
    averageTimeToRead(year) {
      let yearlyBooks = this.filterReadBooks.filter(book => {
        let finishedYear = new Date(book.dateFinished).getFullYear();
        return finishedYear === year;
      });

      let timeToRead = yearlyBooks.map(book => {
        let start = new Date(book.dateStarted);
        let finish = new Date(book.dateFinished);
        return Math.max((finish - start) / 86400000 + 1, 0);
      });

      return timeToRead.length > 0
        ? timeToRead.reduce((a, b) => a + b, 0) / timeToRead.length
        : 0;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.statistics-container,
.stats-by-year-container {
  background-color: $black;
  padding: 20px 20px 40px 20px;
  border-left: 2px solid white;
  h2 {
    color: white;
    margin: 0;
    margin-bottom: 20px;
  }
  h3 {
    background-color: white;
    padding: 10px;
    display: inline-block;
    margin: 0;
    position: absolute;
    top: -20px;
    left: 39%;
  }
  .statistics,
  .stats-by-year {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    .stat {
      background-color: $black;
      padding: 15px;
      text-align: center;
      margin: 10px;
      border-radius: 7px;
      flex-grow: 1;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &.blue {
        box-shadow: #1d5ed3 2px 2px, $black 4px 4px, #1d5ed3 6px 6px,
          $black 8px 8px, #1d5ed3 10px 10px;
        border: 2px solid #1d5ed3;
      }
      &.green {
        box-shadow: #1a963c 2px 2px, $black 4px 4px, #1a963c 6px 6px,
          $black 8px 8px, #1a963c 10px 10px;
        border: 2px solid #1a963c;
      }
      &.red {
        box-shadow: #d31d1d 2px 2px, $black 4px 4px, #d31d1d 6px 6px,
          $black 8px 8px, #d31d1d 10px 10px;
        border: 2px solid #d31d1d;
      }
      &.purple {
        box-shadow: #6e1dd3 2px 2px, $black 4px 4px, #6e1dd3 6px 6px,
          $black 8px 8px, #6e1dd3 10px 10px;
        border: 2px solid #6e1dd3;
      }
      &.gold {
        box-shadow: #d3a01d 2px 2px, $black 4px 4px, #d3a01d 6px 6px,
          $black 8px 8px, #d3a01d 10px 10px;
        border: 2px solid #e0b549;
      }
      &.orange {
        box-shadow: #d3721d 2px 2px, $black 4px 4px, #d3721d 6px 6px,
          $black 8px 8px, #d3721d 10px 10px;
        border: 2px solid #d3721d;
      }
      &.lightblue {
        box-shadow: $black 2px 2px, #1dadd3 4px 4px, $black 6px 6px,
          #1dadd3 8px 8px, $black 10px 10px;
        border: 2px solid #1dadd3;
      }
      &.pink {
        box-shadow: $black 2px 2px, #d31d96 4px 4px, $black 6px 6px,
          #d31d96 8px 8px, $black 10px 10px;
        border: 2px solid #d31d96;
      }
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
  border: 2px solid white;
  margin: 50px 20px 20px 20px;
  position: relative;
  padding-top: 40px;
}

.stat-number-avg-days {
  max-width: 150px;
}
</style>
