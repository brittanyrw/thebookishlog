<template>
  <section class="bookshelf">
    
  </section>
</template>

<script>
import mixins from "@/mixins/mixins.ts";

export default {
  props: {
    shelfInfo: Array,
    tbrInfo: Array
  },
  data() {
    return {
      // Example book data for testing
      books: [
        {
          title: "Book 1",
          height: 180,
          width: "regular",
          spineColor: "#e74c3c",
          topColor: "#c0392b",
          decoration: "circle",
          progress: "finished",
          orientation: "vertical"
        },
        {
          title: "Book 2",
          height: 200,
          width: "thick",
          spineColor: "#3498db",
          topColor: "#2980b9",
          decoration: "star",
          progress: "finished",
          orientation: "vertical"
        },
        {
          title: "Book 3",
          height: 170,
          width: "thin",
          spineColor: "#e8c4a5",
          topColor: "#d4a373",
          decoration: null,
          progress: null,
          orientation: "vertical"
        }
      ]
    }
  },

  computed: {},
  methods: {},
  mixins: [mixins]
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

</style>
