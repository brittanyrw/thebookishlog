import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Author from "../views/Author.vue";
import Stats from "../views/Stats.vue";
import HomeLibrary from "../views/HomeLibrary.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/authors",
    name: "Author",
    component: Author
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats
  },
  {
    path: "/home-library",
    name: "HomeLibrary",
    component: HomeLibrary
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "is-active",
  routes
});

export default router;
