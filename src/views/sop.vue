<template>

  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen w-full overflow-autorelative p-auto">
    <div class="flex items-center justify-center">

      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <header class="w-4/5 shadow-lg bg-white dark:bg-gray-700 justify-items-center mx-auto h-16 rounded-2xl z-40">
            <search-menu></search-menu>
        </header>
        <div class=" h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <div class="flex flex-col flex-wrap sm:flex-row justify-center">
            <div class="w-full  sm:w-1/2 xl:w-4/5">
              <div class="mb-4">

              </div>
              <div class="mb-4">

              </div>
            </div>
            <div class="w-full  sm:w-4/5 xl:w-4/5">
              <div class="mb-4 mx-0 sm:ml-4 xl:mr-4 flex-grow ">
                  <sop-list :sop_list="sops"></sop-list>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import SearchMenu from '../components/sop/SearchMenu.vue'
import SopList from '../components/sop/SopList.vue'

export default {
    name:'Sop',
    components:{
        SearchMenu,
        SopList
  //      MonitoringTask
    },
    data(){
        return{
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

}
</script>
