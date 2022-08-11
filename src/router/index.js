import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home/index.vue";
import Gallery from "../views/Gallery/index.vue";
import Blog from "../views/Blog/index.vue";
import Post from "../views/Post/index.vue";
import Contact from "../views/Contact/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/1",
    name: "post",
    component: Post,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
