<template>
  <div class="authors">
    <div class="main">
      <OverallAuthorStatistics :author-info="authors" />
      <Authors :author-info="authors" :audio-book-narrator="narrators" />
    </div>
  </div>
</template>

<script>
import Authors from "@/components/Authors.vue";
import { authorData } from "@/data/authors.js";
import { audioBookNarratorsData } from "@/data/audioBookNarrators.js";
import OverallAuthorStatistics from "@/components/Statistics/OverallAuthorStatistics.vue";

export default {
  name: "Author",
  components: {
    Authors,
    OverallAuthorStatistics
  },
  data() {
    return {
      authors: authorData,
      narrators: audioBookNarratorsData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
