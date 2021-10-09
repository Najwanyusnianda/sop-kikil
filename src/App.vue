<template>
  <!--<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>-->

  <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl flex flex-col flex-1  relative">
            <loading v-model:active="is_loading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
    <navbar  :user="getUser" v-if="isLogged"  ></navbar> <!--v-if="isLogged"-->
    <div class="flex flex-col flex-1 w-full h-full bg-gray-100">
    <router-view/>
    </div>
    <footer class="footer bg-white text-sm" id="footer">
      Copyright © 2021 <a href="https://acehsingkilkab.bps.go.id/" target="_blank" class="text-blue-600">Badan Pusat Statistik Kabupaten Aceh Singkil</a>. All rights reserved.
    </footer>
  </div>

</template>
    <style scoped>
        #footer {
            position: fixed;
            padding: 10px 10px 0px 10px;
            bottom: 0;
            width: 100%;
            /* Height of the footer*/
            height: 40px;

        }
    </style>
<script>
//import Loading from 'vue-loading-overlay'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import axios from 'axios'
import Navbar from './components/navbar.vue'
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  components:{
    Navbar,
    Loading
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
    async created(){
    const user=localStorage.getItem('user')
    if(user){
      const userData= JSON.parse(user)
      this.$store.commit('SET_USER',userData)
    }else{
      return this.$router.push({
        name:'Login'
      })
    }

          const url="/get_current_month"
      await axios.get(url).then((response)=>{
        console.log(response)
        if(response.status ===200){
            this.$store.commit('SET_MONTH', response.data)
        }
      })
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
