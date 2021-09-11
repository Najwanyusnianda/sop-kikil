<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->

  <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen relative">
    <navbar></navbar>
    <div class="flex w-full bg-gray-100">
    <router-view/>
    </div>

  </div>

</template>
<script>
import Navbar from './components/navbar.vue'
export default {
  components:{
    Navbar
  }
}
</script>
<style>
#app {

}

#nav {

}

#nav a {

}

a.router-link-exact-active.main-nav {

}
</style>
