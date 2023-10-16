// import './assets/main.css' //*******Always comment this css for bulma to work */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(App)

app.use(VueGoodTablePlugin);
app.use(router)

app.mount('#app')
