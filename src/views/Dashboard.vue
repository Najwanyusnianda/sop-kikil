<template>

  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl  w-full  relative p-auto overflow-scroll">

    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center">
        <!-- <span class="rounded-xl relative p-2 bg-blue-100">

                </span>-->
        <div class="ml-5 flex flex-col mt-10">
          <span class="font-bold text-3xl text-gray-800 dark:text-white ml-2">
            Dashboard
          </span>
          <span class="text-sm text-gray-500 dark:text-white ml-2">

          </span>
        </div>

      </div>
      <div class="flex items-center">

        <!-- <select
                    class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="month">
                    <option value="">
                        Pilih Bulan
                    </option>
                    <option :value="month.value" v-for="month in months" :key="month.value">
                        {{ month.name }}
                    </option>


                </select>-->


        <button class="text-gray-200">
          <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex items-start justify-between">

      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <header class="w-full  dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
          <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
            <span class="text-xl font-semibold">Perkembangan Indikator Kinerja Pelaksanaan Anggaran</span>
          </div>
        </header>
        <div class="bg-white w-full  pb-10 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <div class="flex justify-between mt-5 p-2">
            <div class="font-semibold text-xl p-5"> {{indicator_selected_name ?? 'ikpa'}}</div>
            <select @change="selectedIkpa"
              class="block  w-80 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="month">
              <option :value="ikpa.indicator_id" v-for="ikpa in ikpas_selection" :key="ikpa.indicator_id"
                @change="getIndicatorSeries">
                {{ikpa.name}}
              </option>
            </select>
          </div>
          <div class="w-full flex">
            <div class="sm:w-1/2 flex flex-col p-3">


              <div class="ikpa_chart" v-if="ikpas_selected">
                <ikpa-chart :chartDataset="ikpas_selected" :labelChart="indicator_selected_name"></ikpa-chart>
              </div>
            </div>
            <div class="sm:w-1/2 flex flex-col p-3 px-5 ">

              <table class="min-w-full divide-y divide-gray-200 w-4/5 overflow-scroll table-fixed">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bulan
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nilai
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200" v-if="map_ikpas_selected">
                  <tr v-for="ikpa in map_ikpas_selected " :key="ikpa.ikpa_id">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ikpa.month}}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ikpa.value}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <div class="w-full bg-white pb-10 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">


          <div class="flex justify-between mt-5 p-2">
            <select @change="selectedMonthly"
              class="block  w-80 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="month">
              <option value="0">
                Pilih Bulan
              </option>
              <option :value="month.value" v-for="month in months" :key="month.value">
                {{ month.name }}
              </option>
            </select>
          </div>
          <div class="w-full flex">
            <div class="sm:w-1/2 flex flex-col p-3">
              <div class="ikpa_chart" v-if="monthly_ikpa_selected">

                <ikpa-monthly-chart :chartDataset="monthly_ikpa_selected" :labelChart="month_selected">
                </ikpa-monthly-chart>
              </div>
            </div>
            <div class="sm:w-1/2 flex flex-col p-3">

              <table class="min-w-full divide-y divide-gray-200 w-4/5 overflow-scroll table-fixed">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bulan
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nilai
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nilai Akhir
                    </th>

                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200" v-if="monthly_ikpa_selected">
                  <tr v-for="ikpa in monthly_ikpa_selected" :key="ikpa.ikpa_id">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ikpa.name}}
                      </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ikpa.value}}
                      </td>
                                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ikpa.final_value}}
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import IkpaChart from '../components/dashboard/IkpaChart.vue'
import IkpaMonthlyChart from '../components/dashboard/IkpaMonthlyChart.vue'
//import MonitoringTask from '../components/dashboard/MonitoringTask.vue'
//import RealisasiAnggaran from '../components/dashboard/RealisasiAnggaran.vue'
import {mapState} from 'vuex'
import axios from 'axios'
//import dayjs from 'dayjs'


//import MonitoringTask from '../components/monthly_progress/MonitoringTask.vue';
export default {
    name:'Dashboard',
    components:{
      IkpaChart,
      IkpaMonthlyChart
       // MonitoringTask,
      //  RealisasiAnggaran

  //      MonitoringTask
    },
    data(){
      return{
        ikpas_selection:[
                {indicator_id:'0',name:'IKPA', bobot:5},
                {indicator_id:'1001',name:'Revisi DIPA', bobot:5},
                {indicator_id:'1002',name:'Deviasi Halaman III DIPA', bobot:5},
                {indicator_id:'1003',name:'Pagu Minus', bobot:5},
                {indicator_id:'2001',name:'Penyampaian Data Kontrak', bobot:5},
                {indicator_id:'2002',name:'Pengelolaan UP dan TUP', bobot:5},
                {indicator_id:'2003',name:'Penyampaian LPJ Bendahara', bobot:5},
                {indicator_id:'2004',name:'Dispensasi SPM', bobot:5},
                {indicator_id:'3001',name:'Penyerapan Anggaran', bobot:5},
                {indicator_id:'3002',name:'Penyelesaian Tagihan', bobot:5},
                {indicator_id:'3003',name:'Capaian Output', bobot:5},
                {indicator_id:'3004',name:'Retur SP2D', bobot:5},
                {indicator_id:'3005',name:'Pengembalian SPM', bobot:5},
                {indicator_id:'3006',name:'Perencanaan Kas', bobot:5},
            ],
        ikpas_selected:[],
        indicator_selected_name:'',
        monthly_ikpa_selected:[],
        month_selected:''
      }
      },
    computed:{
      ...mapState(['current_month','months']),
      map_ikpas_selected(){
          return this.ikpas_selected.map((el)=>{
                    return {
          ikpa_id:el.ikpa_id,
          month: this.getSelectedMonthName(el.month_num),
          value:el.value,
          final_value:el.final_value
        }
          })
      }

    },
    methods:{
      getSelectedMonthName(value){
        const months = [ "January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December" ];

        return months[value-1];
      },
      async selectedIkpa(event){
            const indicator_id=event.target.value
            let selected_name=this.ikpas_selection.filter((ind)=>{
              //
              return ind.indicator_id == indicator_id
            });


          // console.log(selected_name)
            const tempSelect= JSON.parse(JSON.stringify(selected_name));
            console.log("this is..")
            console.log(tempSelect[0]);
            await this.getIndicatorSeries(indicator_id)
            this.indicator_selected_name=tempSelect[0].name

            console.log(selected_name)
      },
      async selectedMonthly(event){
          const month_num=event.target.value
          let selected_month = this.months.filter((month)=> month.value == month_num )
           const tempSelect= JSON.parse(JSON.stringify(selected_month));
           await this.getMonthlyIkpa(month_num)
             this.month_selected=tempSelect[0].name

      },
      async getIndicatorSeries(indicator_id){



        const url = `/ikpa/indicator/${indicator_id}`
        await axios.get(url).then((response)=>{
          const result = response.data
          this.ikpas_selected=result.data
         // console.log(this.ikpas_selected)
        })
      },
      async getMonthlyIkpa(month_num =1){
                const url = `/ikpa/month/${month_num}`
        await axios.get(url).then((response)=>{
          const result = response.data
          this.monthly_ikpa_selected=result.data
         // console.log(this.ikpas_selected)
        })
      }
    },
    async created(){
      const url="/get_current_month"
      await axios.get(url).then((response)=>{
       // console.log(response)
        if(response.status ===200){
            this.$store.commit('SET_MONTH', response.data)
        }
      })
      await this.getMonthlyIkpa(10)
      await this.getIndicatorSeries(1001)
    }
}
</script>