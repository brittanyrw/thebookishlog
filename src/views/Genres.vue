<template>
  <div class="genre">
    <div class="main">
      <Genre />
    </div>
  </div>
</template>

<script>
import Genre from "@/components/Genre.vue";

export default {
  name: "Genres",
  components: {
    Genre
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
</style>
