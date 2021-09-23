<template>
                <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                  <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center">

                      <div class="flex flex-col">
                        <span class="font-bold text-md text-black dark:text-white ml-2">
                          Kegiatan Rutin
                        </span>
                        <span class="text-sm text-gray-500 dark:text-white ml-2">
                            {{ current_month.name }}
                        </span>
                      </div>
                    </div>

                  </div>
                  <hr>
                                <ul v-if="tasks.length > 0" >
                                        <li   v-for="task in tasks" :key="task.id" class="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                            <div class="flex items-center justify-start text-sm">
                                                <span class="mx-4">
                                                    01


                                                </span>
                                                <span>
                                                    {{ task.name }}
                                                </span>
                                            </div>
                                            <svg v-if="task.is_complete" width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" class="text-green-500 mx-4">
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                                                </path>
                                            </svg>
                                            <svg v-else width="20" height="20" fill="currentColor" class="mx-4 text-gray-400 dark:text-gray-300" viewBox="0 0 1024 1024">
                                                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" fill="currentColor">
                                                </path>
                                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor">
                                                </path>
                                            </svg>
                                        </li>

                                </ul>

                                <ul v-else class="flex justify-center">
                                    <span
                                        class=" px-2 py-1 flex  mt-4 items-center rounded-md font-semibold text-yellow-500 bg-yellow-100">
                                             Kegiatan tidak ditemukan
                                    </span>

                                </ul>

                  <!--<span
                    class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
                    DUE DATE : 18 JUN
                  </span>-->
                </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'MonitoringTask',
   data(){
       return{
                tasks:[]
       }

   },
   props:{
       current_month:{
           type:Object,

       }
   },
   methods:{
       async getTaskList(month){//async
               this.$store.commit('is_loading',true)
           const url=`/monthly_withdrawing/${month}`

          await axios.get(url)
          .then((response)=>{
              const res=response.data
              this.tasks=res.data
              this.$store.commit('is_loading',false)
          }).catch((error)=>{
              console.log(error)
              this.$store.commit('is_loading',false)
          })
        }
   }
}
</script>
