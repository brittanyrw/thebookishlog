<template>
  <div class="statistics-container">
    <h2>Author Statistics</h2>
    <div class="statistics">
      <div class="stat">
        <p class="stat-number">{{ authorInfo.length }}</p>
        <p class="stat-title">Authors Read</p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("gender", "female") }}</p>
        <p class="stat-title">Female Authors</p>
        <p class="stat-percent">
          {{
            Math.floor(
              (valueCount("gender", "female") / authorInfo.length) * 100
            )
          }}%
        </p>
      </div>
      <div class="stat">
        <p class="stat-number">
          {{ valueCount("gender", "non-binary") }}
        </p>
        <p class="stat-title">Non-Binary Authors</p>
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
        <p class="stat-title">Male Authors</p>
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
        <p class="stat-title">LGBTQIA+ Authors</p>
        <p class="stat-percent">
          {{
            Math.floor((valueCount("lgbt", true) / authorInfo.length) * 100)
          }}%
        </p>
      </div>
      <div class="stat">
        <p class="stat-number">{{ valueCount("poc", true) }}</p>
        <p class="stat-title">POC Authors</p>
        <p class="stat-percent">
          {{ Math.floor((valueCount("poc", true) / authorInfo.length) * 100) }}%
        </p>
      </div>
    </div>
    <div class="country-stats">
      <h2>Author Countries</h2>
      <ul>
        <li
          v-for="(countryAmount, countryCode) in countArray(authorCountries)"
          :key="countryCode"
          class="author-stat-flags"
        >
          <p class="author-stat-flag">{{ flagEmoji(countryCode) }}</p>
          <p class="author-stat-flag-amount">{{ countryAmount }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mixins from "@/mixins/mixins.js";

export default {
  props: {
    authorInfo: Array
  },
  mixins: [mixins],
  computed: {
    authorCountries() {
      let countryList = [];
      this.authorInfo.forEach(function(each) {
        countryList.push(each.country[0].code);
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

      return countedArray;
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
    color: #fae6e9;
    margin: 0;
    margin-bottom: 20px;
  }
  .statistics {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .stat {
      background-color: #fae6e9;
      text-align: center;
      margin: 10px;
      border: 2px solid #fae6e9;
      -webkit-box-shadow: 5px 5px 0 #fae6e9;
      box-shadow: 9px 9px 0 #fae6e9;
      border-radius: 7px;
      color: $black;
      outline: 3px solid $black;
      position: relative;
      .stat-number {
        font-size: 50px;
        font-weight: bold;
        margin: 0;
        padding: 10px 20px 0 20px;
      }
      .stat-title {
        margin: 0;
        padding: 0 20px 30px 20px;
      }
      .stat-percent {
        margin: 0;
        background-color: $black;
        color: #fae6e9;
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
        border: 2px solid #fae6e9;
      }
    }
  }
}

.country-stats {
  ul {
    list-style: none;
    padding: 0;
  }
  .author-stat-flags {
    display: inline-block;
    background-color: #fae6e9;
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
      font-size: 50px;
      margin-right: 15px;
    }
    .author-stat-flag-amount {
      font-size: 40px;
      font-weight: bold;
    }
  }
}
</style>
