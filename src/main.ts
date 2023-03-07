import { createApp } from "vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHamburgerMenu, HiSolidX } from "oh-vue-icons/icons";

import App from "./App.vue";
import router from "./router";

import "./scss/global.scss";
import "./scss/pages.scss";

addIcons(CoHamburgerMenu, HiSolidX);

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
