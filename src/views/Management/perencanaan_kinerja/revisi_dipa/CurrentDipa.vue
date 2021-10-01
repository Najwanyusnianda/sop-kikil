<template>
            <table class=" text-sm font-base text-gray-600 w-5/6 mx-auto items-center  ">
            <thead>
                <tr class="bg-gray-100 ">
                    <th class="py-1">Uraian</th>
                    <th>POK</th>
                    <th>Keterangan</th>
                    <th>Batas Waktu</th>
                </tr>
            </thead>
            <tbody>
                <tr class="items-center text-center border-b  ">
                    <td >{{map_current_dipa.uraian}}</td>

                    <td>



                        <a :href="map_current_dipa.file_pok" download class="py-1 px-1 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
                        </a>
                    </td>
                    <td>

<span class="px-2 py-1  text-xs rounded-full text-white   " :class="[map_current_dipa.is_revisi ? 'bg-green-500' : 'bg-gray-500']">
    {{map_current_dipa.keterangan}}

</span>


                    </td>
                    <td></td>

                </tr>
            </tbody>
        </table>
</template>

<style scoped>
 td {
     @apply py-4 px-2
 }
</style>

<script>
export default {
    name:'CurrentDipa',
        data(){
        return{
            current_dipa:{
              id:'1',
              uraian:'Revisi Ke-7',
              file_pok:'http://www.africau.edu/images/default/sample.pdf',
              is_revisi:false,
              deadline:'2021-11-10',

            }
        }
    },
    computed:{
        map_current_dipa(){
            const dipa=this.current_dipa;
            const keterangan = this.current_dipa.is_revisi ? 'Tersedia Revisi POK' : 'Tidak Tersedia Revisi'
            return {
                id:dipa.id,
                uraian:dipa.uraian,
                file_pok:dipa.file_pok,
                is_revisi:dipa.is_revisi,
                keterangan:keterangan,
                deadline:dipa.deadline
            }
        }
    }
}
</script>