<template>

<div class="w-full">
      <v-tailwind-modal v-model="show_modal" @confirm="confirm"  class="flex w-full">
      <template v-slot:title></template>
      <sop-detail :current_sop="current_sop" ></sop-detail>
    </v-tailwind-modal>
<section class="text-gray-600 body-font" v-if="sops.length > 0">
  <div class="container   bg-white px-5 py-4 mx-auto ">
    <div class="justify-center flex mx-auto w-full ">
        <table class="table-auto w-4/5 ">
      <thead>
        <tr>
          <th></th>
          <th><span class="opacity-0">spacing only</span></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b " v-for="sop in sops" :key="sop.id">
          <td class="flex flex-col pb-4 mr-5 mt-2">
            <a href="#" @click.prevent="detailSop(sop.id)" class="text-base font-semibold hover:text-blue-500"> {{sop.title}} </a>
            <span class="text-xs text-gray-400"> {{ sop.updated }} </span>
            <span class="flex text-sm">
              {{ sop.description }}
            </span>
            <div class="pt-4 w-1/3">
              <span v-for="tag in sop.tags" :key="tag.tag_id" class="px-2 py-1  items-center  text-xs rounded-md text-gray-500 bg-gray-200 mx-1">{{tag.name}}</span>

            </div>
          </td>
          <td></td>
          <td class="ml-5 text-xs">


<a :href="'https://webapps.bps.go.id/acehsingkilkab/sopkikil/api/download/'+sop.id" type="button" class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
    Download
</a>


          </td>
        </tr>
      </tbody>
    </table>
    </div>



    <!--<button class="flex mx-auto mt-20 text-white bg-blue-500 border-0 py-2 px-8 text-sm focus:outline-none hover:bg-blue-600 rounded ">Lihat lebih banyak</button>-->
  </div>
</section>

<section v-else>
  <div class="container bg-white px-5 py-24 mx-auto">
    <div class="justify-center flex mx-auto w-full">
      Sop Tidak Ditemukan
    </div>
  </div>
</section>
</div>

</template>

<script>
import SopDetail from '../../components/sop/SopDetail.vue'
import VTailwindModal from '../../components/utils/VTailwindModal.vue'
import dayjs from 'dayjs'
import axios from 'axios'
export default {
    name:'SopList',
    components:{
      SopDetail,
      VTailwindModal
    },
    props:{
        sop_list:{
            type:Array,
            default:function(){
                return []
            }

        },
        tags_list:{
            type:Array,
            default:function(){
                return []
            }

        },

    },
    data(){
      return {
        show_modal:false,
        current_sop:'',
      }
    },
    computed: {
        sops() {
            return this.sop_list.map((sop) => {
                let tags = this.tags_list.filter((tag) => {
                    return tag.sop_id == sop.id
                })
                return {
                    "id": sop.id,
                    "title": sop.title,
                    "file_url": sop.file_url,
                    "description":  this.text_truncate(sop.description,200),
                    "img_url": '',
                    "updated": dayjs(sop.updated_at).format('YYYY-MM-DD HH:mm:ss'),
                    "tags": tags


                }

            })
        }
    },
    methods: {
      openModal(){
             this.show_modal=true
        },
        confirm() {
            // some code...
            this.show_modal = false
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
      },
      download_sop(){

      },
      async getSelectedSop(id){
            const url=`/sops/${id}`
            await axios.get(url).then((response)=>{
                const result = response.data
                if(result.success){
                    this.current_sop=result.data

                }
            })
        },

              async detailSop(id){
            await this.getSelectedSop(id)
            this.openModal()
        },
    }

}
</script>