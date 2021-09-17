<template>
  <div id="main">
    <nav>
      <div class="title">
        <router-link to="/"><h1>Bookish Log</h1></router-link>
        <p>
          A log of all of the books I have read starting in 2021.
        </p>
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
@import "@/assets/styles/varibles.scss";
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Verdana";
  background-color: $pink;
}
nav {
  border-bottom: 7px solid $black;
  // display: flex;
  @media screen and (min-width: 992px) {
    display: flex;
  }
  .title {
    padding: 20px;
    @media screen and (min-width: 992px) {
      border-right: 3px solid $black;
    }
    h1,
    a {
      margin: 0;
      font-family: "Abril Fatface", cursive;
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
      border-right: 3px solid $black;
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
      color: $pink;
      transition: color 1s, background-color 1s;
      cursor: pointer;
    }
    .is-active button {
      background-color: $black;
      color: $pink;
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
      color: $pink;
      text-decoration: none;
      border: 3px solid $black;
      display: block;
      text-align: center;
    }
    a:hover {
      background-color: $pink;
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
  font-family: "Abril Fatface", cursive;
}

#main {
  margin: 20px;
  background-color: $pink;
  border: 7px solid $black;
  box-shadow: 10px 10px 0 $black;
  border-radius: 7px 7px 7px 0;
  @media screen and (min-width: 992px) {
    margin: 50px;
  }
}

footer {
  border-top: 7px solid $black;
  padding: 10px;
  a {
    color: $black;
  }
}
</style>
