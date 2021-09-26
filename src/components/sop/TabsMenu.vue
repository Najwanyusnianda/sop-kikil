<template>
            <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div class="relative items-center pl-1 flex w-2/3 lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div class="inline-flex w-full px-1 pt-2" v-for="list in list_menu" :key="list.name">

<button @click="changeTabs(list.kode)" type="button" :class="[list.current ? '-mb-px  text-gray-800 border-b-2 border-blue-400 rounded-t' : 'text-gray-800 rounded-t opacity-50']" class="hover:opacity-100 mx-4 py-2 px-4 flex justify-center items-center  w-full transition ease-in duration-200 text-center text-base font-bold">

    {{ list.name  }}
</button>


                    </div>



                </div>
            </div>
</template>

<script>
export default {
    name:'TabsMenu',
    props:{
        tabs_menu:{
            type:Object,
            default:function(){
                return{
                    is_rutin_tabs:1,
                }
            }
        }
    },
    data(){
        return{
            list_menu:[
                {
                    kode:'01',
                    name:'Daftar SOP',
                    current:true
                },
               /* {
                    kode:'02',
                    name:'Buat Sop',
                    current:false
                }*/
            ]
        }
    },
    methods:{
        changeTabs(kode_tabs) {
                        let kodes=kode_tabs

              this.$emit('changedTabs', kodes)
            this.list_menu.map((el) => {

                    if (el.kode == kode_tabs) {
                        return el.current = true
                    } else {
                        return el.current = false
                    }
                }

            );





        }

    }

}
</script>