import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
axios from "axios";

axios.defaults.baseURL = "/";

const app = createApp(App);

app.use(router, axios);
app.mount("#app");
