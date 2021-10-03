<template>
       <div class="h-screen hidden bg-white rounded-md lg:block my-4 ml-4 shadow-lg relative w-80 m-10 m-10">
                <div class=" h-full rounded-2xl dark:bg-gray-700 ">

                    <nav class="mt-6">
                        <div>
                            <!--<a class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                                href="#">
                                <span class="text-left">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="mx-4 text-sm font-normal">
                                    Laporan Bulanan
                                </span>
                            </a>-->
                            <router-link v-for="item in Navigation" :key="item.name" :to="item.href" class=" w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500">
                                <span v-html="item.icon" class="text-left">

                                </span>
                                 <span class="mx-4 text-sm font-normal">
                                  {{ item.name }}
                                </span>

                            </router-link>

                        </div>
                    </nav>
                </div>
            </div>
</template>

<style scoped>
a.router-link-active {
  @apply text-blue-500 bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500
}
</style>

<script>
export default {
    name:'sidebar',
    data(){
        return{
            Navigation:[
                {   name:'Kinerja Bulanan',
                    href:'/management/laporan_bulanan',
                    icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /> </svg>'
                },
                {   name:'Standar Prosedur',
                    href:'/management/standar_prosedur',
                    icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg>'
                },
                 {   name:'Perencanaan Kinerja',
                    href:'/management/perencanaan_kinerja',
                    icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg>'
                },

                {   name:'Pelaksanaan Anggaran',
                    href:'/management/pelaksanaan_anggaran',
                    icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /> </svg>'
                },

                /*                {   name:'Setting',
                    href:'/management/setting',
                    icon:'<svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"> </path> </svg>'
                },*/
            ]
        }
    }
}
</script>

