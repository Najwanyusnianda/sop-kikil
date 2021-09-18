<template>
            <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div class="container relative left-0 z-50 flex w-2/4 h-auto h-full" v-for="list in list_menu" :key="list.name">

<button @click="changeTabs(list.kode)" type="button" :class="[list.current ? 'focus:outline-none focus:ring-2 focus:ring-offset-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200' : 'focus:outline-none focus:ring-2 focus:ring-offset-2  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200']" class="mx-4 py-2 px-4 flex justify-center items-center  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md  rounded-lg ">

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
                {
                    kode:'02',
                    name:'Buat Sop',
                    current:false
                }
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