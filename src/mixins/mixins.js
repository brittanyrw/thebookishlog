export default {
  methods: {
    slug(title) {
      return title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/ /g, ":")
        .replace(/ /g, "'")
        .replace(/[^\w-]+/g, "");
    },
    flagEmoji(countryCode) {
      return countryCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        );
    }
  }
};
