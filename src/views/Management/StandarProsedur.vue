<template>
    <div class="flex flex-col w-full pl-0 md:px-4 md:space-y-2">
        <!-- tab -->
      <!--  <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <tabs-menu :tabs_menu='tabs_menu' @changedTabs="changeTabs"></tabs-menu>


        </header>-->

    <v-tailwind-modal v-model="show_modal" @confirm="confirm" @cancel="cancel" class="flex w-full">
      <template v-slot:title></template>
      <sop-detail :current_sop="current_sop" ></sop-detail>
    </v-tailwind-modal>

    <!--<button @click="openModal" >show modal</button>-->
        <!------------------------ Main Section -->
        <div class=" bg-gray-100 pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap justify-start sm:flex-row ">
                <div class="w-full ">
                    <div class="mb-4 wowz" v-if="tabs_menu.is_list_sop">
                        <div v-if="is_form_sop">

                            <sop-form @showSopForm="showSopForm" :current_sop="current_sop"></sop-form>
                        </div>
                        <div class="" v-else >
                            <sop-crud @showSopForm="showSopForm"
                            @updateSop="updateSop"
                            @detailSop="detailSop"
                            @deleteSop="deleteSop"
                            :sop_list="sops" :tag_list="tags" ></sop-crud>
                        </div>


                    </div>
                    <div class="mb-4 wow" v-else-if="tabs_menu.is_add_sop">
                        <div class="">
                            <p>dddd</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

import SopCrud from '../../components/sop/SopCrud.vue'
import SopForm from '../../components/sop/SopForm.vue'
import SopDetail from '../../components/sop/SopDetail.vue'
import axios from 'axios'
import VTailwindModal from '../../components/utils/VTailwindModal.vue'
import {mapState} from 'vuex'
//import TabsMenu from '../../components/sop/TabsMenu.vue'

export default {
    components: {
        //TabsMenu,
        //SopList,
        SopCrud,
        SopForm,
        VTailwindModal,
        SopDetail,


    },
    name: 'StandarProsedur',
    data() {
        return {
            show_modal:false,
            tabs_menu: {
                is_list_sop: true,
                is_add_sop: false,

            },
            is_form_sop:false,
            sops:[],
            tags:[],
            current_sop:'',

        }
    },
    computed:{
             ...mapState(['current_month','current_year','is_loading']),
    },
    methods: {
        changeTabs(kode_tabs) {

            if (kode_tabs === "01") {

                 this.tabs_menu.is_list_sop = true
                 this.tabs_menu.is_add_sop = false
                return

            } else if (kode_tabs === "02") {

                this.tabs_menu.is_list_sop = false
                this.tabs_menu.is_add_sop = true
                return

            }
        },
        openModal(){
             this.show_modal=true
        },
        confirm() {
            // some code...
            this.show_modal = false
        },
        cancel(close) {
            // some code...
            close()
        },
        showSopForm(){

            if(this.is_form_sop){
                this.is_form_sop = false
                this.current_sop=''
                this.fetchSops()
            }else{
                this.current_sop=''
                this.is_form_sop=true
            }

        },
        async fetchSops(){
            const url ='/sops'
            await axios.get(url).then((response)=>{
                const res = response.data
                this.sops= res.data.sop_list,
                this.tags=res.data.tags_list

            }).catch((error)=>{
              console.log(error)
              this.$store.commit('SET_LOADING',false)
          })
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
        async updateSop(id){
            await this.getSelectedSop(id)
            this.is_form_sop=true
        },
        async detailSop(id){
            this.$store.commit('SET_LOADING',true)
            await this.getSelectedSop(id)
            this.$store.commit('SET_LOADING',false)
            this.openModal()
        },
        async deleteSop(id){

        await this.getSelectedSop(id)
            this.$swal.fire({
                title:'Hapus SOP?',
                icon:'warning',
                showCancelButton:true,
                confirmButtonColor:"#B91C1C",
                cancelButtonColor: "#6B7280",

            }).then(async (result)=>{
                    const url=`sops/${id}`
                    console.log(result)
                    await axios.delete(url)
                    .then((response)=>{
                        if(response.status===200){
                            this.fetchSops()
                        }
                    }).catch((error)=>{
                        console.log(error)
                    })
            })
        }

    },
    async mounted(){
          this.$store.commit('SET_LOADING',true)
        await this.fetchSops()
         this.$store.commit('SET_LOADING',false)
    }
}

</script>