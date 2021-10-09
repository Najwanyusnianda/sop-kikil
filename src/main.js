import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from './store'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'
import { vfmPlugin } from 'vue-final-modal'
import VueSweetalert2 from 'vue-sweetalert2';
import('@/assets/main.css');
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(store)
//.use(axios.defaults.baseURL='http://127.0.0.1:8000/api/')https://webapps.bps.go.id/acehsingkilkab/sopkikil/api
.use(axios.defaults.baseURL='https://webapps.bps.go.id/acehsingkilkab/sopkikil/api/')
.use(
  router.beforeEach((to,from,next)=>{

    const loggedIn =localStorage.getItem('user')
    if(to.matched.some(record=>record.meta.requiresAuth) && !loggedIn){
     // alert("aa")
      next('/login')

    }else{
      if(to.name =='Login' &&  loggedIn){
       // alert("bb")
        next({name:'Dashboard'})
      }else{

        //alert("cc")
        next()
        //this.store.commit('LOGIN_STOP', "user tidak ditemukan")

      }

    }
  })
)
.use(

    axios.interceptors.response.use(undefined, function (error) {

        if (error) {
          const originalRequest = error.config;
          if (error.response.status === 401 && !originalRequest._retry) {

           // console.log(error.config)
              originalRequest._retry = true;
              //store.dispatch('logout')

              return this.store.commit('LOGIN_STOP', "user tidak ditemukan")
          }
        }
      })
)
.use(VueSweetalert2)
.use(dayjs)
.use(vfmPlugin)
.mount('#app')
