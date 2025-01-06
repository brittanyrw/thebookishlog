<template>
  <div id="main">
    <nav>
      <div class="title">
        <router-link to="/"><h1>Bookish Log</h1></router-link>
        <p>
          A log of all of the books I have read starting in 2021.
        </p>
        <div class="icons-header">
          <p>Icon Legend:</p>
          <div class="book-icon-container">
            <img
              class="book-icon"
              alt="star"
              :src="require('@/assets/imgs/star.svg')"
            />
            <p>Fav Book</p>
          </div>
          <div class="book-icon-container">
            <img
              class="book-icon"
              alt="headphones"
              :src="require('@/assets/imgs/headphones.svg')"
            />
            <p>Audio Book</p>
          </div>
          <div class="book-icon-container">
            <img
              class="book-icon"
              alt="repeat"
              :src="require('@/assets/imgs/rotate.svg')"
            />
            <p>Re-Read</p>
          </div>
        </div>
      </div>
      <div class="nav-links">
        <router-link to="/">
          <button>Home</button>
        </router-link>
        <router-link to="/authors">
          <button>Authors</button>
        </router-link>
        <router-link to="/stats">
          <button>Stats</button>
        </router-link>
      </div>
      <div class="external-links">
        <h4>Other Logs</h4>
        <a href="https://theaterlog.com" target="_blank">Theater Log</a>
      </div>
    </nav>
    <router-view />
    <footer>
      <p>
        Created by
        <a href="https://musicalwebdev.com" target="_blank">Brittany Walker.</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rowdies:wght@300&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Verdana";
  background-color: $black;
}
nav {
  border-bottom: 2px solid $black;
  @media screen and (min-width: 992px) {
    display: flex;
  }
  .title {
    padding: 20px;
    @media screen and (min-width: 992px) {
      border-right: 2px solid $black;
      flex-grow: 1;
    }
    h1,
    a {
      margin: 0;
      font-family: "Rowdies", cursive;
      font-size: 30px;
      color: $black;
      text-decoration: none;
    }
    p {
      margin: 10px 0;
    }
  }
  .nav-links {
    padding: 20px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (min-width: 992px) {
      border-right: 2px solid $black;
    }
    button {
      border: 2px solid $black;
      padding: 10px 25px;
      background-color: transparent;
      text-transform: uppercase;
      outline-color: $black;
      margin: 10px;
    }
    button:hover {
      background-color: $black;
      color: white;
      transition: color 1s, background-color 1s;
      cursor: pointer;
    }
    .is-active button {
      background-color: $black;
      color: white;
    }
  }
  .external-links {
    padding: 20px;
    h4 {
      margin: 0 0 20px 0;
    }
    a {
      padding: 5px 10px;
      background-color: $black;
      color: white;
      text-decoration: none;
      border: 3px solid $black;
      display: block;
      text-align: center;
    }
    a:hover {
      background-color: white;
      color: $black;
      transition: 0.5s;
    }
    @media screen and (min-width: 662px) {
      border-top: 0;
    }
  }
  .disabled button {
    cursor: not-allowed;
    border-color: #ccc;
    color: #ccc;
  }
  .disabled button:hover {
    background-color: transparent;
    color: #ccc;
    transition: 0s;
  }
  .disabled button:focus {
    outline: 0;
  }
}

h2 {
  margin: 0;
  font-size: 30px;
  letter-spacing: 2px;
  font-family: "Rowdies", cursive;
}

#main {
  margin: 20px;
  background-color: white;
  border: 2px solid $black;
  box-shadow: 2px 2px white, 4px 4px $black, 6px 6px white, 8px 8px $black,
    10px 10px white, 12px 12px $black;
  border-radius: 7px 7px 7px 0;
  max-width: 1300px;
  @media screen and (min-width: 668px) {
    margin: 20px auto;
  }
  @media screen and (min-width: 992px) {
    margin: 50px auto;
  }
}

footer {
  border-top: 2px solid $black;
  padding: 10px;
  a {
    color: $black;
  }
}

.book-icon {
  height: 20px;
  margin: 5px;
}

.icons-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.book-icon-container {
  display: flex;
  align-items: center;
}
</style>
