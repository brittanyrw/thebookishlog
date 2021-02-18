export default {
  methods: {
    slug(title) {
      return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/ /g, ":")
        .replace(/ /g, "'")
        .replace(/[^\w-]+/g, "");
    }
  }
};
