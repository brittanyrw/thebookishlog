<template>
  <div class="authors">
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
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap");
</style>
