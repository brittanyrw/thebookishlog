import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Author from "../views/Author.vue";
import Genres from "../views/Genres.vue";
import Dates from "../views/Dates.vue";
import OtherData from "../views/OtherData.vue";

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
    path: "/genres",
    name: "Genres",
    component: Genres
  },
  {
    path: "/dates",
    name: "Dates",
    component: Dates
  },
  {
    path: "/other",
    name: "OtherData",
    component: OtherData
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "is-active",
  routes
});

export default router;
