import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global/variables.css";
import "./styles/global/global.css";

createApp(App).use(router).mount("#app");
