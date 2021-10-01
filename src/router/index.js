import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/sop',
    name:'Sop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sop.vue')

  },
  {
    path:'/dashboard',
    name:'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')

  },
  {
    path: '/login',
    name: 'Login',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },


  {
    path:'/management',
    name:'Management',
    component: () => import(/* webpackChunkName: "about" */ '../views/Management.vue'),
    children:[
      {
        path:'laporan_bulanan',
        name:'LaporanBulanan',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management/LaporanBulanan.vue'),



      },
      {
        path:'perencanaan_kinerja',
        name:'PerencanaanKinerja',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management/PerencanaanKinerja.vue'),
        children:[{
          path:'dipa',
          name:'Dipa',
          component:() =>import(/* webpackChunkName: "about" */ '../views/Management/perencanaan_kinerja/Dipa.vue'),
        },{
          path:'revisi_dipa',
          name:'RevisiDipa',
          component:() =>import(/* webpackChunkName: "about" */ '../views/Management/perencanaan_kinerja/RevisiDipa.vue'),
        }

        ]
      },
      {
        path:'pelaksanaan_anggaran',
        name:'PelaksanaanAnggaran',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management/PelaksanaanAnggaran.vue')

      },
      {
        path:'standar_prosedur',
        name:'StandarProsedur',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management/StandarProsedur.vue')

      },
    ]

  },

]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  const loggedIn =localStorage.getItem('user')

  if(to.matched.some(record=>record.meta.requiresAuth) && !loggedIn){
    next('/login')
    return
  }else{
    if(to.name =='Login' &&  loggedIn){
      next({name:'Dashboard'})
    }else{
      //next({name:'Login'})
      next()
    }

  }
})

export default router
