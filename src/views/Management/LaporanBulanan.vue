<template>
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">

        <!-- tab -->
        <!--<header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <tabs-menu :tabs_menu='tabs_menu' @changedTabs="changeTabs"></tabs-menu>
        </header>-->
                <div class="flex items-center justify-between">
            <span class="font-bold text-2xl text-gray-800 dark:text-white ml-2 -mt-1 mr-5 mb-10"></span>

                    <header class="w-1/3  shadow-lg bg-white dark:bg-gray-700 -mt-5 items-center h-12 rounded-2xl z-40">

            <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">

                <div class="relative items-center pl-1 flex w-2/3 lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div class="inline-flex w-full px-1 pt-2">
                        <router-link v-for="nav in navigation" :key="nav.href"  :to="{name:nav.href}"
                            class="mx-1 py-2 px-4 flex justify-center items-center   hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-800 w-1/3 my-5  transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  w-12 h-12 rounded-lg ">
                          <!-- <span v-html="nav.icon"></span>-->
                          <span>{{nav.desc}}</span>
                        </router-link>

                    </div>
                </div>




            </div>

        </header>


        </div>
        <!------------------------ Main Section -->
        <div class="  pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap justify-start sm:flex-row ">
                <div class="w-full ">
                    <router-view></router-view>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

//import axios from 'axios'


//import Loading from 'vue-loading-overlay';
//import axios from 'axios'


//axios.defaults.baseURL='http://127.0.0.1:8000'
//import { mapState } from 'vuex'
//import TabsMenu from '../../components/monthly_progress/TabsMenu.vue'
export default {

    name:'LaporanBulanan',
    components:{

        //Loading

    },
    data(){
        return{

            navigation:[
                { name:'Rutin Bulanan',href:'RutinBulanan',desc:'Kegiatan' ,icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> </svg>'},
                { name:'Ikpa',href:'Ikpa',desc:'IKPA',icon:' <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> {{ nav.name }} </svg>'},


            ],

        }
    },
    computed:{
        
    },
    methods:{

    },
    created(){
         this.$router.push({ name: 'Ikpa' })
    }

}
</script>

<style scoped>
a.router-link-active {
  @apply bg-blue-600 text-white shadow-md
}
</style>