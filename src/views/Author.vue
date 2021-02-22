<template>
  <div class="home">
    <div class="sidebar">
      <div class="sidebar-top">
        <h1>Bookish Log</h1>
        <p>
          A log of all of the books I have read starting in 2021.
        </p>
      </div>
      <div class="sidebar-navigation">
        LINKS HERE
      </div>
      <div class="sidebar-bottom">
        <p>
          Created By
          <a href="https://musicalwebdev.com" target="_blank">
            Brittany Walker</a
          >
        </p>
        <h4>Other Logs</h4>
        <ul>
          <li>Theater Log</li>
        </ul>
      </div>
    </div>
    <div class="main">
      <OverallAuthorStatistics :author-info="authors" />
      <Authors :author-info="authors" />
    </div>
  </div>
</template>

<script>
import Authors from "@/components/Authors.vue";
import { authorData } from "@/data/authors.js";
import OverallAuthorStatistics from "@/components/Statistics/OverallAuthorStatistics.vue";

export default {
  name: "Author",
  components: {
    Authors,
    OverallAuthorStatistics
  },
  data() {
    return {
      authors: authorData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
