<template>
  <div class="statistics-container">
    <h2>Author Statistics</h2>
    <div class="statistics">
      <div class="stat blue">
        <p class="stat-number">{{ authorInfo.length }}</p>
        <p class="stat-title">Authors Read</p>
      </div>
      <div class="stat red">
        <p class="stat-number">{{ valueCount("fav", true) }}</p>
        <p class="stat-title">Fav Authors</p>
        <p class="stat-percent">
          {{ Math.floor((valueCount("fav", true) / authorInfo.length) * 100) }}%
        </p>
      </div>
      <div class="stat purple">
        <p class="stat-number">{{ getAuthorsWithMultipleBooks(2) }}</p>
        <p class="stat-title">Multi Books</p>
        <p class="stat-percent">
          {{
            Math.floor(
              (getAuthorsWithMultipleBooks(2) / authorInfo.length) * 100
            )
          }}%
        </p>
      </div>
      <div class="stat orange">
        <p class="stat-number">{{ getAuthorsWithMultipleBooks(2) }}</p>
        <p class="stat-title">Award Winning Authors</p>
        <p class="stat-percent">
          {{
            Math.floor(
              (getAuthorsWithMultipleBooks(2) / authorInfo.length) * 100
            )
          }}%
        </p>
      </div>
      <div class="stat gold most-awards">
        <p class="stat-number most-awards-number">
          {{ getAuthorWithMostAwards().name }}
        </p>
        <p class="stat-title">Most Awards</p>
        <p class="stat-percent">
          {{ getAuthorWithMostAwards().awards.length }}
        </p>
      </div>
      <div class="stat green">
        <p class="stat-number">{{ valueCount("gender", "female") }}</p>
        <p class="stat-title">Female</p>
        <p class="stat-percent">
          {{
            Math.floor(
              (valueCount("gender", "female") / authorInfo.length) * 100
            )
          }}%
        </p>
      </div>
      <div class="country-stats">
        <ul>
          <li
            v-for="(countryAmount, countryCode) in countArray(authorCountries)"
            :key="countryCode"
            class="author-stat-flags"
          >
            <p class="author-stat-flag">{{ flagEmoji(countryCode) }}</p>
            <p class="author-stat-flag-amount">{{ countryAmount }}</p>
            <p class="author-stat-country">{{ countryName(countryCode) }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from "@/mixins/mixins.ts";

export default {
  props: {
    authorInfo: Array
  },
  mixins: [mixins],
  computed: {
    authorCountries() {
      let countryList = [];
      this.authorInfo.forEach(function(each) {
        if (each.country.length > 1) {
          each.country.forEach(function(each) {
            countryList.push(each.code);
          });
        } else {
          countryList.push(each.country[0].code);
        }
      });
      return countryList;
    }
  },
  methods: {
    valueCount(key, value) {
      return this.authorInfo.filter(book => book[key] === value).length;
    },
    countArray(arr) {
      var countedArray = {};

      arr.forEach(function(el) {
        countedArray[el] = countedArray[el] + 1 || 1;
      });
      let sortable = [];
      for (var country in countedArray) {
        sortable.push([country, countedArray[country]]);
      }
      sortable.sort(function(a, b) {
        return b[1] - a[1];
      });

      let sortedCountries = {};
      sortable.forEach(function(item) {
        sortedCountries[item[0]] = item[1];
      });
      return sortedCountries;
    },
    countryName(countryCode) {
      let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
      return regionNames.of(countryCode);
    },
    getAuthorsWithMultipleBooks(minBooks) {
      return this.authorInfo.filter(author => author.books.length >= minBooks)
        .length;
    },
    getAuthorsWithAwards() {
      return this.authorInfo.filter(
        author => author.awards && author.awards.length > 0
      ).length;
    },
    getAuthorWithMostAwards() {
      return this.authorInfo.reduce((maxAuthor, currentAuthor) => {
        const currentAwardCount =
          (currentAuthor.awards && currentAuthor.awards.length) || 0;
        const maxAwardCount =
          (maxAuthor.awards && maxAuthor.awards.length) || 0;

        return currentAwardCount > maxAwardCount ? currentAuthor : maxAuthor;
      }, this.authorInfo[0]);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.statistics-container {
  background-color: $black;
  padding: 20px;
  border-left: 2px solid white;
  h2 {
    color: white;
    margin: 0;
    margin-bottom: 20px;
  }
  .statistics {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 40px;
    .general-stats,
    .gender-stats,
    .other-stats,
    .country-stats {
      display: flex;
      padding: 35px 20px 20px 20px;
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
        background-color: white;
        color: $black;
        padding: 10px;
        text-align: center;
        z-index: 1;
        top: -20px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .stat {
      background-color: $black;
      text-align: center;
      margin: 10px 10px 40px 10px;
      border-radius: 7px;
      color: white;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &.blue {
        box-shadow: #1d5ed3 2px 2px, $black 4px 4px, #1d5ed3 6px 6px,
          $black 8px 8px, #1d5ed3 10px 10px;
        border: 2px solid #1d5ed3;
        .stat-percent {
          border-color: #1d5ed3;
        }
      }
      &.green {
        box-shadow: #1a963c 2px 2px, $black 4px 4px, #1a963c 6px 6px,
          $black 8px 8px, #1a963c 10px 10px;
        border: 2px solid #1a963c;
        .stat-percent {
          border-color: #1a963c;
        }
      }
      &.red {
        box-shadow: #d31d1d 2px 2px, $black 4px 4px, #d31d1d 6px 6px,
          $black 8px 8px, #d31d1d 10px 10px;
        border: 2px solid #d31d1d;
        .stat-percent {
          border-color: #d31d1d;
        }
      }
      &.purple {
        box-shadow: #6e1dd3 2px 2px, $black 4px 4px, #6e1dd3 6px 6px,
          $black 8px 8px, #6e1dd3 10px 10px;
        border: 2px solid #6e1dd3;
        .stat-percent {
          border-color: #6e1dd3;
        }
      }
      &.gold {
        box-shadow: #d3a01d 2px 2px, $black 4px 4px, #d3a01d 6px 6px,
          $black 8px 8px, #d3a01d 10px 10px;
        border: 2px solid #e0b549;
        .stat-percent {
          border-color: #e0b549;
        }
      }
      &.orange {
        box-shadow: #d3721d 2px 2px, $black 4px 4px, #d3721d 6px 6px,
          $black 8px 8px, #d3721d 10px 10px;
        border: 2px solid #d3721d;
        .stat-percent {
          border-color: #d3721d;
        }
      }
      &.lightblue {
        box-shadow: $black 2px 2px, #1dadd3 4px 4px, $black 6px 6px,
          #1dadd3 8px 8px, $black 10px 10px;
        border: 2px solid #1dadd3;
        .stat-percent {
          border-color: #1dadd3;
        }
      }
      &.pink {
        box-shadow: $black 2px 2px, #d31d96 4px 4px, $black 6px 6px,
          #d31d96 8px 8px, $black 10px 10px;
        border: 2px solid #d31d96;
        .stat-percent {
          border-color: #d31d96;
        }
      }
      @media screen and (min-width: 992px) {
        margin: 10px;
      }
      .stat-number {
        font-size: 35px;
        font-weight: bold;
        margin: 0;
        padding: 10px 20px 0 20px;
        @media screen and (min-width: 992px) {
          font-size: 50px;
        }
      }
      .stat-number.most-awards-number {
        font-size: 35px;
        max-width: 324px;
      }
      .stat-title {
        margin: 0;
        padding: 0 20px 30px 20px;
      }
      .stat-percent {
        margin: 0;
        background-color: $black;
        color: white;
        position: absolute;
        padding: 10px;
        bottom: -40px;
        right: 5px;
        height: 65px;
        width: 65px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid;
      }
    }
  }
}

.most-awards .stat-title {
  padding: 0 20px 20px 20px !important;
}

.country-stats {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }
  .author-stat-flags {
    display: inline-block;
    background-color: white;
    text-align: center;
    margin: 5px;
    border-radius: 7px;
    color: $black;
    position: relative;
    padding: 5px;
    border: 2px solid $black;
    @media screen and (min-width: 992px) {
      padding: 10px;
      margin: 10px;
      box-shadow: white 2px 2px, $black 4px 4px, white 6px 6px, $black 8px 8px,
        white 10px 10px;
    }
    p {
      display: inline-block;
      margin-bottom: 0;
      margin-top: 0;
    }
    .author-stat-flag {
      font-size: 28px;
      margin-right: 15px;
      @media screen and (min-width: 992px) {
        font-size: 40px;
      }
    }
    .author-stat-flag-amount {
      font-size: 28px;
      font-weight: bold;
      @media screen and (min-width: 992px) {
        font-size: 40px;
      }
    }
    .author-stat-country {
      display: block;
    }
  }
}
</style>
