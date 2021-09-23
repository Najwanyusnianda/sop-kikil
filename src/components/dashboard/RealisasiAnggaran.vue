<template>
    <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
        <p class="font-bold text-md p-4 text-black dark:text-white">
            Realisasi Anggaran
            <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">

            </span>
        </p>
        <hr>
        <div class="block m-auto px-5">
            <LineChart :chartData="testData" :options="options"/>
        </div>

    </div>
</template>

<script>
import { LineChart } from 'vue-chart-3';
import { Chart,  registerables } from "chart.js";
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'

Chart.register(...registerables);
export default {
    name: 'RealisasiAnggaran',
    components: {
        LineChart
    },

    data() {
        return {
            testData:'',
            options:'',
        }
    },
    computed: {
        ...mapState(['current_month','months']),
        ...mapGetters(['months_name'])


    },
    mounted(){
        console.log(this.months_name)
    },
    created(){
          this.options= {
              responsive: true,
              interaction: {
                  mode: 'index',
                  intersect: false,
              },
              stacked: false,
              plugins: {
                  title: {
                      display: true,
                      text: ''
                  },
                        filler: {
        propagate: false,
      },
          pointBackgroundColor: '#fff',
    radius: 10,
    interaction: {
      intersect: false,
    }
              }
          }
        return this.testData = {
                labels: this.months_name,
                datasets: [
                                    {
                     fill: true,
                    label:'Realisasi',
                    data: [10, 10,15,25,30,40,41,43,46],
                    borderColor:'#0984e3',
                    backgroundColor: 'rgba(54, 162, 235,0.6)',
                },{
                    fill: true,
                    label:'target',
                    data: [10, 20, 30, 40, 50,55,60,70,80,90,95,100],
                    borderColor:'#d63031',
                    backgroundColor: 'rgba(255, 99, 132,0.5)',
                },



                ],
            }
    }


}
</script>