<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->

  <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl flex flex-col flex-1  relative">

    <navbar  :user="getUser"  ></navbar> <!--v-if="isLogged"-->
    <div class="flex flex-col flex-1 w-full h-full bg-gray-100">
    <router-view/>
    </div>

  </div>

</template>
<script>
//import Loading from 'vue-loading-overlay'
import Navbar from './components/navbar.vue'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  components:{
    Navbar,
    ///Loading
  },
  computed:{
     ...mapState(['current_month','current_year','is_loading']),
    ...mapGetters(['isLogged', 'getUser'])
  },
  methods:{
    ...mapActions(["logout"]),
    pushLogout(){
      this.logout()
    }
  },
    created(){
    const user=localStorage.getItem('user')
    if(user){
      const userData= JSON.parse(user)
      this.$store.commit('SET_USER',userData)
    }else{
      return this.$router.push({
        name:'Login'
      })
    }
  },
}
</script>
<style>

  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

#app {

}

#nav {

}

#nav a {

}

a.router-link-exact-active.main-nav {

}
</style>
