<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-white">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <div class="font-bold mr-5 mr-5 text-blue-800 text-lg font-mono">S O P K I K I L</div>
          <!--<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">-->
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-gray-900", Default: "text-gray-700 hover:bg-gray-700 hover:text-gray-900" -->

            <router-link v-for="item in navigation" :key="item.name"
              :to="{name:item.href}"  :class="[item.current ? 'bg-white text-blue-600 font-bold  px-3 py-2 rounded-md text-base ' : 'hover:text-blue-600 text-gray-700 px-3 py-2 rounded-md text-base font-medium']" class=""
            >    <span>{{ item.name }} </span>

            </router-link>



          </div>
        </div>
      </div>

      <span v-if="user"> {{user.firstname}} </span>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-300">
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button @click="openProfile" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="../assets/user.png" alt="">
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->

          <div  class="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" v-if="open_profile" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Profil</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Pengaturan</a>
            <a href="#"  @click.prevent="pushLogout" v-if="isLogged" cursor-pointer class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Log out</a>

            </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MOBILE MENU, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <!--<div class="px-2 pt-2 pb-3 space-y-1">
      Current: "bg-gray-900 text-gray-900", Default: "text-gray-700 hover:bg-gray-700 hover:text-gray-900"

      <a href="#" class="bg-gray-900 text-gray-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-700 hover:bg-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">SOP</a>

      <a href="#" class=" text-gray-700 hover:bg-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Manajemen</a>


    </div>-->
  </div>
</nav>
</template>
<style scoped>
a.router-link-active {
  @apply text-blue-600 px-3 py-2 rounded-md text-base font-bold
}
</style>


<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:'Navbar',
        props:{
      user:Object
    },
    data(){
        return {
            navigation:[
                  { name:'SOP',href:'Sop',current:false},
                { name:'Monitoring',href:'Dashboard',current:false},

                { name:'Management',href:'Management',current:false},
            ],
            open_profile:false
        }
    },
    computed:{
            ...mapGetters([
      'isLogged'
    ]),
    },
    methods:{
            ...mapActions([
            "logout"
        ]),

      openProfile(){
        console.log(this.open_profile)
        return this.open_profile = !this.open_profile
      },
      pushLogout(){
         //   alert("ddd")
      this.logout()
    }
    }

}
</script>
