<template>


<div class="container   mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="py-8 ">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>

                            <th scope="col" class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Kinerja
                            </th>
                            <th scope="col" class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                               Jadwal
                            </th>
                            <th scope="col" class="px-5 py-2 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Progress
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="map_tasks">

                        <tr v-for="task in map_tasks" :key="task.name" >

                            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm" >
                                <p class="text-gray-900 whitespace-no-wrap">
                                   {{ task.name }}
                                </p>
                            </td>
                            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    {{task.start_date }} - {{ task.end_date }}
                                </p>
                            </td>
                            <td class="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold  leading-tight" :class="[task.is_complete ? 'text-white' : 'text-white' ]">
                                    <span aria-hidden="true" class="absolute inset-0   rounded-full" :class="[task.is_complete ? 'bg-green-500' : 'bg-red-500' ]">
                                    </span>
                                    <span class="relative text-xs" >
                                       {{ task.is_complete ? 'Selesai' : 'Belum' }}
                                    </span>

                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                    <div class="flex items-center">
                      <!--  <button type="button" class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>
                        <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                            1
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                            2
                        </button>
                        <button type="button" class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                            3
                        </button>
                        <button type="button" class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                            4
                        </button>
                        <button type="button" class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                            <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path>
                            </svg>
                        </button>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>


<script>
import dayjs from 'dayjs'
export default {
    name:'MonitoringTask',
    data(){
        return{
            tasks:[
                {name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:true},
                {name:'Pemutakhiran Halaman III DIPA', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:false},
                {name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:false},
                {name:'Upload Data Capaian Output', start_date:'2021-08-06',end_date:'2021-10-09',is_complete:true},

            ]
        }
    },
    computed:{
        map_tasks(){
            return this.tasks.map((task)=>{
                task.start_date=  dayjs(task.start_date).format('DD')
                task.end_date= dayjs(task.end_date).format('DD MMMM')

                return {
                    name:task.name,
                    start_date:task.start_date,
                    end_date:task.end_date,
                    is_complete:task.is_complete

                }

            })
        }
    }
}
</script>