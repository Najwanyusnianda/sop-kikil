<template>

  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl  w-full overflow-auto h-screen relative p-auto">
    <div class="flex items-center justify-center">

      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4" v-if="is_next">
        <header class="w-4/5 shadow-lg bg-white dark:bg-gray-700 justify-items-center mx-auto h-16 rounded-2xl z-40">
            <search-menu @filterType="filterSopType"></search-menu>
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
      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4" v-else>
                    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">SOP KIKIL</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Merupakan sistem yang disusun untuk memudahkan, merapikan, dan menertibkan pekerjaan yang berkaitan dengan pelaksanaan .</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 ">
        <div class="h-full hover:border-2 bg-white hover:border-blue-500 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5">

          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Pelaksanaan Anggaran</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">Pembayaran/Realisasi Anggaran, Penyampaian Data Kontrak, Penyelesaian Tagihan, SPM yang Akurat, Kebijakan Dispensasi SPM</p>
            <span class="inline-flex">
                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" @click="filterSopType('anggaran')" >Lihat</button>
            </span>
          </div>
        </div>
      </div>
            <div class="p-4 lg:w-1/2 ">
        <div class="h-full hover:border-2 bg-white hover:border-blue-500 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5">

          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Laporan Keuangan</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">Pembayaran/Realisasi Anggaran, Penyampaian Data Kontrak, Penyelesaian Tagihan, SPM yang Akurat, Kebijakan Dispensasi SPM</p>
            <span class="inline-flex">
                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" @click="filterSopType('anggaran')" >Lihat</button>
            </span>
          </div>
        </div>
      </div>
            <div class="p-4 lg:w-1/2 ">
        <div class="h-full hover:border-2 bg-white hover:border-blue-500 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5">

          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Manajemen Kas</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">Pembayaran/Realisasi Anggaran, Penyampaian Data Kontrak, Penyelesaian Tagihan, SPM yang Akurat, Kebijakan Dispensasi SPM</p>
            <span class="inline-flex">

                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" @click="filterSopType('kas')" >Lihat</button>

            </span>
          </div>
        </div>
      </div>
            <div class="p-4 lg:w-1/2 ">
        <div class="h-full hover:border-2 bg-white hover:border-blue-500 flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5">

          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Lainnya</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">Pembayaran/Realisasi Anggaran, Penyampaian Data Kontrak, Penyelesaian Tagihan, SPM yang Akurat, Kebijakan Dispensasi SPM</p>
            <span class="inline-flex">
                <button class="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" @click="filterSopType('Lainnya')" >Lihat</button>
            </span>
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
import {mapState} from 'vuex'

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
            is_next:false
            }
    },
    computed:{
      ...mapState(['current_month','current_year','is_loading'])
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
        },

        async filterSopType(e){

         // const type=JSON.parse(JSON.stringify(e));

         const type=e
         let url= `/sops/type/${type}`
         if(type=="semua"){
           url='/sops'
         }


          this.$store.commit('SET_LOADING', true)
          await axios.get(url).then((response)=>{


                const res = response.data
                this.sops= res.data.sop_list,
                this.tags=res.data.tags_list
                  this.is_next=true
                  this.$store.commit('SET_LOADING', false)
            }).catch((error)=>{
              console.log(error)


              this.$store.commit('SET_LOADING',false)
          })
        }

    },
    async created(){

       // await this.fetchSops()
    }

}
</script>
