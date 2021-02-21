<template>
  <div class="statistics-container">
    <h1>Author Statistics</h1>
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
              (valueCount("gender", "non-binary-queer") / authorInfo.length) *
                100
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
      <ul>
        Author Countries
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

.country-stats {
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 10px;
    border: 3px solid $black;
    margin: 5px;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
    margin-top: 0;
  }
  .author-stat-flag {
    font-size: 40px;
    margin-right: 10px;
  }
  .author-stat-flag-amount {
    font-size: 30px;
  }
}
</style>
