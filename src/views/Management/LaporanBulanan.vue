<template>
    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <!-- tab -->
        <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <tabs-menu></tabs-menu>
        </header>
        <!------------------------ Main Section -->
        <div class=" h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap justify-start sm:flex-row ">
                <div class="w-full ">
                    <div class="mb-4">
                        <div class="" v-if="selected_task_indicator =='' ">
                            <task-list @selectInd="entriTask(indicator_id)" :tasks="tasks"></task-list>
                        </div>
                        <div class="" v-else >
                             <task-form @removeTaskState="changeTaskState" :task="selected_task"></task-form>
                        </div>

                    </div>
                    <div class="mb-4">
                        <ikpa-list></ikpa-list>
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

//import { mapState } from 'vuex'
//import TabsMenu from '../../components/monthly_progress/TabsMenu.vue'
export default {
  components: { TabsMenu, TaskList, IkpaList, TaskForm },
    name:'LaporanBulanan',
    component:{
        TabsMenu,
        IkpaList,
        TaskList,
        TaskForm,

    },
    data(){
        return{
            selected_task_indicator:'',
            selected_ikpa_indicator:'',
            selected_task: {indicator_id:1,name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:true},
            tasks:[
                {indicator_id:1,name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:true},
                {indicator_id:2,name:'Pemutakhiran Halaman III DIPA', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:false},
                {indicator_id:3,name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:false},
                {indicator_id:4,name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:true},
            ]
        }
    },
    computed:{

    },
    methods:{
       entriTask(indicator_id){//async
            /*const url='/get_task/'+indicator_id
            await  axios.get(url,{}).then((response)=>{
                //console.log(response.data)
                this.selected_task=response.data
                this.selected_task_indicator=this.selected_task.id
            })*/
            this.selected_task_indicator=indicator_id
        },
        changeTaskState(){
            return this.selected_task_indicator =''
        },
       getTaskList(){//async

        }
    },
    created(){
        this.getTaskList()
    }
}
</script>