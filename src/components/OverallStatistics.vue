<template>
  <div class="overall-stats-component">
    <div class="stats-list">
      <div class="statistics">
        <section class="numbers">
          <h2>Other Numbers</h2>
          <div class="age">
            <div class="stat blue">
              <p class="stat-number">{{ valueCount("age", "Adult") }}</p>
              <p class="stat-title">Adult</p>
            </div>
            <div class="stat red">
              <p class="stat-number">
                {{ valueCount("age", "Young Adult") }}
              </p>
              <p class="stat-title">Young Adult</p>
            </div>
            <div class="stat purple">
              <p class="stat-number">
                {{ valueCount("age", "Middle Grade") }}
              </p>
              <p class="stat-title">Middle Grade</p>
            </div>
            <div class="stat orange">
              <p class="stat-number">
                {{ valueCount("medium", "Physical") }}
              </p>
              <p class="stat-title">Physical Books</p>
            </div>
            <div class="stat gold">
              <p class="stat-number">{{ valueCount("medium", "E-Book") }}</p>
              <p class="stat-title">E-Books</p>
            </div>
            <div class="stat green">
              <p class="stat-number">{{ valueCount("medium", "Audio") }}</p>
              <p class="stat-title">Audio Books</p>
            </div>
            <div class="stat lightblue">
              <p class="stat-number">
                {{ valueCount("medium", "Physical and Audio") }}
              </p>
              <p class="stat-title">Physical & Audio</p>
            </div>
            <div class="stat pink">
              <p class="stat-number">
                {{ valueCount("type", "Fiction") }}
              </p>
              <p class="stat-title">Fiction</p>
            </div>
            <div class="stat blue">
              <p class="stat-number">
                {{ valueCount("type", "Non-Fiction") }}
              </p>
              <p class="stat-title">Non-Fiction</p>
            </div>
            <div class="stat orange">
              <p class="stat-number">
                {{ valueCountList("genre", "Short Stories") }}
              </p>
              <p class="stat-title">Short Stories/Novellas</p>
            </div>
          </div>
        </section>
        <section class="book-length-ratings">
          <div class="ratings">
            <div class="favorite-books">
              <h3>Favorite Books</h3>
              <ul>
                <li
                  class="book"
                  v-for="(book, index) in filter('fav', true)"
                  :key="index"
                >
                  <img
                    class="book-cover-img"
                    :class="[
                      { 'e-book': book.medium == 'E-Book' },
                      { audio: book.medium == 'Audio' }
                    ]"
                    :alt="`${book.title} book cover`"
                    :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                  />
                  <p>{{ book.title }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="length">
            <div class="shortest-book">
              <h3>Shortest Book</h3>
              <img
                class="book-cover-img"
                :class="[
                  {
                    'e-book':
                      sortByLength()[sortByLength().length - 1].title.medium ==
                      'E-Book'
                  },
                  {
                    audio:
                      sortByLength()[sortByLength().length - 1].title.medium ==
                      'Audio'
                  }
                ]"
                :alt="
                  `${
                    sortByLength()[sortByLength().length - 1].title
                  } book cover`
                "
                :src="
                  require(`@/assets/imgs/${slug(
                    sortByLength()[sortByLength().length - 1].title
                  )}.png`)
                "
              />
              <p>{{ sortByLength()[sortByLength().length - 1].title }}</p>
              <p>{{ sortByLength()[sortByLength().length - 1].pages }} Pages</p>
            </div>
            <div class="longest-book">
              <h3>Longest Book</h3>
              <div class="longest-book-wrapper">
                <div
                  v-for="(book, index) in longestBook()"
                  :key="index"
                  class="long-book"
                >
                  <img
                    class="book-cover-img"
                    :class="[
                      { 'e-book': book.medium == 'E-Book' },
                      { audio: book.medium == 'Audio' }
                    ]"
                    :alt="`${book.title} book cover`"
                    :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                  />
                  <p>{{ book.title }}</p>
                  <p>{{ book.pages }} Pages</p>
                </div>
              </div>
            </div>
          </div>
          <div class="dnf-books">
            <h3>DNFed books</h3>
            <p>Books started that I decided not to finish.</p>
            <ul>
              <li
                class="book"
                v-for="(book, index) in filterDnf('progress', 'dnf')"
                :key="index"
              >
                <img
                  class="book-cover-img"
                  :class="[
                    { 'e-book': book.medium == 'E-Book' },
                    { audio: book.medium == 'Audio' }
                  ]"
                  :alt="`${book.title} book cover`"
                  :src="require(`@/assets/imgs/${slug(book.title)}.png`)"
                />
                <p>{{ book.title }}</p>
              </li>
            </ul>
          </div>
        </section>
        <div class="genres">
          <div class="genre-list">
            <h2>Genres</h2>
            <ul>
              <li
                v-for="(genreAmount, genre) in count(listGenres)"
                :key="genre"
                class="genre"
                :class="[{ 'fade-genre': genreAmount < 2 }]"
              >
                <p class="">{{ genre }}</p>
                <p class="">{{ genreAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="setting">
          <div class="setting-list">
            <h2>Book Settings</h2>
            <ul>
              <li
                v-for="(settingAmount, setting) in count(listSettings)"
                :key="setting"
                class="genre"
                :class="[{ 'fade-genre': settingAmount < 2 }]"
              >
                <p class="">{{ setting }}</p>
                <p class="">{{ settingAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="genres">
          <div class="genre-list narrators">
            <h2>Audiobook Narrators</h2>
            <ul>
              <li
                v-for="(narratorAmount, narrator) in count(listNarrators)"
                :key="narrator"
                class="genre"
                :class="[{ 'fade-genre': narratorAmount < 2 }]"
              >
                <p class="">{{ narrator }}</p>
                <p class="">{{ narratorAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="genres">
          <div class="genre-list narrators">
            <h2>Book Publishers</h2>
            <ul>
              <li
                v-for="(publisherAmount, publisher) in count(listPublishers)"
                :key="publisher"
                class="genre"
                :class="[{ 'fade-genre': publisherAmount < 2 }]"
              >
                <p class="">{{ publisher }}</p>
                <p class="">{{ publisherAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="genres">
          <div class="genre-list narrators">
            <h2>Audio Book Publishers</h2>
            <ul>
              <li
                v-for="(audioPublisherAmount, audioPublisher) in count(
                  listAudioPublishers
                )"
                :key="audioPublisher"
                class="genre"
                :class="[{ 'fade-genre': audioPublisherAmount < 2 }]"
              >
                <p class="">{{ audioPublisher }}</p>
                <p class="">{{ audioPublisherAmount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="tbr">
          <div class="tbr-list narrators">
            <h2>"To Be Read" List</h2>
            <div class="tbr-wrapper">
              <div class="tbr-info">
                <p class="subheading">Books that I own but haven't read yet.</p>
                <p class="tbr-number">Total: {{ tbrInfo.length }}</p>
              </div>
              <div class="next-book">
                <button @click="chooseNextBook()">Choose Next Book</button>
                <p v-if="nextBook">{{ nextBook }}</p>
              </div>
            </div>
            <ul>
              <li v-for="tbr in tbrInfo" :key="slug(tbr)" class="tbr-book">
                <p class="">{{ tbr }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins/mixins.ts";

export default {
  props: {
    bookInfo: Array,
    tbrInfo: Array
  },
  data() {
    return {
      nextBook: ""
    };
  },
  mixins: [mixins],
  computed: {
    filterReadBooks() {
      return this.bookInfo.filter(item => item.progress == "finished");
    },
    listGenres() {
      let genreList = [];
      this.filterReadBooks.forEach(function(each) {
        genreList.push(each.genre);
      });

      return genreList.flat();
    },
    listSettings() {
      let settingList = [];
      this.filterReadBooks.forEach(function(each) {
        settingList.push(each.setting);
      });

      return settingList.flat();
    },
    listPublishers() {
      let publisherList = [];
      this.filterReadBooks.forEach(function(each) {
        if (each.publisher.length > 0) {
          publisherList.push(each.publisher);
        }
      });

      return publisherList.flat();
    },
    listAudioPublishers() {
      let audioPublisherList = [];
      this.filterReadBooks.forEach(function(each) {
        if (each.audioBookPublisher.length > 0) {
          audioPublisherList.push(each.audioBookPublisher);
        }
      });

      return audioPublisherList.flat();
    },
    listNarrators() {
      let narratorList = [];
      this.filterReadBooks.forEach(function(each) {
        if (each.audioBookNarrator[0].length > 0) {
          narratorList.push(each.audioBookNarrator);
        }
      });

      return narratorList.flat();
    }
  },
  methods: {
    sortByLength() {
      const sorted = (a, b) => {
        if (a.pages > b.pages) {
          return -1;
        } else {
          return 1;
        }
      };
      return this.filterReadBooks.sort(sorted);
    },
    sortByRating() {
      const sorted = (a, b) => {
        if (a.rating > b.rating) {
          return -1;
        } else {
          return 1;
        }
      };
      return this.filterReadBooks.sort(sorted);
    },
    filter(key, value) {
      return this.filterReadBooks.filter(item => item[key] == value);
    },
    filterList(key, value) {
      return this.filterReadBooks.filter(item => item[key].includes(value));
    },
    filterDnf(key, value) {
      return this.bookInfo.filter(item => item[key] == value);
    },
    count(obj) {
      var countedObj = {};

      obj.forEach(function(el) {
        countedObj[el] = countedObj[el] + 1 || 1;
      });

      const sortedCountedObj = Object.entries(countedObj).sort(
        (a, b) => b[1] - a[1]
      );
      countedObj = Object.fromEntries(sortedCountedObj);
      return countedObj;
    },
    valueCount(key, value) {
      return this.filterReadBooks.filter(book => book[key] === value).length;
    },
    valueCountList(key, value) {
      return this.filterReadBooks.filter(book => book[key].includes(value))
        .length;
    },
    longestBook() {
      let longestBooks = [];
      if (this.sortByLength()[0].pages == this.sortByLength()[1].pages) {
        longestBooks.push(this.sortByLength()[0], this.sortByLength()[1]);
      } else {
        longestBooks.push(this.sortByLength()[0]);
      }
      return longestBooks;
    },
    chooseNextBook() {
      this.nextBook = this.tbrInfo[
        Math.floor(Math.random() * this.tbrInfo.length)
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

ul {
  padding: 0;
  list-style: none;
}

h2 {
  padding: 0 20px 20px 20px;
  margin: 0;
}

h3 {
  margin: 0 0 15px 0;
}

.dnf-books {
  margin: auto;
  text-align: center;
}

.tbr {
  padding: 20px;
  h2,
  .subheading,
  .tbr-number {
    text-align: center;
  }
  .tbr-list ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    margin: auto;
    .tbr-book {
      margin: 10px;
      background-color: $black;
      text-align: center;
      border-radius: 7px;
      color: white;
      display: flex;
      p {
        margin: 0;
        padding: 10px;
      }
      p:first-child {
        padding-right: 10px;
        border-right: none !important;
      }
    }
  }
}

.numbers {
  h2 {
    padding-top: 20px;
    padding-bottom: 0;
  }
  .stats-wrapper {
    display: flex;
    padding: 35px 20px 20px 20px;
    border: 2px solid white;
    position: relative;
    flex-wrap: wrap;
    margin-bottom: 40px;
    align-items: center;
    flex-grow: 1;
    justify-content: center;
    @media screen and (min-width: 992px) {
      margin-right: 15px;
      flex-grow: 0;
    }
    h3 {
      position: absolute;
      background-color: white;
      color: $black;
      padding: 10px;
      text-align: center;
      z-index: 1;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.length {
  display: flex;
  margin: auto;
  max-width: 1000px;
  justify-content: center;
  flex-wrap: wrap;
}

.star-ratings {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.shortest-book {
  max-width: 250px;
}

.longest-book-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.overall-stats-component {
  .favorite-books ul,
  .dnf-books ul {
    display: flex;
    margin: auto;
    max-width: 1300px;
    justify-content: center;
    align-items: baseline;
    flex-wrap: wrap;
    li {
      margin: 0 10px;
      width: 100px;
      @media screen and (min-width: 668px) {
        width: 150px;
      }
    }
    .book p {
      margin: 10px auto;
    }
  }
}

.book-cover-img {
  width: auto;
  height: 150px;
}

.numbers,
.genres,
.setting {
  background-color: $black;
  color: white;
  border-left: 2px solid white;
  border-top: 2px solid white;
}

.setting {
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}

.length,
.ratings,
.genres,
.age,
.methods,
.setting,
.years {
  text-align: center;
}

.book-length-ratings {
  padding: 35px;
  max-width: 1300px;
  margin: auto;
}
.age {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 35px;
  .stat {
    background-color: $black;
    padding: 15px;
    text-align: center;
    margin: 10px;
    border-radius: 7px;
    flex-grow: 1;
    color: white;
    &.blue {
      box-shadow: #1d5ed3 2px 2px, $black 4px 4px, #1d5ed3 6px 6px,
        $black 8px 8px, #1d5ed3 10px 10px;
      border: 2px solid #1d5ed3;
    }
    &.green {
      box-shadow: #1a963c 2px 2px, $black 4px 4px, #1a963c 6px 6px,
        $black 8px 8px, #1a963c 10px 10px;
      border: 2px solid #1a963c;
    }
    &.red {
      box-shadow: #d31d1d 2px 2px, $black 4px 4px, #d31d1d 6px 6px,
        $black 8px 8px, #d31d1d 10px 10px;
      border: 2px solid #d31d1d;
    }
    &.purple {
      box-shadow: #6e1dd3 2px 2px, $black 4px 4px, #6e1dd3 6px 6px,
        $black 8px 8px, #6e1dd3 10px 10px;
      border: 2px solid #6e1dd3;
    }
    &.gold {
      box-shadow: #d3a01d 2px 2px, $black 4px 4px, #d3a01d 6px 6px,
        $black 8px 8px, #d3a01d 10px 10px;
      border: 2px solid #e0b549;
    }
    &.orange {
      box-shadow: #d3721d 2px 2px, $black 4px 4px, #d3721d 6px 6px,
        $black 8px 8px, #d3721d 10px 10px;
      border: 2px solid #d3721d;
    }
    &.lightblue {
      box-shadow: $black 2px 2px, #1dadd3 4px 4px, $black 6px 6px,
        #1dadd3 8px 8px, $black 10px 10px;
      border: 2px solid #1dadd3;
    }
    &.pink {
      box-shadow: $black 2px 2px, #d31d96 4px 4px, $black 6px 6px,
        #d31d96 8px 8px, $black 10px 10px;
      border: 2px solid #d31d96;
    }
    @media screen and (min-width: 922px) {
      flex-grow: 0;
    }
    .stat-number {
      font-size: 35px;
      font-weight: bold;
      margin: 0;
      @media screen and (min-width: 922px) {
        font-size: 50px;
      }
    }
    .stat-title {
      margin: 0;
    }
  }
}

.setting {
  padding: 20px;
  .setting-list ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    margin: auto;
    .location {
      margin: 10px;
      background-color: white;
      text-align: center;
      border-radius: 7px;
      color: $black;
      display: flex;
      p {
        margin: 0;
        padding: 10px;
      }
      p:first-child {
        padding-right: 10px;
        border-right: 3px solid #1d5ed3;
      }
    }
    .fade-location {
      background-color: #5f5a5a;
      color: white;
    }
  }
}

.genres,
.setting,
.tbr {
  padding: 20px;
  .genre-list ul,
  .setting-list,
  .tbr-list ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 1300px;
    margin: auto;
    .genre,
    .location,
    .tbr-book {
      margin: 10px;
      background-color: $black;
      text-align: center;
      border-radius: 7px;
      color: white;
      display: flex;
      box-shadow: $black 2px 2px, #1d5ed3 4px 4px, $black 6px 6px;
      border: 2px solid #1d5ed3;
      p {
        margin: 0;
        padding: 10px;
      }
      p:first-child {
        padding-right: 10px;
        border-right: 3px solid #1d5ed3;
      }
    }
    .genre:nth-child(2n + 1),
    .location:nth-child(2n + 1),
    .tbr-book:nth-child(2n + 1) {
      box-shadow: $black 2px 2px, #6e1dd3 4px 4px, $black 6px 6px;
      border: 2px solid #6e1dd3;
      p:first-child {
        border-color: #6e1dd3 !important;
      }
    }
    .genre:nth-child(3n + 2),
    .location:nth-child(3n + 2),
    .tbr-book:nth-child(3n + 2) {
      box-shadow: $black 2px 2px, #1a963c 4px 4px, $black 6px 6px;
      border: 2px solid #1a963c;
      p:first-child {
        border-color: #1a963c !important;
      }
    }
    .genre:nth-child(5n + 3),
    .location:nth-child(5n + 3),
    .tbr-book:nth-child(5n + 3) {
      box-shadow: $black 2px 2px, #d31d96 4px 4px, $black 6px 6px;
      border: 2px solid #d31d96;
      p:first-child {
        border-color: #d31d96 !important;
      }
    }
    .genre:nth-child(7n + 5),
    .location:nth-child(7n + 5),
    .tbr-book:nth-child(7n + 5) {
      box-shadow: $black 2px 2px, #d3a01d 4px 4px, $black 6px 6px;
      border: 2px solid #d3a01d;
      p:first-child {
        border-color: #d3a01d !important;
      }
    }
    .genre:nth-child(11n + 7),
    .location:nth-child(11n + 7),
    .tbr-book:nth-child(11n + 7) {
      box-shadow: $black 2px 2px, #d31d1d 4px 4px, $black 6px 6px;
      border: 2px solid #d31d1d;
      p:first-child {
        border-color: #d31d1d !important;
      }
    }
    .genre:nth-child(13n + 11),
    .location:nth-child(13n + 11),
    .tbr-book:nth-child(13n + 11) {
      box-shadow: $black 2px 2px, #1dadd3 4px 4px, $black 6px 6px;
      border: 2px solid #1dadd3;
      p:first-child {
        border-color: #1dadd3 !important;
      }
    }
    .fade-genre,
    .fade-location,
    .fade-genre:nth-child(2n + 1),
    .fade-location:nth-child(2n + 1),
    .fade-genre:nth-child(3n + 2),
    .fade-location:nth-child(3n + 2),
    .fade-genre:nth-child(7n + 5),
    .fade-location:nth-child(7n + 5),
    .fade-genre:nth-child(5n + 3),
    .fade-location:nth-child(5n + 3),
    .fade-genre:nth-child(11n + 7),
    .fade-location:nth-child(11n + 7),
    .fade-genre:nth-child(13n + 11),
    .fade-location:nth-child(13n + 11) {
      background-color: $black !important;
      color: #aea5a5 !important;
      box-shadow: $black 2px 2px, #aea5a5 4px 4px, $black 6px 6px !important;
      border: 2px solid #aea5a5 !important;
      p:first-child {
        border-color: #aea5a5 !important;
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .fade-genre {
    display: none !important;
  }

  .genres,
  .setting,
  .tbr {
    padding: 10px;
    li {
      font-size: 12px;
      margin: 5px !important;
      box-shadow: none !important;
      border-width: 1px !important;
      p {
        padding: 5px !important;
      }
    }
    p:first-child {
      border-width: 1px !important;
    }
  }
}

.next-book {
  text-align: center;
  margin-bottom: 20px;
  button {
    background-color: white;
    border: 2px solid $black;
    padding: 15px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 7px;
    &:hover,
    &:active {
      background-color: $black;
      color: white;
    }
  }
}
</style>
