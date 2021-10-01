<template>

  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen w-full  relative p-auto">

            <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
               <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
                <div class="ml-5 flex flex-col mt-10">
                    <span class="font-bold text-2xl text-gray-800 dark:text-white ml-2">
                        Dashboard
                    </span>
                    <span class="text-sm text-gray-500 dark:text-white ml-2">

                    </span>
                </div>

            </div>
            <div class="flex items-center">

               <!-- <select
                    class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="month">
                    <option value="">
                        Pilih Bulan
                    </option>
                    <option :value="month.value" v-for="month in months" :key="month.value">
                        {{ month.name }}
                    </option>


                </select>-->

                <button class="text-gray-200">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    <div class="flex items-start justify-between">

      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
          <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
            <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
              <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                <div class="relative flex items-center w-full lg:w-64 h-full group">
                  <div
                    class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                      </path>
                    </svg>
                  </div>
                  <svg
                    class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                    </path>
                  </svg>
                  <input type="text"
                    class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                    placeholder="Search" />
                  <div
                    class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                    +
                  </div>
                </div>
              </div>
              <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                <a href="#" class="block relative">
                  <img alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div class="  pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <div class="flex flex-col flex-wrap sm:flex-row ">
            <div class="w-full sm:w-1/2 xl:w-2/3">
            <!-- monitoring task list -->
              <div class="mb-4 ">
                  <realisasi-anggaran :months ="months"></realisasi-anggaran>

              </div>
               <!-- rencana penarikan-->

              <div class="mb-4">

              </div>
            </div>
            <div class="w-full sm:w-1/2 xl:w-1/3">
            <!-- monitoring realisasi anggaran-->
              <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">

              </div>
              <!-- rencana sop-->
              <div class="mb-4 sm:ml-4 xl:mr-4">
                <monitoring-task :current_month="current_month"></monitoring-task>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import MonitoringTask from '../components/dashboard/MonitoringTask.vue'
import RealisasiAnggaran from '../components/dashboard/RealisasiAnggaran.vue'
import {mapState} from 'vuex'
//import MonitoringTask from '../components/monthly_progress/MonitoringTask.vue';
export default {
    name:'Dashboard',
    components:{
        MonitoringTask,
        RealisasiAnggaran

  //      MonitoringTask
    },
    computed:{
      ...mapState(['current_month','months'])
    }
}
</script>