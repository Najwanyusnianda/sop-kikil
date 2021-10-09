<template>
    <div>
        <div class=" p-4  dark:bg-gray-700 w-full">
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
                    <div class="mr-5 flex flex-col">
                        <span class="font-bold text-2xl text-gray-800 dark:text-white ml-2">
                            Daftar Standar Operasional Prosedur
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


<button type="button"  @click="addNewSop" class="py-2 px-4 flex justify-center items-center  bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
            <!-- <div class="flex items-center justify-between mb-4 space-x-12">
            <span class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200">
                September 2021
            </span>
            <span
                class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white">
                HIGHT PRIORITY
            </span>
        </div>-->

            <div class="block m-auto pt-4">

            </div>

            <div class="bg-white  flex items-center justify-center  shadow-lg rounded-2xl">
                <div class="w-full   sm:rounded-lg " v-if="sops.length >0">
                              <table class="min-w-full divide-y divide-gray-200 w-4/5 overflow-scroll table-fixed ">
                                <thead class="bg-gray-50">
                                  <tr>
                                    <th scope="col"
                                      class=" w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Judul
                                    </th>
                                    <th scope="col"
                                      class="w-2/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider block ">
                                      deskripsi
                                    </th>
                                    <th scope="col"
                                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Update Terakhir
                                    </th>

                                    <th scope="col" class="w-1/5 relative px-6 py-3">
                                      <span class="sr-only">Edit</span>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                  <tr v-for="sop in sops" :key="sop.id">
                                    <td class="px-6 py-4 font-semibold flex text-sm">
                                      {{ sop.title }}
                                    </td>

                                    <td class="px-6 py-4 whitespace-nowrap break-words">

                                      <p class="truncate ... text-xs">{{ sop.description }}</p>

                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                      {{ sop.updated }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-xs font-medium">
                                      <div class="inline-flex">
                                        <button @click="detailSop(sop.id)"
                                          class="bg-gray-200 hover:bg-blue-600  text-gray-800 hover:text-white py-2 px-4 rounded-l">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                        </button>
                                        <button @click="updateSop(sop.id)"
                                          class="bg-gray-200 hover:bg-blue-600  text-gray-800  hover:text-white py-2 px-4 ">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                          </svg>
                                        </button>
                                        <button @click="deleteSop(sop.id)"
                                          class="bg-red-500 hover:bg-red-700  text-white  hover:text-white py-2 px-4 rounded-r">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                          </svg>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                </div>
                <div v-else>
                    <div class="container bg-white px-5 py-24 mx-auto">
                      <div class="justify-center flex mx-auto w-full">
                        Sop Tidak Ditemukan
                      </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
//import TableTask from '../../components/utils/TableTask.vue'
import dayjs from 'dayjs'
export default {
    name: 'SopCrud',
    components: {
       // TableTask

    },
    props:{
            sop_list:{
            type:Array,
            default:function(){
                return []
            }

        },
                tag_list:{
            type:Array,
            default:function(){
                return []
            }

        },

    },
    data() {
        return {


        }
    },
    computed:{
        sops(){
            return this.sop_list.map((sop)=>{
                let tags= this.tag_list.filter((tag)=>{
                        return tag.sop_id == sop.id
                    }
                )
                return{
                    "id":sop.id,
                    "title":sop.title,
                    "file_url":sop.file_url,
                    "description":this.text_truncate(sop.description,60),
                    "img_url":'',
                    "updated":dayjs(sop.updated_at).format('YYYY-MM-DD HH:mm:ss'),
                    "tags":tags


                }

            })
        }
    },

    methods:{
        addNewSop(){
            this.$emit("showSopForm")
        },
        updateSop(id){

            this.$emit("updateSop",id)
        },
        detailSop(id){
            this.$emit("detailSop",id)
        },
        deleteSop(id){

            this.$emit("deleteSop",id)
        },
        text_truncate(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  }

    }

}



</script>