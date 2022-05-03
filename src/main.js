import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// importing AOS css style globally
import "aos/dist/aos.css";

createApp(App).use(store).use(router).mount("#app");
