import { createApp } from "vue";
import App from "./App.vue";
import "./scss/global.scss";
import "./scss/pages.scss";
import router from "./router";

createApp(App).use(router).mount("#app");
