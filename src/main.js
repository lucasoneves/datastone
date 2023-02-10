import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import VeeValidate from "vee-validate";


import "./assets/base.scss";
import "./assets/main.scss";

const app = createApp(App);

app.use(store);
app.use(router);
// app.use(VeeValidate);

app.mount("#app");
