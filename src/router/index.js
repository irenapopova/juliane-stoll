import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Resume from "../pages/Resume.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/about" },
    { path: "/about", component: About },
    { path: "/resume", component: Resume },
  ],
});
