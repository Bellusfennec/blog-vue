import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {
      layout: "DefaultLayout",
    },
    component: () => import("@/views/Blog.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "AuthLayout",
    },
  },
  // {
  //   path: "/registration",
  //   name: "Registration",
  //   component: () => import("@/views/Registration.vue"),
  //   meta: {
  //     layout: "AuthLayout",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
