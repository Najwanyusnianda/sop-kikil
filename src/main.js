import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'
import router from './router'
import dayjs from 'dayjs'

createApp(App).use(router).use(store).use(dayjs).mount('#app')
