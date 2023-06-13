import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "vue-query";

// Tailwind CSS
import "@/assets/css/index.css";

// Global CSS
import "@/assets/scss/global.scss";
import { createPinia } from 'pinia';

// api interceptors
// interceptors(axios);




const app = createApp(App)
// define libs
const pinia = createPinia();
// use libs
app.use(router)
app.use(pinia);
app.use(VueQueryPlugin);

app.mount('#app')
