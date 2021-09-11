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
    path:'/dashboard',
    name:'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')

  },
  {
    path:'/sop',
    name:'Sop',
    component: () => import(/* webpackChunkName: "about" */ '../views/sop.vue')

  },
  {
    path:'/management',
    name:'Management',
    component: () => import(/* webpackChunkName: "about" */ '../views/Management.vue'),
    children:[
      {
        path:'laporan_bulanan',
        name:'LaporanBulanan',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management/LaporanBulanan.vue')

      },
      {
        path:'perencanaan_kinerja',
        name:'PerencanaanKinerja',
        component: () => import(/* webpackChunkName: "about" */ '../views/Management/PerencanaanKinerja.vue')

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

export default router
