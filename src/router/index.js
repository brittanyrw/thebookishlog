import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Author from "../views/Author.vue";

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes
});

export default router;
