import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'
import { vfmPlugin } from 'vue-final-modal'
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(store)
.use(
    axios.defaults.baseURL='http://127.0.0.1:8000/api/'
)
.use(VueSweetalert2)
.use(dayjs)
.use(vfmPlugin)
.mount('#app')
