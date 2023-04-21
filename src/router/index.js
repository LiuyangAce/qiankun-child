import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  base: window.__POWERED_BY_QIANKUN__
    ? "/vue" + process.env.BASE_URL
    : process.env.BASE_URL,
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__
      ? "/vue" + process.env.BASE_URL
      : process.env.BASE_URL
  ),
  routes,
});

export default router;
