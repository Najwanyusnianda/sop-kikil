<template>
    <main class=" dark:bg-gray-800 rounded-2xl  w-full flex relative">
        <div class="flex w-full items-start justify-between">
            <sidebar></sidebar>
            <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                <router-view class="view two" ></router-view>
            </div>
        </div>
    </main>
</template>
<script>
import Sidebar from '../components/sidebar.vue'
//import LaporanBulanan from '../components/LaporanBulanan.vue'
//import PelaksanaanAnggaran from '../components/PelaksanaanAnggaran.vue'
//import PerencanaanKinerja from '../components/PerencanaanKinerja.vue'

export default {
    name:'Management',
    components:{
        Sidebar
    },
    created(){
        this.$router.push({ name: 'StandarProsedur' })
    }
}
</script>