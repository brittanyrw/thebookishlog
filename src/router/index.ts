import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Author from "../views/Author.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "is-active",
  routes
});

export default router;
