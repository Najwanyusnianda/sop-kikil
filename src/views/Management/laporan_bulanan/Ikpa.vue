<template>
    <div class="flex flex-col w-full pl-0 md:px-4 md:space-y-2">
        <!-- tab -->
        <!--  <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <tabs-menu :tabs_menu='tabs_menu' @changedTabs="changeTabs"></tabs-menu>


        </header>-->


        <!--<button @click="openModal" >show modal</button>-->
        <!------------------------ Main Section -->
        <div class=" bg-gray-100 pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap justify-start sm:flex-row ">
                <div class="w-full ">
                    <div class="" v-if="!is_form">
                        <div class="flex items-center justify-between mb-6">
                                                    <div class="flex items-center">
                            <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
                            <div class="mr-5 flex flex-col">
                                <span class="font-bold text-2xl text-gray-800 dark:text-white ml-2">
                                    Daftar IKPA Bulanan
                                </span>
                                <span class="text-sm text-gray-500 dark:text-white ml-2">

                                </span>
                            </div>
                            <span
                                class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                                September 2021
                            </span>
                        </div>

                        <div class="flex items-center">

                            <div class="">


                                <button type="button" @click="is_form = true"
                                    class="py-2 px-4 flex justify-center items-center  bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Buat Baru
                                </button>


                            </div>

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

                        <div class="">
                                                          <table class="w-2/3 divide-y divide-gray-200 w-4/5 overflow-scroll table-fixed ">
                                <thead class="bg-gray-50">
                                  <tr>
                                    <th scope="col"
                                      class=" w-2/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Bulan
                                    </th>
                                    <th scope="col"
                                      class="w-2/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider block ">
                                      Status
                                    </th>


                                  </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                  <tr v-for="month in monthly_ikpa" :key="month.value" >
                                                                          <td class="px-6 py-4 whitespace-nowrap">
                                      {{ month.name }}
                                    </td>
                                     <td></td>
                                    <td class="px-6 py-4 whitespace-nowrap break-words">


                                        <button @click="detailIkpa(month.value)"
                                          class="bg-gray-200 hover:bg-blue-600  text-gray-800 hover:text-white py-2 px-4 rounded-l">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                        </button>
                                    </td>


                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>


                    <div v-else class="">
                        <ikpa-form @removeState="removeState" ></ikpa-form>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import IkpaForm from '../../../components/monthly_progress/IkpaForm.vue'
export default {
    name:'Ikpa',
    components:{
        IkpaForm
    },
    data(){
        return{
            is_form:false,
            monthly_ikpa:[ {name:'Januari', value:1},{name:'Februari', value:2},{name:'Maret', value:3},{name:'April', value:4},{name:'Mei', value:5},{name:'Juni', value:6},{name:'Juli', value:7},{name:'Agustus', value:8},{name:'September', value:9},{name:'Oktober', value:10},{name:'November', value:11},{name:'Desember', value:12}]
        }
    },
    methods:{
      removeState(){
          this.is_form =false
      }
    }
}
</script>