<template>
    <div class="flex flex-col w-full pl-0 md:px-4 md:space-y-2">
        <!-- tab -->
      <!--  <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <tabs-menu :tabs_menu='tabs_menu' @changedTabs="changeTabs"></tabs-menu>


        </header>-->
        <!------------------------ Main Section -->
        <div class=" bg-gray-100 pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div class="flex flex-col flex-wrap justify-start sm:flex-row ">
                <div class="w-full ">
                    <div class="mb-4 wowz" v-if="tabs_menu.is_list_sop">
                        <div v-if="is_form_sop">

                            <sop-form @showSopForm="showSopForm"></sop-form>
                        </div>
                        <div class="" v-else >
                            <sop-crud @showSopForm="showSopForm" ></sop-crud>
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
//import TabsMenu from '../../components/sop/TabsMenu.vue'

export default {
    components: {
        //TabsMenu,
        //SopList,
        SopCrud,
        SopForm

    },
    name: 'StandarProsedur',
    data() {
        return {
            tabs_menu: {
                is_list_sop: true,
                is_add_sop: false,

            },
            is_form_sop:false,
            sops:[{"id":1,"sop_name":"Konklab","download_path":"https://netlog.com/platea/dictumst/etiam/faucibus.jpg","tags":[{},{}],"updated":"2021-04-27"},
                    {"id":2,"sop_name":"Lotstring","download_path":"http://pinterest.com/integer.xml","tags":[{}],"updated":"2020-07-19"},
                    {"id":3,"sop_name":"Bitchip","download_path":"http://yelp.com/eu/tincidunt/in/leo/maecenas/pulvinar/lobortis.json","tags":[{},{}],"updated":"2021-07-19"},
                    {"id":4,"sop_name":"Konklux","download_path":"https://yale.edu/massa/tempor/convallis/nulla/neque.js","tags":[{}],"updated":"2021-08-31"},
                    {"id":5,"sop_name":"Regrant","download_path":"http://answers.com/ut/odio/cras.js","tags":[{},{}],"updated":"2021-05-02"},
                    {"id":6,"sop_name":"Temp","download_path":"https://yale.edu/eget/eros.png","tags":[{},{}],"updated":"2020-11-17"},
                    {"id":7,"sop_name":"Otcom","download_path":"http://nasa.gov/luctus/et/ultrices/posuere/cubilia.png","tags":[{}],"updated":"2021-06-19"},
                    {"id":8,"sop_name":"Lotlux","download_path":"http://ed.gov/posuere/cubilia/curae/mauris.json","tags":[{},{}],"updated":"2020-07-09"},
                    {"id":9,"sop_name":"Quo Lux","download_path":"http://sitemeter.com/justo/maecenas.js","tags":[{},{}],"updated":"2021-05-28"},
                    {"id":10,"sop_name":"Opela","download_path":"http://weibo.com/in.jpg","tags":[{}],"updated":"2020-09-22"},
                    {"id":11,"sop_name":"Lotstring","download_path":"https://ameblo.jp/quisque/porta/volutpat/erat.jpg","tags":[{}],"updated":"2020-07-09"},
                    {"id":12,"sop_name":"Tin","download_path":"https://topsy.com/semper/interdum/mauris/ullamcorper/purus/sit.jpg","tags":[{}],"updated":"2021-02-13"},
                    {"id":13,"sop_name":"Matsoft","download_path":"https://goodreads.com/in/hac/habitasse/platea/dictumst/morbi/vestibulum.jsp","tags":[{},{}],"updated":"2021-02-04"},
                    {"id":14,"sop_name":"Hatity","download_path":"http://yahoo.com/ut/ultrices/vel/augue/vestibulum.js","tags":[{}],"updated":"2020-07-26"},
                    {"id":15,"sop_name":"Matsoft","download_path":"https://last.fm/dapibus/dolor/vel/est/donec/odio/justo.aspx","tags":[{},{}],"updated":"2020-09-13"},
                    {"id":16,"sop_name":"Ventosanzap","download_path":"http://xing.com/cras/in/purus/eu/magna.xml","tags":[{}],"updated":"2020-07-18"},
                    {"id":17,"sop_name":"Alpha","download_path":"https://who.int/integer/aliquet/massa/id/lobortis.js","tags":[{}],"updated":"2021-05-15"},
                    {"id":18,"sop_name":"Tampflex","download_path":"http://engadget.com/rutrum/at/lorem/integer/tincidunt.html","tags":[{},{}],"updated":"2020-11-11"},
                    {"id":19,"sop_name":"Hatity","download_path":"https://taobao.com/lacus/curabitur.html","tags":[{},{}],"updated":"2021-04-12"},
                    {"id":20,"sop_name":"Quo Lux","download_path":"https://newsvine.com/odio/condimentum/id.aspx","tags":[{}],"updated":"2021-02-08"}
                ]
        }
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
        showSopForm(){

            if(this.is_form_sop){
                this.is_form_sop = false
            }else{
                this.is_form_sop=true
            }

        }

    }
}

</script>