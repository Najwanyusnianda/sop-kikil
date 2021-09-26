<template>
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">

        <!-- tab -->
        <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <tabs-menu :tabs_menu='tabs_menu' @changedTabs="changeTabs"></tabs-menu>
        </header>
        <!------------------------ Main Section -->
        <div class="  pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap justify-start sm:flex-row ">
                <div class="w-full ">
                    <div class="mb-4" v-if="tabs_menu.is_rutin_tabs">
                        <div class="" v-if="selected_task_indicator =='' ">
                            <task-list @selectInd="entriTask" :tasks="tasks"></task-list>
                        </div>
                        <div class="" v-else >
                             <task-form @removeTaskState="changeTaskState" :task="selected_task" @updatedTaskStatus="updatedTaskStatus"></task-form>
                        </div>

                    </div>
                    <div class="mb-4" v-else>
                        <ikpa-list :ikpas="ikpas"></ikpa-list>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

//import axios from 'axios'

import TabsMenu from '../../components/monthly_progress/TabsMenu.vue'
import IkpaList from '../../components/monthly_progress/IkpaList.vue'
import TaskList from '../../components/monthly_progress/TaskList.vue'
import TaskForm from '../../components/monthly_progress/TaskForm.vue'
//import Loading from 'vue-loading-overlay';
import axios from 'axios'
import {mapState} from 'vuex'

//axios.defaults.baseURL='http://127.0.0.1:8000'
//import { mapState } from 'vuex'
//import TabsMenu from '../../components/monthly_progress/TabsMenu.vue'
export default {

    name:'LaporanBulanan',
    components:{
        TabsMenu,
        IkpaList,
        TaskList,
        TaskForm,
        //Loading

    },
    data(){
        return{
            tabs_menu:{
                is_rutin_tabs:true,

            },

            selected_task_indicator:'',
            selected_ikpa_indicator:'',
            selected_task:'',
            tasks:[],
            ikpas:[
                {indicator_id:'1001',name:'Revisi DIPA', bobot:5,tanggal_update:'2021-10-09',is_complete:true},
                {indicator_id:'1002',name:'Deviasi Halaman III DIPA', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'1003',name:'Pagu Minus', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'2001',name:'Penyampaian Data Kontrak', bobot:5,tanggal_update:'2021-10-09',is_complete:true},
                {indicator_id:'2002',name:'Pengelolaan UP dan TUO', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'2003',name:'Penyampaian LPJ Bendahara', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'2004',name:'Dispensasi SPM', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'3001',name:'Penyerapan Anggaran', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'3002',name:'Penyelesaian Tagihan', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'3003',name:'Capaian Output', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'3004',name:'Retur SP2D', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'3003',name:'Pengembalian SPM', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
                {indicator_id:'3004',name:'Perencanaan Kas', bobot:5,tanggal_update:'2021-10-09',is_complete:false},
            ],

        }
    },
    computed:{
        ...mapState(['current_month','current_year','is_loading'])
    },
    methods:{
     async entriTask(indicator_id){//async
            /*const url='/get_task/'+indicator_id
            await  axios.get(url,{}).then((response)=>{
                //console.log(response.data)
                this.selected_task=response.data
                this.selected_task_indicator=this.selected_task.id
            })*/
            const url=`/monthly_progress/task/${indicator_id}`
            await axios.get(url).then((response)=>{
                //console.log(response.data)
                const result=response.data
                if(result.success){
                this.selected_task=result.data
                console.log('this.selected_task:')
                console.log(this.selected_task)
                this.selected_task_indicator=this.selected_task.id
                }


            }).catch((error)=>{
                console.log(console.log(error))
            })

            this.selected_task_indicator=indicator_id
        },
        changeTabs(kode_tabs){
            console.log(kode_tabs)
            if(kode_tabs ==="01"){
                return this.tabs_menu.is_rutin_tabs=true

            }else if(kode_tabs ==="02"){
                return this.tabs_menu.is_rutin_tabs=false
            }
        },
        changeTaskState(){
            return this.selected_task_indicator =''
        },
       async getTaskList(month){//async
               this.$store.commit('SET_LOADING',true)
           const url=`/monthly_progress/${month}`

          await axios.get(url)
          .then((response)=>{
              const res=response.data
              this.tasks=res.data
              this.$store.commit('SET_LOADING',false)
          }).catch((error)=>{
              console.log(error)
              this.$store.commit('SET_LOADING',false)
          })
        },

        async updatedTaskStatus(){
            await this.getTaskList(this.current_month.value)
        }
    },
    async mounted(){
        await this.getTaskList(this.current_month.value)
    }
}
</script>