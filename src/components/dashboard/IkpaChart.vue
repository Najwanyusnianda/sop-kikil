<template>
    <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
        <p class="font-bold text-md p-4 text-black dark:text-white">

            <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">

            </span>
        </p>
        <hr>
        <div class="block m-auto px-5">
            <LineChart :chartData="chartData" :options="options"/>        </div>

    </div>
</template>

<script>
import {
    LineChart
} from 'vue-chart-3';
import {
    Chart,
    registerables
} from "chart.js";
import {
    mapState
} from 'vuex'
import {
    mapGetters
} from 'vuex'

Chart.register(...registerables);
export default {
    name: 'IkpaChart',
    components: {
        LineChart
    },
    props:{
        labelChart:{
            type:String
        },
        chartDataset:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
           // chartData: '',
            options: '',
        }
    },
    computed: {
        ...mapState(['current_month', 'months']),
        ...mapGetters(['months_name']),
        chartData(){
            return{
            labels: this.chartDataset.map((el)=>{
                    return this.getSelectedMonthName(el.month_num)
            } ),
            datasets: [{
                    fill: true,
                    label: this.labelChart,
                    data: this.chartDataset.map((el)=> el.value),
                    borderColor: '#0984e3',
                    backgroundColor: 'rgba(54, 162, 235,0.6)',
                }



            ],
        }

        }


    },
    methods:{
              getSelectedMonthName(value){
        const months = [ "January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December" ];

        return months[value-1];
      },
    },
    mounted() {
        console.log(this.months_name)
    },
    created() {
        this.options = {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
                scales: {
      y: {
        beginAtZero: true
      }
    },
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

    }


}
</script>