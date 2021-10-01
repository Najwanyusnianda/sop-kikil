<template>
    <div class="bg-white min-h-full flex flex-col w-full">
    <v-tailwind-modal v-model="show_modal" @confirm="confirm" @cancel="cancel" class="flex w-full">
      <template v-slot:title></template>

    </v-tailwind-modal>
        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
               <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
                <div class="mr-5 flex flex-col m-5">
                    <span class="font-bold text-xl text-gray-800 dark:text-white ml-2">
                        Revisi DIPA
                    </span>
                    <span class="text-sm text-gray-500 dark:text-white ml-2">

                    </span>
                </div>
                            <!--<span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                                September 2021
                            </span>-->
            </div>
            <div class="flex items-center">



                <button class="text-gray-500 mr-5">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <br>
        <div class="w-full  pt-2">
            <current-dipa></current-dipa>
        </div>

        <div class="mt-10 w-full">
            <span class="w-2/3 px-2 py-1 ml-3 items-center font-semibold text-xs  text-base ">
                                Revisi Subject Matter
            </span>


            <div class="mt-10">
                <revisi-subject-matter @openUploadRevisiForm="openUploadRevisiForm(kode_sm)"></revisi-subject-matter>
            </div>
        </div>

         <div class="mb-10 h-20 "></div>
    </div>
</template>



<script>

import CurrentDipa from './revisi_dipa/CurrentDipa.vue';
import RevisiSubjectMatter from './revisi_dipa/RevisiSubjectMatter.vue';
export default {

    name:'RevisiDipa',
    components: { CurrentDipa, RevisiSubjectMatter },
    data(){
        return{
            show_modal:false
        }
    },
    computed:{

    },
    openModal(){
        this.show_modal=true
    },
    confirm() {
            // some code...
        this.show_modal = false
    },
    methods:{
        openModal(){
             this.show_modal=true
        },
        openUploadRevisiForm(kode_sm){

            const kode=kode_sm
            console.log(kode)
            this.openModal()

        }
    }

}
</script>