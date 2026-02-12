import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Resume from "../pages/Resume.vue";
import Methodik from "../pages/Methodik.vue";
import Gallery from "../pages/Gallery.vue";
import Contact from "../pages/Contact.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/about" },
    { path: "/about", component: About },
    { path: "/resume", component: Resume },
    { path: "/methodik", component: Methodik },
    { path: "/gallery", component: Gallery },
    { path: "/contact", component: Contact },
  ],
});
