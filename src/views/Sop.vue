<template>

  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl  w-full overflow-auto h-screen relative p-auto">
    <div class="flex items-center justify-center">

      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <header class="w-4/5 shadow-lg bg-white dark:bg-gray-700 justify-items-center mx-auto h-16 rounded-2xl z-40">
            <search-menu></search-menu>
        </header>
        <div class="  pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <div class="flex flex-col flex-wrap sm:flex-row justify-center">
            <div class="w-full  sm:w-1/2 xl:w-4/5">
              <div class="mb-4">

              </div>
              <div class="mb-4">

              </div>
            </div>
            <div class="w-full  sm:w-4/5 xl:w-4/5">
              <div class="mb-4 mx-0 sm:ml-4 xl:mr-4 flex-grow ">
                  <sop-list :sop_list="sops" :tags_list="tags"></sop-list>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import SearchMenu from '../components/sop/SearchMenu.vue'
import SopList from '../components/sop/SopList.vue'
import axios from 'axios'

export default {
    name:'Sop',
    components:{
        SearchMenu,
        SopList
  //      MonitoringTask
    },
    data(){
        return{
            sops:[],
            tags:[],
            }
    },
    methods:{
              async fetchSops(){
            const url ='/sops'
            await axios.get(url).then((response)=>{
                const res = response.data
                this.sops= res.data.sop_list,
                this.tags=res.data.tags_list

            }).catch((error)=>{
              console.log(error)
              this.$store.commit('SET_LOADING',false)
          })
        }
    },
    async created(){
        await this.fetchSops()
    }

}
</script>
