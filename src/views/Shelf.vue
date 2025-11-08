<template>
  <div class="shelf">
    <div class="main">
      <BookShelf :shelf-info="shelf" :tbr-info="tbr" />
    </div>
  </div>
</template>

<script>
import { tbrData, shelfReadData } from "@/data/tbr";
import BookShelf from "@/components/BookShelf.vue";

export default {
  name: "Shelf",
  components: {
    BookShelf
  },
  data() {
    return {
      tbr: tbrData,
      shelf: shelfReadData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap");
</style>
