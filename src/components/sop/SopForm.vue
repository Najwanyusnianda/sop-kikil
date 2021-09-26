<template>
    <div class=" p-4  dark:bg-gray-700 w-">
           <v-tailwind-modal v-model="show" @confirm="confirm" @cancel="cancel">
      <template v-slot:title>Hello, vue-final-modal</template>
      <p>Vue Final Modal is a renderless, stackable, detachable and lightweight modal component.</p>
    </v-tailwind-modal>


        <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">

                <button type="button" @click="resetStateSop()"
                    class="py-1 px-2 flex justify-center items-center   hover:bg-gray-500 focus:ring-gray-500 focus:ring-offset-gray-200 text-gray-700 hover:text-white w-full transition ease-in duration-200 text-center text-base text-sm  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Kembali
                </button>

            </div>
            <div class="flex items-center">

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
        <div class="flex items-center  mb-4 space-x-12 bg-white rounded-lg">
            <form @submit.prevent="postSop" enctype='multipart/form-data' >
                            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h5 class="sm:text-xl text-2xl font-medium title-font mb-3text-gray-900">Standar Operasional
                            Prosedur</h5>
                        <p class="lg:w-2/3 text-sm mx-auto leading-relaxed text-gray-400 ">Menambahkan standar
                            operasional prosedur baru.</p>
                    </div>

                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-gray-600">Judul</label>
                                    <input type="text" id="title" name="title" v-model="sop_form.title"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>


                            <!--<div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>-->
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="description" class="leading-7 text-sm text-gray-600 w-1/2">Deskripsi Ringkas</label>
                                    <textarea id="description" name="description" v-model="sop_form.description"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">


                                    <label for="message" class="leading-7 text-sm text-gray-600"  >Pihak - Pihak yang terlibat</label>
                                     <table class="flex w-full text-xs" >
                                         <tbody>
                                        <tr class="font-semibold items-center ">
                                            <td class="">
                                                <input type="checkbox" id="tags_id" name="tags_id" v-model="sop_form.tags_id"
                                                class="" value="10">
                                             </td>
                                            <td>
                                                <label class="ml-2" for="tags_id">
                                                Kuasa Pengguna Anggaran (KPA)
                                                </label>
                                            </td>
                                        </tr>
                                                                                <tr class="font-semibold items-center  ">
                                            <td class="">
                                                <input type="checkbox" id="tags_id" name="tags_id" v-model="sop_form.tags_id"
                                                class="" value="11">
                                             </td>
                                            <td>
                                                <label class="ml-2" for="tags_id">
                                                Pejabat Pembuat Komitmen (PPK)
                                                </label>
                                            </td>
                                        </tr>
                                        {{  sop_form.tags_id }}
                                        <tr class="font-semibold items-center  ">
                                            <td class="">
                                                <input type="checkbox" id="tags_id" name="tags_id" v-model="sop_form.tags_id"
                                                class="" value="12">
                                             </td>
                                            <td>
                                                <label class="ml-2" for="tags_id" >
                                                Pejabat Penandatangan SPM (PPSPM)
                                                </label>
                                            </td>
                                        </tr>
                                        <tr class="font-semibold items-center  ">
                                            <td class="">
                                                <input type="checkbox" id="tags_id" name="tags_id" v-model="sop_form.tags_id"
                                                class="" value="13">
                                             </td>
                                            <td>
                                                <label class="ml-2" for="tags_id">
                                                Bendahara Pengeluaran
                                                </label>
                                            </td>
                                        </tr>
                                        <tr class="font-semibold items-center  ">
                                            <td class="">
                                                <input type="checkbox" id="tags_id" name="tags_id" v-model="sop_form.tags_id"
                                                class="" value="20">
                                             </td>
                                            <td>
                                                <label class="ml-2" for="tags_id">
                                                    Subject Matter (Fungsi)
                                                </label>
                                            </td>
                                        </tr>
                                         </tbody>



                                    </table>
                                    <div class="">


                                    </div>

                                </div>
                            </div>
                             <div class="p-2 w-full">
                                <div class="relative">

                                    <label for="message" class="leading-7 text-sm text-gray-600">Upload File</label>
                                    <input type="file" id="sop_file" name="sop_file" ref="file" @change="handleFileUpload"
                                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </div>
                            </div>

                            <div class="p-2 w-full mt-5 pb-10">
                                <button type="submit"
                                    class="py-2 flex mx-auto text-white bg-blue-500 text-sm border-0 py-1 px-8 focus:outline-none hover:bg-blue-600 rounded ">Simpan</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            </form>

        </div>
        <!--<div class="block m-auto">

        </div>-->



    </div>
</template>
<script>
import VTailwindModal from '../utils/VTailwindModal.vue'
import axios from 'axios'

export default {
    name: 'SopForm',
    components: {
        VTailwindModal


        //ModalsContainer
    },
    data() {
        return {
            show: false,
            sop_form: {
                title: '',
                description: '',
                tags_id: [],

            },
            sop_file:''
        }
    },
    methods: {
        resetStateSop() {
            this.$emit("showSopForm")
        },
        openModalExample() {
            this.$vfm.show('example')
        },
        confirm() {
            // some code...
            this.show = false
        },
        cancel(close) {
            // some code...
            close()
        },
        async postSop(){

           const header={"Content-Type": "multipart/form-data"}
           const url='/sops';
           const formData = new FormData();

           formData.append("sop_file",this.sop_file)
           formData.append('title',this.sop_form.title)
           formData.append('description',this.sop_form.description)
           formData.append('tags_id',this.sop_form.tags_id)


            console.log(formData)
           await axios.post(url,

             formData,
            {
                headers:header
            })

        },
       handleFileUpload(e){
         //  alert("wow")
        this.sop_file = e.target.files[0];
      }

    }
}
</script>