<template>
    <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div class="relative items-center pl-1 flex w-full  sm:pr-2 sm:ml-0">
            <div class="container relative left-0 z-50 flex w-full justify-between h-auto h-full">
                <div class="relative flex justify-start items-center w-full  h-full group">
                    <div
                        class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                        <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <div class="search flex w-full">
                                                <input type="text" v-model="search_sop"
                        class="justify-start block w-3/4 py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                        placeholder="Pencarian" />
                            <button  @click="searchProsedur"  class="bg-blue-600 text-white px-4 py-1 ml-2 rounded-md"> Cari</button>

                    </div>
                    <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path
                            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                        </path>
                    </svg>

                    <!--  <div
                                class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                +
                            </div>-->



                </div>
                <div class="Roles Show">
                <select @change="filterType"
                    class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="role">

                    <option v-for="type in types" :key="type.value" :value="type.value">
                        {{ type.name }}
                    </option>

                </select>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'SearchMenu',
    data(){
        return{
            roles:[
            {name:'Semua',kode:0},
            {name:'Kuasa Pengguna Anggaran',kode:10},
            {name:'Pejabat Pembuat Komitmen',kode:11},
            {name:'Pejabat Penandatangan SPM',kode:12},
            {name:'Bendahara Pengeluaran',kode:13},
            {name:'Subject Matter',kode:20}],
            types:[
                {name:'Semua',value:'semua'},
                {name:'Pelaksanaan Anggaran',value:'anggaran'},
                {name:'Manajemen Kas',value:'kas'},
                {name:'Laporan Keuangan',value:'keuangan'},
                {name:'Lainnya',value:'lainnya'},
            ],
            selected_role:0,
            selected_type:0,
            search_sop:''
        }
    },
    methods:{
        filterType(event){
            const type=event.target.value
            this.$emit("filterType",type)
        },
        searchProsedur(){

            this.$emit("searchSop",this.search_sop)
        }


    }
}
</script>