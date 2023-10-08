import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/scss/style.scss";

createApp(App).use(createPinia()).mount('#app')
