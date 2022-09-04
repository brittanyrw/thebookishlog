<template>
  <div class="statistics-container">
    <h2>Author Statistics</h2>
    <div class="statistics">
      <div class="stat">
        <p class="stat-number">{{ authorInfo.length }}</p>
        <p class="stat-title">Authors Read</p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("poc", true) }}</p>
        <p class="stat-title">Person of Color</p>
        <p class="stat-percent">
          {{ Math.floor((valueCount("poc", true) / authorInfo.length) * 100) }}%
        </p>
      </div>
      <div class="stat">
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
      <div class="stat">
        <p class="stat-number">{{ valueCount("gender", "non-binary") }}</p>
        <p class="stat-title">Non-Binary</p>
        <p class="stat-percent">
          {{
            Math.floor(
              (valueCount("gender", "non-binary") / authorInfo.length) * 100
            )
          }}%
        </p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("gender", "male") }}</p>
        <p class="stat-title">Male</p>
        <p class="stat-percent">
          {{
            Math.floor(
              (valueCount("gender", "male") / authorInfo.length) * 100
            )
          }}%
        </p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("lgbt", true) }}</p>
        <p class="stat-title">LGBTQIA+</p>
        <p class="stat-percent">
          {{
            Math.floor((valueCount("lgbt", true) / authorInfo.length) * 100)
          }}%
        </p>
      </div>
      <div class="country-stats">
        <h3>Countries</h3>
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
    max-width: 1200px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 40px;
    .general-stats,
    .gender-stats,
    .other-stats,
    .country-stats {
      display: flex;
      padding: 35px 20px 20px 20px;
      border: 2px solid $pink;
      position: relative;
      flex-wrap: wrap;
      margin-top: 80px;
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
        top: -20px;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .stat {
      background-color: $pink;
      text-align: center;
      margin: 10px 10px 40px 10px;
      border: 2px solid $pink;
      -webkit-box-shadow: 5px 5px 0 $pink;
      box-shadow: 9px 9px 0 $pink;
      border-radius: 7px;
      color: $black;
      outline: 3px solid $black;
      position: relative;
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
      .stat-title {
        margin: 0;
        padding: 0 20px 30px 20px;
      }
      .stat-percent {
        margin: 0;
        background-color: $black;
        color: $pink;
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
        border: 2px solid $pink;
      }
    }
  }
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
    background-color: $pink;
    text-align: center;
    margin: 10px;
    border-radius: 7px;
    color: $black;
    position: relative;
    padding: 10px;
    p {
      display: inline-block;
      margin-bottom: 0;
      margin-top: 0;
    }
    .author-stat-flag {
      font-size: 35px;
      margin-right: 15px;
      @media screen and (min-width: 992px) {
        font-size: 40px;
      }
    }
    .author-stat-flag-amount {
      font-size: 35px;
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
