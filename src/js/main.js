import { createApp } from "vue";
import App from "../App.vue";

const app = createApp(App)
import { createPinia } from 'pinia'
import router from '../router/index.js'

app.use(createPinia())
app.use(router)

createApp(App).mount("#app");