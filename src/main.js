import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'
import { vfmPlugin } from 'vue-final-modal'

createApp(App).use(router).use(store)
.use(
    axios.defaults.baseURL='http://127.0.0.1:8000/api/'
)
.use(dayjs)
.use(vfmPlugin)
.mount('#app')
